import { createRoute, z } from '@hono/zod-openapi'
import { getCookie, setCookie } from 'hono/cookie'
import { HTTPException } from 'hono/http-exception'
import AController from '~/api/interfaces/controller.abstract'
import { jwtGuard } from '~/middleware'
import { UserSchema } from '~/models'
import { AuthUserSchema, RefreshAuthSchema, SignInUserPayloadSchema, SignUpUserPayloadSchema } from '~/models/auth'
import { AuthService, OAuthService } from '~/services'

const TAG = 'auth'

const RefreshRequestBodySchema = z.object({
  refreshToken: z.string(),
})

class AuthController extends AController {
  private service = new AuthService()
  private oauthService = new OAuthService()

  constructor() {
    super('/auth')

    this.me()
    this.signUp()
    this.signIn()
    this.refresh()
    this.logout()
    this.sendVerificationCode()
    this.oauthGithub()
    this.oauthGithubCallback()
    this.oauthGoogle()
    this.oauthGoogleCallback()
  }

  // Base Auth

  private me = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/me`,
      tags: [TAG],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          content: {
            'application/json': {
              schema: UserSchema.openapi({
                description: 'Authenticated user details',
              }),
            },
          },
          description: 'Auth user',
        },
      },
    })

    this.router.use(route.path, jwtGuard)
    this.router.openapi(
      route,
      async (c) => {
        const user = c.get('user')
        return c.json(UserSchema.parse(user), 200)
      },
    )
  }

  private signUp = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/sign-up`,
      tags: [TAG],
      request: {
        body: {
          content: {
            'application/json': {
              schema: SignUpUserPayloadSchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: AuthUserSchema,
            },
          },
          description: 'Create the user',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const data = await this.service.signUp(body)

        const response = {
          token: data.token,
          refreshToken: data.refreshToken,
          user: data.user,
        }

        return c.json(AuthUserSchema.parse(response), 200)
      },
    )
  }

  private signIn = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/sign-in`,
      tags: [TAG],
      request: {
        body: {
          content: {
            'application/json': {
              schema: SignInUserPayloadSchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: AuthUserSchema,
            },
          },
          description: 'Auth user',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const body = c.req.valid('json')
        const data = await this.service.signIn(body)

        const response = {
          token: data.token,
          refreshToken: data.refreshToken,
          user: data.user,
        }

        return c.json(AuthUserSchema.parse(response), 200)
      },
    )
  }

  private refresh = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/refresh`,
      tags: [TAG],
      request: {
        body: {
          content: {
            'application/json': {
              schema: RefreshRequestBodySchema,
            },
          },
        },
      },
      responses: {
        200: {
          content: {
            'application/json': {
              schema: RefreshAuthSchema,
            },
          },
          description: 'New token pair',
        },
        401: {
          description: 'Unauthorized',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { refreshToken } = c.req.valid('json')

        if (!refreshToken) {
          throw new HTTPException(401, { message: 'Refresh token is missing' })
        }

        try {
          const tokens = await this.service.refreshToken(refreshToken)

          const payload = {
            token: tokens.accessToken,
            refreshToken: tokens.refreshToken,
          }

          return c.json(RefreshAuthSchema.parse(payload), 200)
        }
        catch {
          throw new HTTPException(401, { message: 'Invalid refresh token' })
        }
      },
    )
  }

  private logout = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/logout`,
      tags: [TAG],
      responses: {
        200: {
          description: 'Successfully logged out',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        // Здесь можно добавить логику инвалидации токена в БД, если нужно
        // Но куки чистить серверу больше не нужно, это делает клиент
        return c.text('Successfully logged out', 200)
      },
    )
  }

  private sendVerificationCode = () => {
    const route = createRoute({
      method: 'post',
      path: `${this.path}/send-verification-code`,
      tags: [TAG],
      request: {
        body: {
          content: {
            'application/json': {
              schema: z.object({
                email: z.string().email(),
              }),
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Verification code sent',
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const { email } = c.req.valid('json')
        await this.service.createVerificationCode(email)
        return c.text('Verification code sent', 200)
      },
    )
  }

  // OAuth (Github/Google)
  private oauthGithub = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/github`,
      tags: [TAG],
      responses: {
        302: {
          description: 'Redirect to GitHub OAuth',
          headers: { Location: { schema: { type: 'string' } } },
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const state = Bun.randomUUIDv7()
        const url = new URL('https://github.com/login/oauth/authorize')
        url.searchParams.set('client_id', import.meta.env.GITHUB_CLIENT_ID!)
        url.searchParams.set('redirect_uri', import.meta.env.GITHUB_CALLBACK!)
        url.searchParams.set('state', state)
        url.searchParams.set('scope', 'user:email')

        setCookie(c, 'oauth_state', state, {
          httpOnly: true,
          path: '/',
          sameSite: 'Lax',
          maxAge: 10 * 60,
        })
        return c.redirect(url.toString())
      },
    )
  }

  private oauthGithubCallback = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/github/callback`,
      tags: [TAG],
      request: {
        query: z.object({ code: z.string(), state: z.string() }),
      },
      responses: {
        302: {
          description: 'OAuth callback handler',
          headers: z.object({ Location: z.string() }),
        },
      },
    })
    this.router.openapi(
      route,
      async (c) => {
        const { code, state } = c.req.valid('query')
        const savedState = getCookie(c, 'oauth_state')
        if (!state || state !== savedState) {
          throw new HTTPException(401, { message: 'Invalid state' })
        }
        const { token, refreshToken } = await this.oauthService.github(code, state)

        setCookie(c, 'oauth_state', '', { expires: new Date(0), path: '/' })

        // Передаем оба токена в URL
        return c.redirect(`${import.meta.env.FRONTEND_URL}/auth/callback?token=${token}&refreshToken=${refreshToken}`)
      },
    )
  }

  private oauthGoogle = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/google`,
      tags: [TAG],
      responses: {
        302: {
          description: 'Redirect to Google OAuth',
          headers: { Location: { schema: { type: 'string' } } },
        },
      },
    })

    this.router.openapi(
      route,
      async (c) => {
        const state = Bun.randomUUIDv7()
        const url = new URL('https://accounts.google.com/o/oauth2/v2/auth')
        url.searchParams.set('client_id', import.meta.env.GOOGLE_CLIENT_ID!)
        url.searchParams.set('redirect_uri', import.meta.env.GOOGLE_CALLBACK!)
        url.searchParams.set('response_type', 'code')
        url.searchParams.set('state', state)
        url.searchParams.set('scope', 'openid email profile')
        url.searchParams.set('access_type', 'offline')
        url.searchParams.set('prompt', 'consent')

        setCookie(c, 'oauth_state', state, {
          httpOnly: true,
          path: '/',
          sameSite: 'Lax',
          maxAge: 10 * 60,
        })
        return c.redirect(url.toString())
      },
    )
  }

  private oauthGoogleCallback = () => {
    const route = createRoute({
      method: 'get',
      path: `${this.path}/google/callback`,
      tags: [TAG],
      request: {
        query: z.object({ code: z.string(), state: z.string() }),
      },
      responses: {
        302: {
          description: 'OAuth callback handler',
          headers: z.object({ Location: z.string() }),
        },
      },
    })
    this.router.openapi(
      route,
      async (c) => {
        const { code, state } = c.req.valid('query')
        const savedState = getCookie(c, 'oauth_state')
        if (!state || state !== savedState) {
          throw new HTTPException(401, { message: 'Invalid state' })
        }
        const { token, refreshToken } = await this.oauthService.google(code, state)

        setCookie(c, 'oauth_state', '', { expires: new Date(0), path: '/' })

        return c.redirect(`${import.meta.env.FRONTEND_URL}/auth/callback?token=${token}&refreshToken=${refreshToken}`)
      },
    )
  }
}

export { AuthController }

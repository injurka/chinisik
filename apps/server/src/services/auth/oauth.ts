import type { GitHubEmail, GitHubNormalizedUser, GitHubTokenData, GitHubUser, GoogleNormalizedUser, GoogleTokenData, GoogleUser } from '~/models'
import { HTTPException } from 'hono/http-exception'
import {
  normalizeGitHubUser,
  normalizeGoogleUser,
} from '~/models'
import { prisma } from '~/prisma'
import { generateTokens } from '~/utils/tokens'

class OAuthService {
  github = async (code: string, state: string) => {
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        state,
      }),
    })

    if (!tokenResponse.ok) {
      throw new HTTPException(401, { message: 'GitHub OAuth token exchange failed' })
    }

    const tokenData = await tokenResponse.json() as GitHubTokenData
    const accessToken = tokenData.access_token

    const [userResponse, emailsResponse] = await Promise.all([
      fetch('https://api.github.com/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github+json',
        },
      }),
      fetch('https://api.github.com/user/emails', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github+json',
        },
      }),
    ])

    if (!userResponse.ok) {
      throw new HTTPException(401, { message: 'Failed to fetch GitHub user data' })
    }

    const user = await userResponse.json() as GitHubUser
    const emails = await emailsResponse.json() as GitHubEmail[]

    const normalizedUser: GitHubNormalizedUser = normalizeGitHubUser(user, emails)

    const oauthExistingUser = await prisma.user.findUnique({
      where: { githubId: normalizedUser.id },
    })
    const emailExistingUser = await prisma.user.findUnique({
      where: { email: normalizedUser.email },
    })

    let userId: number | null = null

    if (oauthExistingUser) {
      const { id } = await prisma.user.update({
        where: {
          id: oauthExistingUser.id,
        },
        data: {
          updatedAt: new Date(),
        },
      })
      userId = id
    }
    else if (emailExistingUser) {
      const { id } = await prisma.user.update({
        where: {
          id: emailExistingUser.id,
        },
        data: {
          githubId: normalizedUser.id,
          name: normalizedUser.name || emailExistingUser.name,
          avatarUrl: normalizedUser.avatarUrl || emailExistingUser.avatarUrl,
          updatedAt: new Date(),
        },
      })
      userId = id
    }
    else {
      const { id } = await prisma.user.create({
        data: {
          githubId: normalizedUser.id,
          email: normalizedUser.email,
          name: normalizedUser.name,
          avatarUrl: normalizedUser.avatarUrl,
          UserPermission: {
            create: [{ permission: 'AiGenerate' }],
          },
        },
        include: {
          UserPermission: true,
        },
      })
      userId = id
    }

    const { accessToken: token, refreshToken } = await generateTokens(userId)

    return { token, refreshToken }
  }

  google = async (code: string, _: string) => {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.GOOGLE_CALLBACK!,
        grant_type: 'authorization_code',
      }),
    })

    if (!tokenResponse.ok) {
      throw new HTTPException(401, { message: 'Google OAuth token exchange failed' })
    }

    const tokenData = await tokenResponse.json() as GoogleTokenData

    const userResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    if (!userResponse.ok) {
      throw new HTTPException(401, { message: 'Failed to fetch Google user data' })
    }

    const user = await userResponse.json() as GoogleUser
    const normalizedUser: GoogleNormalizedUser = normalizeGoogleUser(user)

    const oauthExistingUser = await prisma.user.findUnique({
      where: { googleId: normalizedUser.id },
    })
    const emailExistingUser = await prisma.user.findUnique({
      where: { email: normalizedUser.email },
    })

    let userId: number | null = null

    if (oauthExistingUser) {
      const { id } = await prisma.user.update({
        where: {
          id: oauthExistingUser.id,
        },
        data: {
          updatedAt: new Date(),
        },
      })
      userId = id
    }
    else if (emailExistingUser) {
      const { id } = await prisma.user.update({
        where: {
          id: emailExistingUser.id,
        },
        data: {
          googleId: normalizedUser.id,
          name: normalizedUser.name || emailExistingUser.name,
          avatarUrl: normalizedUser.avatarUrl || emailExistingUser.avatarUrl,
          updatedAt: new Date(),
        },
      })
      userId = id
    }
    else {
      const { id } = await prisma.user.create({
        data: {
          googleId: normalizedUser.id,
          email: normalizedUser.email,
          name: normalizedUser.name,
          avatarUrl: normalizedUser.avatarUrl,
          UserPermission: {
            create: [{ permission: 'AiGenerate' }],
          },
        },
        include: {
          UserPermission: true,
        },
      })
      userId = id
    }

    const { accessToken: token, refreshToken } = await generateTokens(userId)

    return { token, refreshToken }
  }
}

export { OAuthService }

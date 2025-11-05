import { z } from '@hono/zod-openapi'
import { UserSchema } from '../user'

const AuthUserSchema = z.object({
  token: z.string()
    .openapi({
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      description: 'JWT token for authenticated requests',
    }),
  refreshToken: z.string().optional().openapi({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    description: 'JWT refresh token',
  }),
  user: UserSchema.openapi({
    description: 'Authenticated user details',
  }),
}).openapi('AuthResponse')

const SignUpUserPayloadSchema = z.object({
  email: z.string().email().openapi({
    example: 'user@example.com',
    description: 'User email for registration',
    format: 'email',
  }),
  email_verification_code: z.string().length(6).openapi({
    example: '123456',
    description: '6-digit verification code sent to email',
  }),
  password: z.string().min(8).max(20).openapi({
    example: 'securePassword123!',
    description: 'Password (8-20 characters)',
    minLength: 8,
    maxLength: 20,
  }),
}).openapi('SignUpPayload')

const SignInUserPayloadSchema = z.object({
  email: z.string().email().openapi({
    example: 'test@test.test',
    description: 'Registered email address',
    format: 'email',
  }),
  password: z.string().min(8).max(20).openapi({
    example: 'testtesttest',
    description: 'Account password',
    minLength: 8,
    maxLength: 20,
  }),
}).openapi('SignInPayload')

const RefreshAuthSchema = z.object({
  token: z.string()
    .openapi({
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      description: 'JWT token for authenticated requests',
    }),
  refreshToken: z.string()
    .openapi({
      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      description: 'JWT refresh token',
    }),
}).openapi('AuthResponse')

export {
  AuthUserSchema,
  RefreshAuthSchema,
  SignInUserPayloadSchema,
  SignUpUserPayloadSchema,
}

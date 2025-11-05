import { z } from '@hono/zod-openapi'
import { ToneTypeSchema } from '../shared'

const FinalSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string(),
  pos: z.number().int().nonnegative(),
})

const InitialSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string(),
  pos: z.number().int().nonnegative(),
})

const InitialsFinalsSchema = z.object({
  id: z.number().int().nonnegative(),
  initialId: z.union([z.number().int().nonnegative(), z.null()]),
  finalToneId: z.number().int().nonnegative(),
})

const FinalsToneSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string(),
  toneType: ToneTypeSchema,
  finalId: z.number().int().nonnegative(),
})

const InitialWithFinalSchema = z.record(
  z.string(),
  z.array(z.number().int().nonnegative()),
)

const PinyinResponseSchema = z.object({
  initials: z.array(FinalSchema),
  finals: z.array(InitialSchema),
  initialWithFinal: InitialWithFinalSchema,
})

export {
  FinalSchema,
  FinalsToneSchema,
  InitialSchema,
  InitialsFinalsSchema,
  InitialWithFinalSchema,
  PinyinResponseSchema,
}

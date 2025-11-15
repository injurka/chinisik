import type { OpenAPIHono as Hono } from '@hono/zod-openapi'

import {
  AuthController,
  CmsController,
  DayMaterialController,
  HieroglyphHskController,
  HieroglyphKeyController,
  LinguisticAnalysisController,
  LlmController,
  PinyinController,
  UserController,
} from './controllers'

const COMBINE_V1 = {
  BASE_PATH: '/api/v1',
  CONTROLLERS: [
    new AuthController(),
    new UserController(),
    new HieroglyphKeyController(),
    new HieroglyphHskController(),
    new LlmController(),
    new CmsController(),
    new PinyinController(),
    new LinguisticAnalysisController(),
    new DayMaterialController(),
  ],
}

export function setupRoutes(server: Hono) {
  COMBINE_V1.CONTROLLERS.forEach((controller) => {
    server.route(COMBINE_V1.BASE_PATH, controller.router)
  })
}

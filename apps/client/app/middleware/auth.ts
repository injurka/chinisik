/* eslint-disable unused-imports/no-unused-vars */
interface RouteMetaAuth {
  requiredRoles?: string[]
  requiresAuth?: boolean
}

export default defineNuxtRouteMiddleware((to) => {
  const { requiredRoles = [], requiresAuth = false } = to.meta as RouteMetaAuth

  // TODO
})

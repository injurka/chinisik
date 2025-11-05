import Server from './server'

const app = Server.getServer()

export default {
  port: import.meta.env.PORT,
  fetch: app.fetch,
  idleTimeout: 120,
}

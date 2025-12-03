export async function mockUser() {
  return [{
    name: 'dev',
    email: 'dev@dev.dev',
    password: await Bun.password.hash('12345678'),
  }]
}

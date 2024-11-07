export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',
}

export const RoutePaths = {
  Keys: '/keys',
  Pinyin: '/pinyin',
  Glossary: '/glossary',

  Auth: {
    SignIn: '/auth/sign-in',
    SignUp: '/auth/sign-up',
    ForgotPassword: '/auth/forgot-password',
  },
}

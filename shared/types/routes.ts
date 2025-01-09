export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  SplitGlyphs = 'split-glyphs',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',
}

export const RoutePaths = {
  Keys: '/keys',
  Pinyin: '/pinyin',
  Glossary: '/glossary',
  GlossaryTopic: (value: string) => `/glossary/${value}/topic`,
  SplitGlyphs: '/split-glyphs',

  Auth: {
    SignIn: '/auth/sign-in',
    SignUp: '/auth/sign-up',
    ForgotPassword: '/auth/forgot-password',
  },
}

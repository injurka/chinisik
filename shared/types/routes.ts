export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  SplitGlyphs = 'split-glyphs',
  LinguisticAnalysis = 'linguistic-analysis',
  HSK = 'hsk',

  About = 'about',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',
}

export const RoutePaths = {
  Keys: (value: 'list' | 'lab') => `/keys?tab=${value}`,
  Pinyin: '/pinyin',
  Glossary: '/glossary',
  GlossaryTopic: (value: string) => `/glossary/${value}/topic`,
  SplitGlyphs: '/split-glyphs',
  LinguisticAnalysis: '/linguistic-analysis',
  HSK: (value: 'about' | 'words' | 'lab') => `/hsk?${value}`,

  About: '/about',

  Auth: {
    SignIn: '/auth/sign-in',
    SignUp: '/auth/sign-up',
    ForgotPassword: '/auth/forgot-password',
  },
}

export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  SplitGlyphs = 'split-glyphs',
  LinguisticAnalysis = 'linguistic-analysis',
  HSK = 'hsk',
  ThematicDictionary = 'thematic-dictionary',

  About = 'about',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',

  PersonalShanghai = 'personal-shanghai',

}

export const RoutePaths = {
  Keys: (value: 'list' | 'lab') => `/keys?tab=${value}`,
  Pinyin: '/pinyin',
  Glossary: '/glossary',
  GlossaryTopic: (value: string) => `/glossary/${value}/topic`,
  SplitGlyphs: '/split-glyphs',
  LinguisticAnalysis: '/linguistic-analysis',
  HSK: (value: 'about' | 'words' | 'lab') => `/hsk?${value}`,
  ThematicDictionary: {
    Sections: '/thematic-dictionary',
    Categories: (section: string) => `/thematic-dictionary/${section}`,
    Category: (section: string, category: string) => `/thematic-dictionary/${section}/${category}`,
  },

  About: '/about',

  Auth: {
    SignIn: '/auth/sign-in',
    SignUp: '/auth/sign-up',
    ForgotPassword: '/auth/forgot-password',
  },

  Personal: {
    Shanghai: (sysname: string) => `/personal/shanghai/${sysname}`,
  },
}

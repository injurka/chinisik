export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  SplitGlyphs = 'split-glyphs',
  LinguisticAnalysis = 'linguistic-analysis',
  LinguisticAnalysisHistory = 'linguistic-analysis-history',
  HSK = 'hsk',
  ThematicDictionary = 'thematic-dictionary',

  About = 'about',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',

  ToonManually = 'toon-manually',

}

export const RoutePaths = {
  Keys: (value: 'list' | 'lab') => `/keys?tab=${value}`,
  Pinyin: '/pinyin',
  Glossary: '/glossary',
  GlossaryTopic: (value: string) => `/glossary/${value}/topic`,
  SplitGlyphs: '/split-glyphs',
  LinguisticAnalysis: {
    Index: '/linguistic-analysis',
    History: '/linguistic-analysis/history',
  },
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

  Toon: {
    List: '/toon/list',
    Manually: '/toon/manually',
  },
}

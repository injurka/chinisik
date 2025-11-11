export enum RouteNames {
  Keys = 'keys',
  Pinyin = 'pinyin',
  Glossary = 'glossary',
  LinguisticAnalysis = 'linguistic-analysis',
  LinguisticAnalysisHistory = 'linguistic-analysis-history',
  HSK = 'hsk',
  ThematicDictionary = 'thematic-dictionary',
  Books = 'books',
  BookDetails = 'books-id',
  BookReader = 'books-id-read',

  About = 'about',

  AuthSignIn = 'auth-sign-in',
  AuthSignUp = 'auth-sign-up',
  AuthForgotPassword = 'auth-forgot-password',

  ToonManually = 'toon-manually',

  QuizAudio = 'quiz-audio',
}

export const RoutePaths = {
  Keys: {
    Index: () => '/keys',
    Tab: (value: 'list' | 'lab') => `/keys?tab=${value}`,
  },
  Pinyin: () => '/pinyin',
  Glossary: {
    Index: () => '/glossary',
    Page: (sysname: string, tab: 'topic' | 'brief' | 'lab') => `/glossary/${sysname}/${tab}`,
  },
  LinguisticAnalysis: {
    Index: () => '/linguistic-analysis',
    History: () => '/linguistic-analysis/history',
  },
  HSK: {
    Index: () => '/hsk',
    Tab: (value: 'about' | 'words' | 'lab') => `/hsk?tab=${value}`,
  },
  ThematicDictionary: {
    Sections: () => '/thematic-dictionary',
    Categories: (section: string) => `/thematic-dictionary/${section}`,
    Category: (section: string, category: string) => `/thematic-dictionary/${section}/${category}`,
  },
  Books: {
    Index: () => '/books',
    Details: (id: string) => `/books/${id}`,
    Read: (id: string) => `/books/${id}/read`,
  },

  About: () => '/about',

  Auth: {
    SignIn: () => '/auth/sign-in',
    SignUp: () => '/auth/sign-up',
    ForgotPassword: () => '/auth/forgot-password',
  },

  Toon: {
    List: () => '/toon/list',
    Manually: () => '/toon/manually',
  },

  Quiz: {
    Audio: () => '/quiz/audio',
  },
}

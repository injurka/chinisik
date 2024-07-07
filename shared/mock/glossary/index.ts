import { mvGlossary1, mvGlossaryItem1 } from './glossary/1_modalVerb'
import { keyiNengHuiGlossary2, keyiNengHuiGlossaryItem2 } from './glossary/2_keyiNengHui'
import { familyGlossary3, familyGlossaryItem3 } from './glossary/3_family'
import { afterwordGlossary4, afterwordGlossaryItem4 } from './glossary/4_afterword'
import { countingWordsGlossary5, countingWordsGlossaryItem5 } from './glossary/5_countingWords'
import { leGlossary6, leGlossaryItem6 } from './glossary/6_le'
import type { IGlossaryContent, IGlossaryItem } from '#/types/glossary'

export const glossaryItems: IGlossaryItem[] = [
  mvGlossaryItem1,
  keyiNengHuiGlossaryItem2,
  familyGlossaryItem3,
  afterwordGlossaryItem4,
  countingWordsGlossaryItem5,
  leGlossaryItem6,
]
export const glossary: IGlossaryContent[] = [
  mvGlossary1,
  keyiNengHuiGlossary2,
  familyGlossary3,
  afterwordGlossary4,
  countingWordsGlossary5,
  leGlossary6,
]

/**
 * PinyinAnalysis представляет полный анализ одного слога пиньиня.
 */
export interface PinyinAnalysis {
  toneMark: string
  toneNumber: 1 | 2 | 3 | 4 | 5
  position: number
  rawPinyin: string
  initial: string
  final: string
}

const toneMap = {
  '\u0304': 1, // Макрон (первый тон)
  '\u0301': 2, // Акут (второй тон)
  '\u030C': 3, // Гачек (третий тон)
  '\u0300': 4, // Гравис (четвертый тон)
} as const

type ToneCharacter = keyof typeof toneMap

function isToneCharacter(char: string): char is ToneCharacter {
  return char in toneMap
}

const pinyinInitials = [
  'zh',
  'ch',
  'sh',
  'b',
  'p',
  'm',
  'f',
  'd',
  't',
  'n',
  'l',
  'g',
  'k',
  'h',
  'j',
  'q',
  'x',
  'r',
  'z',
  'c',
  's',
  'y',
  'w',
]

// --- НОВЫЙ БЛОК: СЛОВАРЬ СЛОГОВ И ФУНКЦИЯ СЕГМЕНТАЦИИ ---

// Полный набор всех возможных слогов пиньиня без тонов.
// Используем Set для быстрого O(1) поиска.
const pinyinSyllableSet = new Set([
  'a',
  'o',
  'e',
  'er',
  'ai',
  'ei',
  'ao',
  'ou',
  'an',
  'en',
  'ang',
  'eng',
  'ong',
  'ba',
  'bo',
  'bai',
  'bei',
  'bao',
  'ban',
  'ben',
  'bang',
  'beng',
  'bi',
  'bie',
  'biao',
  'bian',
  'bin',
  'bing',
  'bu',
  'pa',
  'po',
  'pai',
  'pei',
  'pao',
  'pou',
  'pan',
  'pen',
  'pang',
  'peng',
  'pi',
  'pie',
  'piao',
  'pian',
  'pin',
  'ping',
  'pu',
  'ma',
  'mo',
  'me',
  'mai',
  'mei',
  'mao',
  'mou',
  'man',
  'men',
  'mang',
  'meng',
  'mi',
  'mie',
  'miao',
  'mian',
  'min',
  'ming',
  'mu',
  'fa',
  'fo',
  'fei',
  'fou',
  'fan',
  'fen',
  'fang',
  'feng',
  'fu',
  'da',
  'de',
  'dai',
  'dei',
  'dao',
  'dou',
  'dan',
  'den',
  'dang',
  'deng',
  'dong',
  'di',
  'die',
  'diao',
  'dian',
  'ding',
  'du',
  'duo',
  'dui',
  'dun',
  'duan',
  'ta',
  'te',
  'tai',
  'tao',
  'tou',
  'tan',
  'tang',
  'teng',
  'tong',
  'ti',
  'tie',
  'tiao',
  'tian',
  'ting',
  'tu',
  'tuo',
  'tui',
  'tun',
  'tuan',
  'na',
  'ne',
  'nai',
  'nei',
  'nao',
  'nou',
  'nan',
  'nen',
  'nang',
  'neng',
  'nong',
  'ni',
  'nie',
  'niao',
  'nian',
  'nin',
  'niang',
  'ning',
  'nu',
  'nuo',
  'nuan',
  'nü',
  'nüe',
  'la',
  'le',
  'lai',
  'lei',
  'lao',
  'lou',
  'lan',
  'lang',
  'leng',
  'long',
  'li',
  'lia',
  'lie',
  'liao',
  'lian',
  'lin',
  'liang',
  'ling',
  'lu',
  'luo',
  'luan',
  'lun',
  'lü',
  'lüe',
  'ga',
  'ge',
  'gai',
  'gei',
  'gao',
  'gou',
  'gan',
  'gen',
  'gang',
  'geng',
  'gong',
  'gu',
  'gua',
  'guo',
  'guai',
  'gui',
  'gun',
  'guang',
  'ka',
  'ke',
  'kai',
  'kei',
  'kao',
  'kou',
  'kan',
  'ken',
  'kang',
  'keng',
  'kong',
  'ku',
  'kua',
  'kuo',
  'kuai',
  'kui',
  'kun',
  'kuang',
  'ha',
  'he',
  'hai',
  'hei',
  'hao',
  'hou',
  'han',
  'hen',
  'hang',
  'heng',
  'hong',
  'hu',
  'hua',
  'huo',
  'huai',
  'hui',
  'hun',
  'huang',
  'ji',
  'jia',
  'jie',
  'jiao',
  'jiu',
  'jian',
  'jin',
  'jiang',
  'jing',
  'jiong',
  'ju',
  'jue',
  'juan',
  'jun',
  'qi',
  'qia',
  'qie',
  'qiao',
  'qiu',
  'qian',
  'qin',
  'qiang',
  'qing',
  'qiong',
  'qu',
  'que',
  'quan',
  'qun',
  'xi',
  'xia',
  'xie',
  'xiao',
  'xiu',
  'xian',
  'xin',
  'xiang',
  'xing',
  'xiong',
  'xu',
  'xue',
  'xuan',
  'xun',
  'zhi',
  'zha',
  'zhe',
  'zhai',
  'zhei',
  'zhao',
  'zhou',
  'zhan',
  'zhen',
  'zhang',
  'zheng',
  'zhong',
  'zhu',
  'zhua',
  'zhuo',
  'zhuai',
  'zhui',
  'zhun',
  'zhuang',
  'chi',
  'cha',
  'che',
  'chai',
  'chao',
  'chou',
  'chan',
  'chen',
  'chang',
  'cheng',
  'chong',
  'chu',
  'chua',
  'chuo',
  'chuai',
  'chui',
  'chun',
  'chuang',
  'shi',
  'sha',
  'she',
  'shai',
  'shei',
  'shao',
  'shou',
  'shan',
  'shen',
  'shang',
  'sheng',
  'shu',
  'shua',
  'shuo',
  'shuai',
  'shui',
  'shun',
  'shuang',
  'ri',
  're',
  'rao',
  'rou',
  'ran',
  'ren',
  'rang',
  'reng',
  'rong',
  'ru',
  'ruo',
  'rui',
  'run',
  'zi',
  'za',
  'ze',
  'zai',
  'zei',
  'zao',
  'zou',
  'zan',
  'zen',
  'zang',
  'zeng',
  'zong',
  'zu',
  'zuo',
  'zui',
  'zun',
  'zuan',
  'ci',
  'ca',
  'ce',
  'cai',
  'cao',
  'cou',
  'can',
  'cen',
  'cang',
  'ceng',
  'cong',
  'cu',
  'cuo',
  'cui',
  'cun',
  'cuan',
  'si',
  'sa',
  'se',
  'sai',
  'sao',
  'sou',
  'san',
  'sen',
  'sang',
  'seng',
  'song',
  'su',
  'suo',
  'sui',
  'sun',
  'suan',
  'yi',
  'ya',
  'yo',
  'ye',
  'yao',
  'you',
  'yan',
  'yin',
  'yang',
  'ying',
  'yong',
  'yu',
  'yue',
  'yuan',
  'yun',
  'wu',
  'wa',
  'wo',
  'wai',
  'wei',
  'wan',
  'wen',
  'wang',
  'weng',
])

/**
 * Убирает тоновые знаки из слога пиньиня.
 * @param syllable Слог с тоном, например "nǐ"
 * @returns Слог без тона, например "ni"
 */
function stripTones(syllable: string): string {
  return syllable.normalize('NFD').replace(/[\u0300-\u0302\u0304\u030C\u030D]/g, '')
}

/**
 * Сегментирует слитную строку пиньиня на отдельные слоги.
 * @param pinyin Строка пиньиня, например "Běijīng"
 * @returns Массив слогов, например ["Běi", "jīng"]
 */
function segmentPinyin(pinyin: string): string[] {
  // Сначала убираем все пробелы и апострофы, чтобы работать с чистой строкой
  const cleanPinyin = pinyin.replace(/[\s']/g, '').toLowerCase()
  const result: string[] = []
  let i = 0

  while (i < cleanPinyin.length) {
    let found = false
    // Ищем самый длинный возможный слог (максимальная длина ~6, например, 'zhuang')
    for (let j = Math.min(i + 7, cleanPinyin.length); j > i; j--) {
      const sub = cleanPinyin.substring(i, j)
      const tonelessSub = stripTones(sub)

      if (pinyinSyllableSet.has(tonelessSub)) {
        // Нашли валидный слог! Добавляем его в результат.
        result.push(sub)
        i = j
        found = true
        break
      }
    }
    // Если слог не найден (например, ошибка в написании), просто пропускаем символ, чтобы избежать бесконечного цикла.
    if (!found) {
      i++
    }
  }
  return result
}

// --- КОНЕЦ НОВОГО БЛОКА ---

/**
 * Анализирует строку пиньиня и возвращает детальную информацию по каждому слогу.
 * @param pinyin - Строка с пиньинем (например, "nǐ hǎo" или "Běijīng").
 * @returns Массив объектов PinyinAnalysis для каждого слога.
 */
function analyzePinyin(pinyin: string): PinyinAnalysis[] {
  // Используем новый надежный сегментатор
  const syllables = segmentPinyin(pinyin)
  const results: PinyinAnalysis[] = []

  for (const syllable of syllables) {
    const normalizedSyllable = syllable.normalize('NFD')
    let toneMark: ToneCharacter | string = ''
    let toneNumber: 1 | 2 | 3 | 4 | 5 = 5
    let position = -1
    let rawPinyin = ''

    let toneFound = false
    for (let i = 0; i < normalizedSyllable.length; i++) {
      const char = normalizedSyllable[i] as string

      if (isToneCharacter(char)) {
        toneMark = char
        toneNumber = toneMap[char]
        position = i - 1
        toneFound = true
        break
      }
    }

    rawPinyin = toneFound ? normalizedSyllable.replace(toneMark, '') : normalizedSyllable
    rawPinyin = rawPinyin.normalize('NFC') // Собираем 'ü' обратно

    let initial = ''
    let final = rawPinyin

    for (const pinyinInitial of pinyinInitials) {
      if (rawPinyin.startsWith(pinyinInitial)) {
        initial = pinyinInitial
        final = rawPinyin.substring(pinyinInitial.length)
        break
      }
    }

    results.push({
      toneMark,
      toneNumber,
      position,
      rawPinyin,
      initial,
      final,
    })
  }

  return results
}

export { analyzePinyin }

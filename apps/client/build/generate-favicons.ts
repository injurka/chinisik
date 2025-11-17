/* eslint-disable no-console */
import fs from 'node:fs/promises'
import path from 'node:path'
import { favicons } from 'favicons'

const src = './public/logo.png' // Исходное изображение
const dest = './public/icons' // Папка для сгенерированных файлов

const configuration = {
  path: '/icons/', // Путь, который будет использоваться в HTML
  appName: 'Chinisik',
  appShortName: 'Chinisik',
  appDescription: 'Место для возносения до уровня ТанСана! Познай мир иероглифов.',
  developerName: 'Ivan Kornilov',
  developerURL: 'https://github.com/injurka/chinisik',
  background: '#0d1117', // Цвет фона из вашей темной темы
  theme_color: '#0d1117', // Цвет темы для PWA и Android
  lang: 'ru-RU',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/',
  version: '1.0',
  logging: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false, // Отключено, чтобы не создавать слишком много файлов
    favicons: true,
    windows: true,
    yandex: false,
  },
}

async function generateFavicons() {
  console.log('🚀 Начинаем генерацию иконок...')
  try {
    await fs.access(src)
  }
  catch {
    console.error(`❌ Ошибка: Исходный файл не найден по пути ${src}`)
    console.error('Пожалуйста, убедитесь, что файл logo.png существует в папке /public.')
    return
  }

  try {
    const response = await favicons(src, configuration)

    await fs.mkdir(dest, { recursive: true })
    console.log(`✅ Создана директория для иконок: ${dest}`)

    await Promise.all(
      response.images.map(
        async image =>
          await fs.writeFile(path.join(dest, image.name), image.contents),
      ),
    )
    console.log(`🖼️  Сгенерировано ${response.images.length} изображений.`)

    await Promise.all(
      response.files.map(
        async file =>
          await fs.writeFile(path.join(dest, file.name), file.contents),
      ),
    )
    console.log(`📄 Сгенерировано ${response.files.length} файлов манифеста.`)

    console.log('✅ Генерация иконок успешно завершена!')
    console.log(`👍 Проверьте результат в папке ${dest}.`)
  }
  catch (error) {
    console.error('❌ Произошла ошибка во время генерации:', error)
  }
}

generateFavicons()

enum FontCnVariant {
  Base = 'base',
  Brushed = 'brushed',
}

function useChangeFontCn() {
  const font = useCookie<FontCnVariant>(FONT_FAMILY_CN)

  const applyFontCnFamily = (value: FontCnVariant) => {
    const rootElement = document.querySelector('html')

    if (rootElement)
      rootElement.dataset.cn = value
  }

  const toggleFontCnFamily = () => {
    font.value = font.value === FontCnVariant.Base
      ? FontCnVariant.Brushed
      : FontCnVariant.Base

    applyFontCnFamily(font.value)
  }

  const setFontCnFamily = (value: FontCnVariant) => {
    font.value = value

    applyFontCnFamily(font.value)
  }

  return {
    fontCn: font,
    setFontCnFamily,
    toggleFontCnFamily,
  }
}

export { FontCnVariant }
export { useChangeFontCn }

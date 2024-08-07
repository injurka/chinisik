enum Variant {
  Base = 'base',
  Brushed = 'brushed',
}

export function useChangeFontCn() {
  const font = useCookie(FONT_FAMILY_CN)

  const setFontCnFamily = (value: string) => {
    const rootElement = document.querySelector('html')

    if (rootElement)
      rootElement.dataset.cn = value
  }

  const toggleFontCnFamily = () => {
    const newFontVariant = font.value === Variant.Base
      ? Variant.Brushed
      : Variant.Base
    font.value = newFontVariant
    setFontCnFamily(newFontVariant)
  }

  return {
    fontCn: font,
    setFontCnFamily,
    toggleFontCnFamily,
  }
}

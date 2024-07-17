enum Variant {
  Base = 'base',
  Brushed = 'brushed',
}

export function useChangeFontCn() {
  const font = useCookie(FONT_FAMILY)

  const setFontFamily = (value: string) => {
    const rootElement = document.querySelector('html')

    if (rootElement)
      rootElement.dataset.cn = value
  }

  const toggleFontFamily = () => {
    const newFontVariant = font.value === Variant.Base
      ? Variant.Brushed
      : Variant.Base
    font.value = newFontVariant
    setFontFamily(newFontVariant)
  }

  return { setFontFamily, toggleFontFamily }
}

import type { HieroglyphWordVariant } from '~/components/domain/hieroglyph-word/types'
import type { PinyinTextProps } from '~/components/domain/pinyin-text'
import { useDisplay } from 'vuetify' // Импортируем useDisplay
import { VSnackbar, VTooltip } from 'vuetify/components'
import { useHieroglyphWordStore } from '~/components/domain/hieroglyph-word/store'
import { PinyinText } from '~/components/domain/pinyin-text'

import './index.scss'

const props = {
  variant: { type: Number as PropType<HieroglyphWordVariant> },
  pinyin: { type: [Object, String] as PropType<PinyinTextProps | string> },
  translate: { type: String },
  glyph: { type: String, required: true },
}

const HieroglyphWordVarious = defineComponent({
  name: 'WordVarious',
  props,
  components: { VTooltip, PinyinText, VSnackbar },
  setup(props) {
    const isActive = ref<boolean>(false)
    const isTooltipHovered = ref<boolean>(false)
    const snackbar = ref<boolean>(false)
    const snackbarText = ref<string>('')
    const { mobile } = useDisplay()

    const handleActivatorMouseEnter = () => {
      isActive.value = true
    }

    const handleActivatorMouseLeave = () => {
      setTimeout(() => {
        if (!isTooltipHovered.value) {
          isActive.value = false
        }
      }, 100)
    }

    const handleTooltipMouseEnter = () => {
      isTooltipHovered.value = true
      isActive.value = true
    }

    const handleTooltipMouseLeave = () => {
      isTooltipHovered.value = false
      setTimeout(() => {
        if (!isTooltipHovered.value) {
          isActive.value = false
        }
      }, 300)
    }

    const showSnackbar = (text: string) => {
      snackbarText.value = text
      snackbar.value = true
    }

    const copyTranslate = () => {
      navigator.clipboard.writeText(`${props.translate}`).then(() => {
        showSnackbar('Перевод скопирован!')
      }).catch((err) => {
        console.error('Failed to copy text: ', err)
        showSnackbar('Ошибка при копировании перевода!')
      })
    }

    const copyPinyin = () => {
      const isPinyinText = typeof props.pinyin === 'string'
      const isPinyinComplex = !isPinyinText && !!props.pinyin?.pinyin
      const textToCopy = isPinyinText ? props.pinyin : isPinyinComplex ? props.pinyin.pinyin : ''

      navigator.clipboard.writeText(textToCopy).then(() => {
        showSnackbar('Пиньинь скопирован!')
      }).catch((err) => {
        console.error('Failed to copy text: ', err)
        showSnackbar('Ошибка при копировании пиньиня!')
      })
    }

    const tooltipText = (variant: 'full' | 'pinyin' | 'translate') => {
      const isPinyinText = typeof props.pinyin === 'string'
      const isPinyinComplex = !isPinyinText && !!props.pinyin?.pinyin

      switch (variant) {
        case 'full':
          return (
            <div
              class="hw-tip"
              onMouseenter={handleTooltipMouseEnter}
              onMouseleave={handleTooltipMouseLeave}
            >
              {isPinyinComplex && (
                <div class="hw-tip-pinyin" onClick={() => copyPinyin()}>
                  <PinyinText
                    {...props.pinyin}
                    colored={props.pinyin.colored}
                  />
                </div>
              )}
              {isPinyinText && (
                <div class="hw-tip-pinyin" onClick={() => copyPinyin()}>
                  {props.pinyin}
                </div>
              )}
              {(isPinyinText || isPinyinComplex) && props.translate && <hr class="hw-tip-hr" />}
              {props.translate && (
                <div class="hw-tip-translate" onClick={() => copyTranslate()}>
                  {props.translate}
                </div>
              )}
            </div>
          )
        case 'pinyin':
          return (
            <div
              class="hw-tip"
              onMouseenter={handleTooltipMouseEnter}
              onMouseleave={handleTooltipMouseLeave}
            >
              {isPinyinComplex && (
                <div class="hw-tip-pinyin" onClick={() => copyPinyin()}>
                  <PinyinText
                    {...props.pinyin}
                    colored={props.pinyin.colored}
                  />
                </div>
              )}
              {isPinyinText && (
                <div class="hw-tip-pinyin" onClick={() => copyPinyin()}>
                  {props.pinyin}
                </div>
              )}
            </div>
          )
        case 'translate':
          return (
            <div
              class="hw-tip"
              onMouseenter={handleTooltipMouseEnter}
              onMouseleave={handleTooltipMouseLeave}
            >
              {props.translate && (
                <div class="hw-tip-translate" onClick={() => copyTranslate()}>
                  {props.translate}
                </div>
              )}
            </div>
          )
        default:
          break
      }
    }

    const tooltipProps = {
      'openDelay': 100,
      'activator': 'parent',
      'location': 'top',
      'noClickAnimation': true,
      'zIndex': 9999,
      'modelValue': isActive.value,
      'onUpdate:modelValue': (value: boolean) => isActive.value = value,
      'openOnClick': true,
      'openOnFocus': true,
      'openOnHover': false,
      'transition': 'fade-transition',
      'closeDelay': 300,
      'offset': 4,
    } satisfies VTooltip['$props']

    const graphContent = computed(() => {
      return props.glyph
    })

    const pinyinContent = computed(() => {
      const el = props.pinyin
        && (
          typeof props.pinyin === 'string'
            ? props.pinyin
            : (
                // @ts-expect-error vue/jsx-runtime
                <PinyinText
                  {...props.pinyin}
                  colored={props.pinyin.colored}
                />
              )
        )

      if (props.variant === 2) {
        return el && (
          <span class="hw-pinyin">
            (
            {el}
            )
          </span>
        )
      }

      return el && (
        <span class="hw-pinyin">
          {el}
        </span>
      )
    })

    const translateContent = computed(() => {
      return props.translate
        && (
          <span class="hw-translate">
            {props.translate}
          </span>
        )
    })

    useRender(() => {
      return (
        <>
          <VSnackbar
            v-model={snackbar.value}
            timeout={2000}
            location={mobile.value ? 'bottom' : 'top'}
            color="var(--bg-tertiary-color)"
            variant="flat"
          >
            <div class="hw-snackbar">
              {snackbarText.value}
            </div>
          </VSnackbar>

          {(() => {
            switch (props.variant) {
              case 0:
                return (
                  <span
                    class="hw-glyph"
                    onMouseenter={handleActivatorMouseEnter}
                    onMouseleave={handleActivatorMouseLeave}
                  >
                    <VTooltip class="hw-tooltip" {...tooltipProps} modelValue={isActive.value}>
                      {tooltipText('full')}
                    </VTooltip>
                    {graphContent.value}
                  </span>
                )

              case 1:
                return (
                  <>
                    <span
                      class="hw-glyph"
                      onMouseenter={handleActivatorMouseEnter}
                      onMouseleave={handleActivatorMouseLeave}
                    >
                      <VTooltip {...tooltipProps} modelValue={isActive.value}>
                        {tooltipText('pinyin')}
                      </VTooltip>
                      {graphContent.value}
                    </span>
                    —
                    {translateContent.value}
                  </>
                )

              case 2:
                return (
                  <>
                    <span
                      class="hw-glyph"
                      onMouseenter={handleActivatorMouseEnter}
                      onMouseleave={handleActivatorMouseLeave}
                    >
                      <VTooltip {...tooltipProps} modelValue={isActive.value}>
                        {tooltipText('translate')}
                      </VTooltip>
                      {graphContent.value}
                    </span>
                    {pinyinContent.value}
                  </>
                )

              case 3:
                return (
                  <>
                    {pinyinContent.value}
                    <span class="hw-glyph">{graphContent.value}</span>
                    {translateContent.value}
                  </>
                )

              case 4:
                return (
                  <>
                    {pinyinContent.value}
                    <span class="hw-glyph">{graphContent.value}</span>
                    {translateContent.value}
                  </>
                )

              case 5:
                return (
                  <>
                    <span class="hw-glyph">{graphContent.value}</span>
                    <div class="hw-pinyin-translate">
                      {pinyinContent.value}
                      {translateContent.value}
                    </div>
                  </>
                )
              default:
                return <template />
            }
          })()}
        </>
      )
    })
  },
})

const HieroglyphWord = defineComponent({
  name: 'Word',
  props,
  components: { WordVarious: HieroglyphWordVarious },
  setup(props) {
    const store = useHieroglyphWordStore()
    const variant = computed(() => (props.variant ?? store.variant) as HieroglyphWordVariant)
    const extraClasses = computed(() => {
      const classes: string[] = []

      if (!props.pinyin)
        classes.push('hw-none-pinyin')
      if (!props.translate)
        classes.push('hw-none-translate')

      return classes
    })

    useRender(() => (
      <span class={[
        'hw-word',
        `variant-${variant.value}`,
        ...extraClasses.value,
      ]}
      >
        <HieroglyphWordVarious
          {...props}
          variant={variant.value}
          key={variant.value}
        />
      </span>
    ))
  },
})

export {
  HieroglyphWord,
}

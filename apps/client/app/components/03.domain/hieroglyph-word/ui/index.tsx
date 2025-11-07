import type { HieroglyphWordVariant } from '~/components/03.domain/hieroglyph-word/types'
import type { PinyinTextProps, PinyinTextTone } from '~/components/03.domain/pinyin-text'
import type { PinyinAnalysis } from '~/shared/lib'
import { useDisplay } from 'vuetify'
import { VSnackbar, VTooltip } from 'vuetify/components'
import { useHieroglyphWordStore } from '~/components/03.domain/hieroglyph-word/store'
import { PinyinText } from '~/components/03.domain/pinyin-text'
import { analyzePinyin } from '~/shared/lib'

import './index.scss'

const propsDefinition = {
  variant: { type: Number as PropType<HieroglyphWordVariant> },
  pinyin: { type: [Object, String] as PropType<PinyinTextProps | string> },
  translate: { type: String },
  glyph: { type: String, required: true },
}

const variousPropsDefinition = {
  ...propsDefinition,
  pinyin: { type: Object as PropType<PinyinTextProps | undefined> },
  isSpaceless: { type: Boolean, default: false },
}

const HieroglyphWordVarious = defineComponent({
  name: 'WordVarious',
  props: variousPropsDefinition,
  components: { VTooltip, PinyinText, VSnackbar },
  setup(props) {
    const isActive = ref<boolean>(false)
    const isTooltipHovered = ref<boolean>(false)
    const snackbar = ref<boolean>(false)
    const snackbarText = ref<string>('')
    const { mobile } = useDisplay()

    const finalPinyinProps = computed<PinyinTextProps | undefined>(() => {
      if (!props.pinyin) {
        return undefined
      }

      if (!props.isSpaceless || !props.pinyin.pinyin.includes(' ')) {
        return props.pinyin
      }

      const pinyinWithSpaces = props.pinyin.pinyin
      const pinyinWithoutSpaces = pinyinWithSpaces.replace(/ /g, '')
      const originalTones = Array.isArray(props.pinyin.tone) ? props.pinyin.tone : [props.pinyin.tone]

      const spaceIndices: number[] = []
      for (let i = 0; i < pinyinWithSpaces.length; i++) {
        if (pinyinWithSpaces[i] === ' ') {
          spaceIndices.push(i)
        }
      }

      const adjustedTones = originalTones.map((tone) => {
        const spacesBefore = spaceIndices.filter(spaceIndex => tone.index > spaceIndex).length

        return {
          ...tone,
          index: tone.index - spacesBefore,
        }
      })

      return {
        ...props.pinyin,
        pinyin: pinyinWithoutSpaces,
        tone: adjustedTones,
      }
    })

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
      if (!props.translate)
        return
      navigator.clipboard.writeText(props.translate).then(() => {
        showSnackbar('Перевод скопирован!')
      }).catch((err) => {
        console.error('Failed to copy text: ', err)
        showSnackbar('Ошибка при копировании перевода!')
      })
    }

    const copyPinyin = () => {
      const textToCopy = finalPinyinProps.value ? finalPinyinProps.value.pinyin : ''
      if (!textToCopy)
        return

      navigator.clipboard.writeText(textToCopy).then(() => {
        showSnackbar('Пиньинь скопирован!')
      }).catch((err) => {
        console.error('Failed to copy text: ', err)
        showSnackbar('Ошибка при копировании пиньиня!')
      })
    }

    const tooltipText = (variant: 'full' | 'pinyin' | 'translate') => {
      // Используем finalPinyinProps для отображения
      const pinyinNode = finalPinyinProps.value && (
        <div class="hw-tip-pinyin" onClick={copyPinyin}>
          <PinyinText
            {...finalPinyinProps.value}
            colored={finalPinyinProps.value.colored}
          />
        </div>
      )

      const translateNode = props.translate && (
        <div class="hw-tip-translate" onClick={copyTranslate}>
          {props.translate}
        </div>
      )

      const content = () => {
        switch (variant) {
          case 'full':
            return (
              <>
                {pinyinNode}
                {pinyinNode && translateNode && <hr class="hw-tip-hr" />}
                {translateNode}
              </>
            )
          case 'pinyin':
            return pinyinNode
          case 'translate':
            return translateNode
          default:
            return null
        }
      }

      return (
        <div
          class="hw-tip"
          onMouseenter={handleTooltipMouseEnter}
          onMouseleave={handleTooltipMouseLeave}
        >
          {content()}
        </div>
      )
    }

    const tooltipProps = {
      'openDelay': 100,
      'activator': 'parent',
      'location': 'top',
      'noClickAnimation': true,
      'zIndex': 9999,
      'modelValue': isActive.value,
      'onUpdate:modelValue': (value: boolean) => (isActive.value = value),
      'openOnClick': true,
      'openOnFocus': true,
      'openOnHover': false,
      'transition': 'fade-transition',
      'closeDelay': 300,
      'offset': 4,
    } satisfies VTooltip['$props']

    const graphContent = computed(() => props.glyph)

    const pinyinContent = computed(() => {
      if (!finalPinyinProps.value)
        return null

      const el = (
        <PinyinText
          {...finalPinyinProps.value}
          colored={finalPinyinProps.value.colored}
        />
      )

      if (props.variant === 2) {
        return (
          <span class="hw-pinyin">
            (
            {el}
            )
          </span>
        )
      }

      return (
        <span class="hw-pinyin">{el}</span>
      )
    })

    const translateContent = computed(() => {
      return props.translate && (
        <span class="hw-translate">{props.translate}</span>
      )
    })

    useRender(() => (
      <>
        <VSnackbar
          v-model={snackbar.value}
          timeout={2000}
          location={mobile.value ? 'bottom' : 'top'}
          color="var(--bg-tertiary-color)"
          variant="flat"
        >
          <div class="hw-snackbar">{snackbarText.value}</div>
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
    ))
  },
})

const HieroglyphWord = defineComponent({
  name: 'Word',
  props: propsDefinition,
  components: { HieroglyphWordVarious },
  setup(props) {
    const store = useHieroglyphWordStore()
    const variant = computed(() => (props.variant ?? store.variant) as HieroglyphWordVariant)

    const isSpaceless = computed(() => {
      return typeof props.pinyin === 'string' && !/[\s']/.test(props.pinyin)
    })

    const processedPinyin = computed<PinyinTextProps | undefined>(() => {
      if (!props.pinyin) {
        return undefined
      }

      if (typeof props.pinyin === 'object') {
        return props.pinyin
      }

      const analyses: PinyinAnalysis[] = analyzePinyin(props.pinyin)
      const pinyinString = analyses.map(a => a.rawPinyin).join(' ')
      const tones: PinyinTextTone[] = []

      let offset = 0
      for (const analysis of analyses) {
        if (analysis.position !== -1) {
          tones.push({
            index: offset + analysis.position,
            type: analysis.toneNumber as ToneType,
          })
        }
        offset += analysis.rawPinyin.length + 1
      }

      return {
        pinyin: pinyinString,
        tone: tones,
      }
    })

    const extraClasses = computed(() => {
      const classes: string[] = []
      if (!props.pinyin)
        classes.push('hw-none-pinyin')
      if (!props.translate)
        classes.push('hw-none-translate')
      return classes
    })

    useRender(() => (
      <span class={['hw-word', `variant-${variant.value}`, ...extraClasses.value]}>
        <HieroglyphWordVarious
          {...props}
          pinyin={processedPinyin.value}
          variant={variant.value}
          isSpaceless={isSpaceless.value}
          key={variant.value}
        />
      </span>
    ))
  },
})

export { HieroglyphWord }

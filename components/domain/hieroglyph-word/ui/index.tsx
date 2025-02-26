import type { HieroglyphWordVariant } from '~/components/domain/hieroglyph-word/types'
import type { PinyinTextProps } from '~/components/domain/pinyin-text'
import { VTooltip } from 'vuetify/components'
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
  components: { VTooltip, PinyinText },
  setup(props) {
    const isActive = ref<boolean>(false)

    const tooltipText = () => {
      const isPinyinText = typeof props.pinyin === 'string'
      const isPinyinComplex = !isPinyinText && !!props.pinyin?.pinyin

      return (
        <div class="hw-tip">
          {isPinyinComplex && (
            <div class="hw-tip-pinyin">
              <PinyinText {...props.pinyin} colored={props.pinyin.colored} />
            </div>
          )}
          {isPinyinText && (
            <div class="hw-tip-pinyin">
              {props.pinyin}
            </div>
          )}
          {(isPinyinText || isPinyinComplex) && props.translate && <hr class="hw-tip-hr" />}
          {props.translate && (
            <div class="hw-tip-translate">
              {props.translate}
            </div>
          )}
        </div>
      )
    }
    const tooltipProps = {
      'openDelay': 50,
      'activator': 'parent',
      'location': 'top',
      'transition': 'none',
      'noClickAnimation': true,
      'zIndex': 9999,
      'modelValue': isActive.value,
      'onUpdate:modelValue': (value: boolean) => {
        isActive.value = value
      },
      'openOnClick': true,
      'openOnFocus': true,
      'openOnHover': true,
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
      switch (props.variant) {
        case 0:
          return (
            <span class="hw-glyph">
              <VTooltip {...tooltipProps} modelValue={isActive.value}>
                {tooltipText}
              </VTooltip>
              {graphContent.value}
            </span>
          )

        case 1:
          return (
            <>
              <span class="hw-glyph">
                <VTooltip {...tooltipProps}>
                  {pinyinContent.value}
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
              <span class="hw-glyph">
                <VTooltip {...tooltipProps}>
                  {translateContent.value}
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

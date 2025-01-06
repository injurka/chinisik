import type { HieroglyphWordVariant } from '../types'
import { VTooltip } from 'vuetify/components'

import { PinyinText, type PinyinTextProps } from '~/components/domain/pinyin-text'
import { useHieroglyphWordStore } from '../store'
import './index.scss'

const props = {
  variant: { type: Number as PropType<HieroglyphWordVariant> },
  pinyin: { type: Object as PropType<PinyinTextProps > },
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
      const isPinyinText = !!props.pinyin?.pinyin
      const isPinyinPlain = !isPinyinText && !!props.pinyin

      return (
        <div class="tip">
          {isPinyinText && (
            <div class="tip-pinyin">
              <PinyinText {...props.pinyin} colored={props.pinyin.colored} />
            </div>
          )}
          {isPinyinPlain && (
            <div class="tip-pinyin">
              {props.pinyin}
            </div>
          )}
          {(isPinyinText || isPinyinPlain) && props.translate && <hr class="tip-hr" />}
          {props.translate && (
            <div class="tip-translate">
              {props.translate}
            </div>
          )}
        </div>
      )
    }
    const tooltipProps = {
      'activator': 'parent',
      'openDelay': 50,
      'location': 'top' as any,
      'noClickAnimation': true,
      'zIndex': 9999,
      'transition': 'none',
      'modelValue': isActive.value,
      'onUpdate:modelValue': (value: boolean) => {
        isActive.value = value
      },
      'openOnClick': true,
      'openOnFocus': true,
      'openOnHover': true,
    }

    const graphEl = () => {
      return props.glyph
    }

    const pinyinEl = () => {
      const el = props.pinyin
        && (
          typeof props.pinyin === 'string'
            ? props.pinyin
            : <PinyinText {...props.pinyin} colored={props.pinyin.colored} />
        )

      if (props.variant === 2) {
        return (
          <span class="pinyin">
            (
            {el}
            )
          </span>
        )
      }

      return (
        <span class="pinyin">
          {el}
        </span>
      )
    }

    const translateEl = () => {
      return props.translate
        && (
          <span class="translate">
            {props.translate}
          </span>
        )
    }

    useRender(() => {
      switch (props.variant) {
        case 0:
          return (
            <span class="glyph">
              <VTooltip {...tooltipProps} modelValue={isActive.value}>
                {tooltipText}
              </VTooltip>
              {graphEl()}
            </span>
          )

        case 1:
          return (
            <>
              <span class="glyph">
                <VTooltip {...tooltipProps}>
                  {pinyinEl}
                </VTooltip>
                {graphEl()}
              </span>
              -
              {translateEl()}
            </>
          )

        case 2:
          return (
            <>
              <span class="glyph">
                <VTooltip {...tooltipProps}>
                  {translateEl()}
                </VTooltip>
                {graphEl()}
              </span>
              {pinyinEl()}
            </>
          )

        case 3:
          return (
            <>
              {pinyinEl()}
              <span class="glyph">{graphEl()}</span>
              {translateEl()}
            </>
          )

        case 4:
          return (
            <>
              {pinyinEl()}
              <span class="glyph">{graphEl()}</span>
              {translateEl()}
            </>
          )

        case 5:
          return (
            <>
              <span class="glyph">{graphEl()}</span>
              <div class="pinyin-translate">
                {pinyinEl()}
                {translateEl()}
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

    useRender(() => (
      <span class={[
        'word',
        `variant-${variant.value}`,
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

export { HieroglyphWord }

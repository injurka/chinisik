import type { HieroglyphWordVariant } from '../types'
import { VTooltip } from 'vuetify/components'

import { PinyinText, type PinyinTextProps } from '~/components/domain/pinyin-text'
import { useHieroglyphWordStore } from '../store'
import './index.scss'

const props = {
  pinyin: { type: [Object] as PropType<PinyinTextProps> },
  variant: { type: Number as PropType<HieroglyphWordVariant> },
  translate: { type: String },
  glyph: { type: String },
}

const HieroglyphWordVarious = defineComponent({
  name: 'WordVarious',
  props,
  components: { VTooltip, PinyinText },
  setup(props) {
    const tooltipText = () => (
      <>
        {props.pinyin?.pinyin && <PinyinText {...props.pinyin} colored={props.pinyin.colored} />}
        {props.pinyin?.pinyin && props.translate && <hr />}
        {props.translate && <div style="font-size: 1rem">{props.translate}</div>}
      </>
    )
    const tooltipProps = { activator: 'parent', openDelay: 100, location: 'top' as any }

    const pinyinEl = () => {
      return props.pinyin
        && (
          typeof props.pinyin === 'string'
            ? <span class="pinyin">{props.pinyin}</span>
            : <PinyinText {...props.pinyin} colored={props.pinyin.colored} />
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
              <VTooltip {...tooltipProps}>
                {tooltipText}
              </VTooltip>
              {props.glyph}
            </span>
          )

        case 1:
          return (
            <>
              <span class="glyph">
                <VTooltip {...tooltipProps}>
                  {pinyinEl}
                </VTooltip>
                {props.glyph}
              </span>
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
                {props.glyph}
              </span>
              {pinyinEl()}
            </>
          )

        case 3:
          return (
            <>
              {pinyinEl()}
              <span class="glyph">{props.glyph}</span>
              {translateEl()}
            </>
          )

        case 4:
          return (
            <>
              {pinyinEl()}
              <span class="glyph">{props.glyph}</span>
              {translateEl()}
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

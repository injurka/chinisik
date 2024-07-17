import './index.scss'

import { VTooltip } from 'vuetify/components'
import { type WordVariant, useWordStore } from '../store/word.store'

const WordVarious = defineComponent({
  name: 'WordVarious',
  props: {
    fixed: { type: Number, default: 0 },
    pinyin: { type: String },
    translate: { type: String },
    glyph: { type: String },
    variant: { type: Number as PropType<WordVariant> },
  },
  components: { VTooltip },
  setup(props) {
    const tooltipText = () => (
      <>
        {props.pinyin && <div>{props.pinyin}</div>}
        {props.pinyin && props.translate && <hr />}
        {props.translate && <div>{props.translate}</div>}
      </>
    )

    const tooltipProps = { activator: 'parent', openDelay: 100, location: 'top' as any }

    useRender(() => {
      switch (props.variant) {
        case 0:
          return (
            <span class="glyph">
              <VTooltip {...tooltipProps}>
                {tooltipText()}
              </VTooltip>
              {props.glyph}
            </span>
          )

        case 1:
          return (
            <>
              <span class="glyph">
                <VTooltip {...tooltipProps}>
                  {tooltipText()}
                </VTooltip>
                {props.glyph}
              </span>
              {props.translate
              && (
                <span class="translate">
                  -
                  {' '}
                  {props.translate}
                </span>
              )}
            </>
          )

        case 2:
          return (
            <>
              <span class="glyph">
                <VTooltip {...tooltipProps}>
                  {tooltipText()}
                </VTooltip>
                {props.glyph}
              </span>

              {props.pinyin
              && (
                <span class="pinyin">
                  {props.pinyin}
                </span>
              )}
            </>
          )

        case 3:
          return (
            <>
              {props.pinyin
              && (
                <span class="pinyin">
                  {props.pinyin}
                </span>
              )}
              <span class="glyph">{props.glyph}</span>
              {props.translate
              && (
                <span class="translate">
                  -
                  {' '}
                  {props.translate}
                </span>
              )}
            </>
          )

        case 4:
          return (
            <>
              {props.pinyin
              && (
                <span class="pinyin">
                  {props.pinyin}
                </span>
              )}
              <span class="glyph">{props.glyph}</span>
              {props.translate
              && (
                <span class="translate">
                  {props.translate}
                </span>
              )}
            </>
          )

        default:
          return <template />
      }
    })
  },
})

const Word = defineComponent({
  name: 'Word',
  props: {
    fixed: { type: Number, default: 0 },
    variant: { type: Number as PropType<WordVariant>, default: 0 },
    glyph: { type: String },
    pinyin: { type: String },
    translate: { type: String },
  },
  components: { WordVarious },
  setup(props) {
    const store = useWordStore()
    const variant = computed(() => (props.fixed || store.variant) as WordVariant)

    useRender(() => (
      <span class={[
        'word',
        `variant-${variant.value}`,
      ]}
      >
        <WordVarious {...props} variant={variant.value} key={variant.value} />
      </span>
    ))
  },
})

export { Word }

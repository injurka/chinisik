import './index.scss'
import { VTooltip } from 'vuetify/components'

const WordVarious = defineComponent({
  name: 'WordVarious',
  props: {
    fixed: { type: Number, default: 0 },
    pinyin: { type: String },
    translate: { type: String },
    glyph: { type: String },
    variant: { type: Number as PropType< 0 | 1 | 2 | 3 | 4 > },
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

export const Word = defineComponent({
  name: 'Word',
  props: {
    fixed: { type: Number, default: 0 },
    glyph: { type: String },
    pinyin: { type: String },
    translate: { type: String },
    variant: { type: Number as PropType< 0 | 1 | 2 | 3 | 4> },
  },
  components: { WordVarious },
  setup(props) {
    const variant = computed(() => props.fixed || props.variant)

    useRender(() => (
      <div class={[
        'word',
        `variant-${variant.value}`,
      ]}
      >
        <WordVarious {...props} />
      </div>
    ))
  },
})

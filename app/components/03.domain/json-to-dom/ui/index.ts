import type { JsonToDomChildren, JsonToDomTags } from '~/components/03.domain/json-to-dom/types'
import { HieroglyphWord } from '~/components/03.domain/hieroglyph-word'
import { PinyinText } from '~/components/03.domain/pinyin-text'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  HieroglyphWord,
  PinyinText,
}

function getIsComponent(tag: JsonToDomTags) {
  return components[tag] || tag
}

const JsonToDom = defineComponent({
  name: 'JsonToDom',
  props: {
    node: {
      type: Object as PropType<JsonToDomChildren>,
      required: true,
    },
    // TODO variants
  },
  setup(props) {
    useRender(() => {
      const { node } = props

      return h(
        getIsComponent(node.tag),
        {
          class: node.class,
          ...node.props,
        },
        Array.isArray(node.children)
          ? node.children.map((child, index) => h(JsonToDom, { key: index, node: child }))
          : node.children,
      )
    })
  },
})

export { JsonToDom }

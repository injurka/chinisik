import type { EditorBlockData, EditorContent, EditorRow } from '../types/editor'
import type { JsonToDomChildren } from '~/components/03.domain/json-to-dom'

export const useGlossaryEditorStore = defineStore('glossary-editor', {
  state: () => ({
    isEditing: false,
    isPreviewing: false,
    content: {
      rows: [] as EditorRow[],
    } as EditorContent,
  }),

  actions: {
    toggleEditMode() {
      this.isEditing = !this.isEditing
      if (!this.isEditing) {
        this.isPreviewing = false
      }
    },

    togglePreview() {
      this.isPreviewing = !this.isPreviewing
    },

    initFromData(data: JsonToDomChildren) {
      if (!data || !data.children) {
        this.content.rows = []
        this.addRow()
        return
      }

      const rows: EditorRow[] = []
      const children = Array.isArray(data.children) ? data.children : [data.children]

      children.forEach((child) => {
        if (typeof child === 'string') {
          rows.push({
            id: crypto.randomUUID(),
            items: [{ id: crypto.randomUUID(), type: 'text', content: child }],
            customClass: '',
          })
          return
        }

        if (child.tag === 'div' || child.tag === 'p') {
          const rowItems: EditorBlockData[] = []
          const innerChildren = Array.isArray(child.children)
            ? child.children
            : (child.children ? [child.children] : [])

          innerChildren.forEach((inner) => {
            if (typeof inner === 'string') {
              rowItems.push({ id: crypto.randomUUID(), type: 'text', content: inner })
            }
            else {
              if (inner.tag === 'HieroglyphWord') {
                rowItems.push({
                  id: crypto.randomUUID(),
                  type: 'hieroglyph',
                  glyph: inner.props?.glyph as string,
                  pinyin: inner.props?.pinyin as string,
                  translate: inner.props?.translate as string,
                  settings: inner.props?.settings as any,
                })
              }
              else if (inner.tag === 'PinyinText') {
                rowItems.push({
                  id: crypto.randomUUID(),
                  type: 'pinyin',
                  pinyin: inner.props?.pinyin as string,
                })
              }
              else if (inner.tag === 'hr') {
                rowItems.push({ id: crypto.randomUUID(), type: 'divider' })
              }
              else {
                rowItems.push({
                  id: crypto.randomUUID(),
                  type: 'text',
                  content: typeof inner.children === 'string' ? inner.children : `[${inner.tag}]`,
                })
              }
            }
          })

          if (rowItems.length > 0) {
            rows.push({
              id: crypto.randomUUID(),
              items: rowItems,
              customClass: child.class || '',
            })
          }
        }
        else if (child.tag === 'hr') {
          rows.push({
            id: crypto.randomUUID(),
            items: [{ id: crypto.randomUUID(), type: 'divider' }],
          })
        }
      })

      if (rows.length === 0)
        this.addRow()
      else this.content.rows = rows
    },

    addRow(index?: number) {
      const newRow: EditorRow = { id: crypto.randomUUID(), items: [], customClass: '' }
      if (index !== undefined)
        this.content.rows.splice(index + 1, 0, newRow)
      else this.content.rows.push(newRow)
    },

    updateRow(index: number, data: Partial<EditorRow>) {
      const row = this.content.rows[index]
      if (row) {
        this.content.rows[index] = { ...row, ...data }
      }
    },

    removeRow(index: number) {
      this.content.rows.splice(index, 1)
    },

    addItemToRow(rowIndex: number, item: Omit<EditorBlockData, 'id'>, itemIndex?: number) {
      const newItem = { ...item, id: crypto.randomUUID() } as EditorBlockData
      if (itemIndex !== undefined)
        this.content.rows[rowIndex]!.items.splice(itemIndex + 1, 0, newItem)
      else
        this.content.rows[rowIndex]!.items.push(newItem)
    },

    removeItem(rowIndex: number, itemIndex: number) {
      this.content.rows[rowIndex]!.items.splice(itemIndex, 1)
    },

    updateItem(rowIndex: number, itemIndex: number, data: Partial<EditorBlockData>) {
      const targetRow = this.content.rows[rowIndex]
      if (targetRow && targetRow.items[itemIndex]) {
        targetRow.items[itemIndex] = { ...targetRow.items[itemIndex]!, ...data }
      }
    },

    exportToJson(): JsonToDomChildren {
      return {
        tag: 'div',
        class: 'glossary-article',
        children: this.content.rows.map((row) => {
          const isWarn = row.items.some(i => i.type === 'warn')
          const isExample = row.items.some(i => i.type === 'example')

          const classList = ['text']
          if (isWarn)
            classList.push('warn')
          if (isExample)
            classList.push('example')
          if (row.customClass)
            classList.push(row.customClass)

          const uniqueClass = [...new Set(classList.join(' ').split(' '))].join(' ').trim()

          return {
            tag: 'div',
            class: uniqueClass,
            children: row.items.map((item) => {
              switch (item.type) {
                case 'text': return { tag: 'span', children: item.content || '' }
                case 'hieroglyph':
                  return {
                    tag: 'HieroglyphWord',
                    props: {
                      glyph: item.glyph,
                      pinyin: item.pinyin,
                      translate: item.translate,
                      settings: item.settings,
                    },
                  }
                case 'pinyin': return { tag: 'PinyinText', props: { pinyin: item.pinyin, tone: [] } }
                case 'divider': return { tag: 'hr' }
                default: return { tag: 'span', children: '' }
              }
            }),
          }
        }),
      }
    },
  },
})

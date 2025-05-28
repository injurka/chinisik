import { useToonManuallyStore } from '../store'

function useImageSelection(redraw: () => void, handleTranslateSelection: () => void) {
  const store = useToonManuallyStore()

  const { selectedArea, isSelecting } = storeToRefs(store)

  const resetSelection = () => {
    store.$patch({ selectedArea: null, isSelecting: false })
    redraw()
  }

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        resetSelection()
        event.preventDefault()
        break

      case 'Delete':
      case 'Backspace':
        if (selectedArea.value) {
          resetSelection()
          event.preventDefault()
        }
        break

      case 'Enter':
        if (selectedArea.value) {
          event.preventDefault()
          handleTranslateSelection()
        }
        break
    }
  }

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault()

    if (selectedArea.value || isSelecting.value) {
      resetSelection()
    }
  }

  const setupListeners = () => {
    document.addEventListener('keydown', handleKeydown)
  }

  const cleanupListeners = () => {
    document.removeEventListener('keydown', handleKeydown)
  }

  return {
    isSelecting,
    selectedArea,
    handleContextMenu,
    resetSelection,
    setupListeners,
    cleanupListeners,
  }
}

export { useImageSelection }

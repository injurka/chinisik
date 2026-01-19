/**
 * Composable для управления состоянием редактора глоссария.
 * Используется для синхронизации состояния между Layout (кнопка) и Page (контент).
 */
export function useGlossaryEditor() {
  const isEditMode = useState<boolean>('glossary-editor-mode', () => false)

  function toggleEditMode() {
    isEditMode.value = !isEditMode.value
  }

  return {
    isEditMode,
    toggleEditMode,
  }
}

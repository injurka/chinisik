interface DrawingBoardExposed {
  clearCanvas: () => void
  getImageDataURL: (type?: string, quality?: number) => { userImage: string | null, targetImage: string | null } | null
  isCanvasEmpty: () => boolean
  showTargetCharacter: () => void
  hideTargetCharacter: () => void
  showTargetOverlay: Ref<boolean>
}

export type { DrawingBoardExposed }

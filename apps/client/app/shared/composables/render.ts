export function getCurrentInst(name: string, message?: string) {
  const vm = getCurrentInstance()

  if (!vm)
    throw new Error(`[Lib] ${name} ${message || 'must be called from inside a setup function'}`)

  return vm
}

export function useRender(render: () => VNode): void {
  const vm = getCurrentInst('useRender') as any
  vm.render = render
}

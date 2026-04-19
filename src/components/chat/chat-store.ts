'use client'

type Listener = () => void

const listeners = new Set<Listener>()
let openState = false

function emit() {
  for (const l of listeners) l()
}

export const chatStore = {
  getIsOpen: () => openState,
  open: () => {
    if (openState) return
    openState = true
    emit()
  },
  close: () => {
    if (!openState) return
    openState = false
    emit()
  },
  toggle: () => {
    openState = !openState
    emit()
  },
  subscribe: (cb: Listener) => {
    listeners.add(cb)
    return () => {
      listeners.delete(cb)
    }
  },
}

// useSyncExternalStore signature requires a server snapshot; widget is ssr:false so it never runs.
export function getServerSnapshot(): boolean {
  return false
}

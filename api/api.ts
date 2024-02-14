import dorionBackend from './dorion.js'
import flooedBackend from './flooed.js'
import noneBackend from './none.js'

type BackendName = 'Dorion' | 'Flooed' | 'None'

interface GlobalApi {
  util: {
    cssSanitize: (css: string) => string
    fetchImage: (url: string) => Promise<string>
    applyNotificationCount: () => void
  }

  shouldShowUnreadBadge: boolean
}

declare global {
  interface Window {
    Dorion?: GlobalApi
    Flooed?: GlobalApi & {
      invoke: (name: string, payload?: any) => Promise<any>
      version: string
      name: string
    }
  }
}

let backendName = 'None' as BackendName

// Determine backend to use
if (window.Dorion) {
  backendName = 'Dorion'
} else if (window.Flooed) {
  backendName = 'Flooed'
}

// As much as I hate doing a runtime check (bundle size go brazy), it's the only real way to make this work
let backendObj

switch (backendName) {
case 'Dorion':
  backendObj = dorionBackend
  break
case 'Flooed':
  backendObj = flooedBackend
  break
default:
  backendObj = noneBackend
  break
}

export const api = window[backendName] as GlobalApi

export let requiresRestart = false
export const backendRestartRequired = (v: boolean) => {
  requiresRestart = v
}

export const appName = backendObj.name
export const invoke = backendObj.invoke
export const event = backendObj.event
export const app = backendObj.app
export const process = backendObj.process
export const apiWindow = backendObj.apiWindow

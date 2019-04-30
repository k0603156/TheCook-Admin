import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const log = console // on server-side, consola will catch all console.log
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']
let store = {}

void (function updateModules() {
  store = normalizeRoot(require('@/store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return log.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('@/store/type.js'), 'type.js')
  resolveStoreModules(require('@/store/autho/index.js'), 'autho/index.js')
  resolveStoreModules(require('@/store/autho/mutations.js'), 'autho/mutations.js')
  resolveStoreModules(require('@/store/autho/actions.js'), 'autho/actions.js')
  resolveStoreModules(require('@/store/main/action-types.js'), 'main/action-types.js')
  resolveStoreModules(require('@/store/main/actions.js'), 'main/actions.js')
  resolveStoreModules(require('@/store/main/getter-types.js'), 'main/getter-types.js')
  resolveStoreModules(require('@/store/main/getters.js'), 'main/getters.js')
  resolveStoreModules(require('@/store/main/mutation-types.js'), 'main/mutation-types.js')
  resolveStoreModules(require('@/store/main/mutations.js'), 'main/mutations.js')
  resolveStoreModules(require('@/store/main/state.js'), 'main/state.js')
  resolveStoreModules(require('@/store/autho/getters.js'), 'autho/getters.js')
  resolveStoreModules(require('@/store/main/scaduler/actions.js'), 'main/scaduler/actions.js')
  resolveStoreModules(require('@/store/main/scaduler/getter-types.js'), 'main/scaduler/getter-types.js')
  resolveStoreModules(require('@/store/main/scaduler/mutation-types.js'), 'main/scaduler/mutation-types.js')
  resolveStoreModules(require('@/store/main/scaduler/mutations.js'), 'main/scaduler/mutations.js')
  resolveStoreModules(require('@/store/main/scaduler/action-types.js'), 'main/scaduler/action-types.js')
  resolveStoreModules(require('@/store/main/scaduler/state.js'), 'main/scaduler/state.js')
  resolveStoreModules(require('@/store/main/scaduler/getters.js'), 'main/scaduler/getters.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/getter-types.js'), 'main/scaduler/posts/getter-types.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/mutation-types.js'), 'main/scaduler/posts/mutation-types.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/mutations.js'), 'main/scaduler/posts/mutations.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/state.js'), 'main/scaduler/posts/state.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/actions.js'), 'main/scaduler/posts/actions.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/action-types.js'), 'main/scaduler/posts/action-types.js')
  resolveStoreModules(require('@/store/main/scaduler/posts/getters.js'), 'main/scaduler/posts/getters.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '@/store/type.js',
      '@/store/index.js',
      '@/store/autho/index.js',
      '@/store/autho/mutations.js',
      '@/store/autho/actions.js',
      '@/store/main/action-types.js',
      '@/store/main/actions.js',
      '@/store/main/getter-types.js',
      '@/store/main/getters.js',
      '@/store/main/mutation-types.js',
      '@/store/main/mutations.js',
      '@/store/main/state.js',
      '@/store/autho/getters.js',
      '@/store/main/scaduler/actions.js',
      '@/store/main/scaduler/getter-types.js',
      '@/store/main/scaduler/mutation-types.js',
      '@/store/main/scaduler/mutations.js',
      '@/store/main/scaduler/action-types.js',
      '@/store/main/scaduler/state.js',
      '@/store/main/scaduler/getters.js',
      '@/store/main/scaduler/posts/getter-types.js',
      '@/store/main/scaduler/posts/mutation-types.js',
      '@/store/main/scaduler/posts/mutations.js',
      '@/store/main/scaduler/posts/state.js',
      '@/store/main/scaduler/posts/actions.js',
      '@/store/main/scaduler/posts/action-types.js',
      '@/store/main/scaduler/posts/getters.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs|ts)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const storeModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(storeModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    log.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    log.warn(`'state' should be a method that returns an object in ${filePath}`)
    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function getStoreModule(storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) return

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}

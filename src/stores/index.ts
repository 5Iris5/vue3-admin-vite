import { createPinia } from 'pinia'
import { markRaw } from 'vue'
import router from '@/routers'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)
store.use(({ store }) => (store.$router = markRaw(router)))

export default store

// export * from './modules/app'
// export * from './modules/user'
// export * from './modules/menu'
// export * from './modules/tagsTab'

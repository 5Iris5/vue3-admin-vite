import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './stores'
import router from './routers'

const app = createApp(App)
app.use(store).use(router).mount('#app')

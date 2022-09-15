import { createApp } from 'vue'
import createRouter from './router/'
import './main.css'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import MyGlobalFoo from '@/components/MyGlobalFoo.vue'
import MyGlobalBar from '@/components/MyGlobalBar.vue'

const router = createRouter()
const app = createApp(App)
app.use(router)
app.component('MyGlobalFoo', MyGlobalFoo).component('MyGlobalBar', MyGlobalBar)
app.mount('#app')
if (import.meta.env.VITE_GTM) {
  app.use(VueGtag, {
    config: {
      id: import.meta.env.VITE_GTM,
    },
  }, router)
}

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { persistPlugin } from '@shared/lib/pinia/persist-plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(persistPlugin)

app.use(VueQueryPlugin)
app.use(pinia)
app.use(router)

await router.isReady()
app.mount('#app')

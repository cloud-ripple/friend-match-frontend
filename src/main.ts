import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Lazyload } from 'vant'
import App from './App.vue'
import { router } from '@/router'
// svg 相关
import 'virtual:svg-icons-register'
import SvgIcon from '@/assets/icons/SvgIcon.vue'

const app = createApp(App)

app.use(Lazyload)
app.use(createPinia())
app.use(router)
app.component('svg-icon', SvgIcon)

app.mount('#app')

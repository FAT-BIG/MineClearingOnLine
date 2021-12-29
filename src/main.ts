import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import kits from './components/kits'
import {MotionPlugin} from '@vueuse/motion'

const app = createApp(App)
app.use(store).use(MotionPlugin).use(router).mount('#app')
kits(app)

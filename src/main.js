import Vue from 'vue'
import App from './app.vue'
import ZeitUI from '@zeit-ui/vue'
import { install } from 'vue-auto'
import { install as installIcons } from '../packages'
import '@zeit-ui/vue/dist/zeit-ui.css'
import './assets/index.styl'

Vue.config.productionTip = false
install(Vue, { prefix: 'vi' })
installIcons(Vue)
Vue.use(ZeitUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

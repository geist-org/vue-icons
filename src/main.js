import Vue from 'vue'
import App from './app.vue'
import GeistUI from '@geist-ui/vue'
import { install } from 'vue-auto'
import { install as installIcons } from '../packages'
import '@geist-ui/vue/dist/geist-ui.css'
import './assets/index.styl'

Vue.config.productionTip = false
install(Vue, { prefix: 'vi' })
installIcons(Vue)
Vue.use(GeistUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

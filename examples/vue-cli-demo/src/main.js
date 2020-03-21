import Vue from 'vue'
import App from './App.vue'
import '@zeit-ui/themes/index.css'
import '@zeit-ui/themes/dark.css'
import { install as ZeitIconsInstall } from '@zeit-ui/vue-icons'

Vue.config.productionTip = false
ZeitIconsInstall(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')

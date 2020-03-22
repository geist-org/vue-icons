import Vue from 'vue'
import App from './App.vue'
import ZeitUI from '@zeit-ui/vue'
import { install as ZeitIconsInstall } from '@zeit-ui/vue-icons'

Vue.config.productionTip = false
Vue.use(ZeitUI)
ZeitIconsInstall(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')

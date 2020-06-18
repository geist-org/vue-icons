<template lang="pug">
zi-card.usage
  h3 Usage
  p Simply import a single #[code IconComponent] can reduce the volumes of bundle, all components support tree-shaking.
    | (you should import theme package before. #[code @zeit-ui/themes] ≈≈ 1kb)
  zi-spacer(y="1")
  p Use #[zi-code @zeit-ui/vue-icons] only:
  Prism(language="javascript") {{ entryCode }}
  zi-spacer(y="1")
  p Use with #[zi-code @zeit-ui/vue]:
  Prism(language="javascript") {{ entryCode2 }}
  zi-spacer(y="1")
  p Support #[zi-code color] and #[zi-code size] props:
  Prism(language="html") {{ svgCodes }}
</template>

<script>
import Prism from 'vue-prism-component'

const entryCode = `import '@zeit-ui/themes/index.css'      // default theme
import '@zeit-ui/themes/dark.css'       // dark theme
import { install } from '@zeit-ui/vue-icons'
import Vue from 'vue'
install(Vue)`
const entryCode2 = `import ZeitUI from '@zeit-ui/vue'
import { install as ZeitIconsInstall } from '@zeit-ui/vue-icons'
Vue.use(ZeitUI)
ZeitIconsInstall(Vue)
`
const svgCodes = `<template>
  <activity size="12" color="#ccc" />
</template>`

export default {
  data: () => ({
    entryCode,
    entryCode2,
    svgCodes,
  }),

  components: { Prism },
}
</script>

<style lang="stylus" scoped>
.usage
  margin-top 35px
</style>

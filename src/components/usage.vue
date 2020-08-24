<template lang="pug">
zi-card.usage
  h3 Usage
  p Simply import a single #[code IconComponent] can reduce the volumes of bundle, all components support tree-shaking.
    | (you should import theme package before. #[code @geist-ui/themes] ≈≈ 1kb)
  zi-spacer(y="1")
  p Use #[zi-code @geist-ui/vue-icons] only:
  Prism(language="javascript") {{ entryCode }}
  zi-spacer(y="1")
  p Use with #[zi-code @geist-ui/vue]:
  Prism(language="javascript") {{ entryCode2 }}
  zi-spacer(y="1")
  p Support #[zi-code color] and #[zi-code size] props:
  Prism(language="html") {{ svgCodes }}
</template>

<script>
import Prism from 'vue-prism-component'

const entryCode = `import '@geist-ui/themes/index.css'      // default theme
import '@geist-ui/themes/dark.css'       // dark theme
import { install } from '@geist-ui/vue-icons'
import Vue from 'vue'
install(Vue)`
const entryCode2 = `import GeistUI from '@geist-ui/vue'
import { install as GeistIconsInstall } from '@geist-ui/vue-icons'
Vue.use(GeistUI)
GeistIconsInstall(Vue)
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

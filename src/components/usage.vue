<template lang="pug">
zi-card.usage
  h2 Usage
  p Simply import a single #[code IconComponent] can reduce the volumes of bundle, all components support tree-shaking.
  | (you should import theme package before. #[code @zeit-ui/themes] ≈≈ 1kb)
  br
  br
  .zi-comment IMPORT ALL IN ENTRY FILE
  Prism(language="javascript") {{ entryCode }}
  p
</template>

<script>
import Prism from 'vue-prism-component'

const entryCode = `import '@zeit-ui/themes/index.css'      // default theme
import '@zeit-ui/themes/dark.css'       // dark theme
import { install } from '@zeit-ui/vue-icons'
import Vue from 'vue'
install(Vue)`

export default {
  data: () => ({
    entryCode,
  }),

  components: { Prism },
}
</script>

<style lang="stylus" scoped>
.usage
  margin-top 15px
</style>

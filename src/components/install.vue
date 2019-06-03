<template lang="pug">
zi-card.install
  h2 Install
  .zi-comment WITH NPM PACKAGE
  Prism(language="shell") yarn add @zeit-ui/vue-icons
  br
  .zi-comment WITH CDN LINK
  Prism {{ code }}
  br
</template>

<script>
import Prism from 'vue-prism-component'


export default {
  data: () => ({
    code: `\<script src="https://cdn.jsdelivr.net/npm/@zeit-ui/vue-icons@latest/dist/index.umd.min.js"><\/script>`
  }),

  components: { Prism },
}
</script>

<style scoped lang="stylus">
.install
  margin-top 30px
</style>

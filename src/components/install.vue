<template lang="pug">
zi-card.install
  h2 Install
  p #[code @zeit-ui/vue-icons] depends on the theme of #[a(target="_blank" href="https://github.com/zeit-ui/themes") @zeit-ui/themes].
  br
  .zi-comment WITH NPM PACKAGE
  Prism(language="shell") yarn add @zeit-ui/themes @zeit-ui/vue-icons
  br
  .zi-comment WITH CDN LINK
  Prism {{ code }}
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  data: () => ({
    code: '\<link href="https://cdn.jsdelivr.net/npm/@zeit-ui/themes@latest/index.css" rel="stylesheet">\n'
      + '\<script src="https://cdn.jsdelivr.net/npm/@zeit-ui/vue-icons@latest/dist/index.umd.min.js"><\/script>',
  }),

  components: { Prism },
}
</script>

<style scoped lang="stylus">
.install
  margin-top 30px
</style>

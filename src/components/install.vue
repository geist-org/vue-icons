<template lang="pug">
zi-card.install
  h3 Install
  zi-spacer
  p #[code @zeit-ui/vue-icons] depends on the theme of #[a(target="_blank" href="https://github.com/zeit-ui/themes") @zeit-ui/themes].
  zi-spacer
  p 1. With NPM package
  Prism(language="shell") yarn add @zeit-ui/themes @zeit-ui/vue-icons
  br
  p 2. With CDN link
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

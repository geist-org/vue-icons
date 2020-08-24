<template lang="pug">
zi-card.install
  h3 Install
  p #[code @geist-ui/vue-icons] depends on the theme of #[a(target="_blank" href="https://github.com/geist-org/themes") Geist Themes].
  zi-spacer
  li(style="margin-bottom: -10px") With NPM
  Prism yarn add @geist-ui/themes @geist-ui/vue-icons
  zi-spacer
  li(style="margin-bottom: -10px") With CDN
  Prism {{ code }}
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  data: () => ({
    code: '\<link href="https://cdn.jsdelivr.net/npm/@geist-ui/themes@latest/index.css" rel="stylesheet">\n'
      + '\<script src="https://cdn.jsdelivr.net/npm/@geist-ui/vue-icons@latest/dist/index.umd.min.js"><\/script>',
  }),

  components: { Prism },
}
</script>

<style scoped lang="stylus">
.install
  margin-top 30px
</style>

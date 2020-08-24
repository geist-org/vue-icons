<template lang="pug">
div.icons
  vi-bar(v-model="keyword")
  .zf-grid
    template(v-for="name in names")
      .zi-card.zf-card(@click="showCodes(name)" hoverable)
        vi-icon(:name="name")
        span.zf-card-desc {{ name }}
  br
  zi-dialog(v-model="visible" :title="exampleTitle" done="ok!")
    .zi-comment IMPORT A COMPONENT
    Prism {{ signleCodes }}
    br
    .zi-comment IMPORT ALL
    Prism {{ multiCodes }}
</template>

<script>
import Prism from 'vue-prism-component'
import data from '../assets/data.json'

export default {
  components: { Prism },

  data: () => ({
    keyword: '',
    names: data,
    visible: false,
    exampleTitle: '',
    signleCodes: '',
    multiCodes: '',
    isDark: false,
  }),

  watch: {
    keyword(next) {
      this.names = data.filter(name => name.includes(next))
    },
  },

  methods: {
    showCodes(name) {
      this.exampleTitle = name
      const moduleName = this.format(name)

      this.signleCodes = `<script>
import ${moduleName} from '@geist-ui/vue-icons/packages/${name}'

export default {
  name: 'my-example',
  components: { ${moduleName} },
}
<\/script>

<template><${moduleName}/></template>`
      this.multiCodes = `<${name}-icon />`
      this.visible = true
    },

    format(str) {
      return str
        .split('-')
        .reduce((pre, current) => {
          if (!pre) return current
          const firstUpChar = current[0].toUpperCase()
          return `${pre}${firstUpChar}${current.slice(1, current.length)}`
        }, '')
    },
  },
}
</script>

<style scoped lang="stylus">
.icons
  margin-top 35px
  min-height 100vh

.toggle
  cursor pointer
  user-select none
</style>

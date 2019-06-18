<template lang="pug">
div.icons
  zi-tag(type="success") MODE: LIGHT
  .zf-grid
    template(v-for="name in names")
      .zi-card.zf-card(@click="showCodes(name)")
        vi-icon(:name="name")
  br
  zi-tag(type="success") MODE: DARK
  .zf-grid
    template(v-for="name in names")
      .zi-card.zf-card(style="background: #000" @click="showCodes(name, true)")
        vi-icon(:name="name" :is-dark="true")
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
    names: data,
    visible: false,
    exampleTitle: '',
    signleCodes: '',
    multiCodes: '',
  }),

  methods: {
    showCodes(name, isDark) {
      this.exampleTitle = name
      const moduleName = this.format(name)

      this.signleCodes = `<script>
import ${moduleName} from '@zeit-ui/vue-icons/packages/${name}'

export default {
  name: 'my-example',
  components: { ${moduleName} },
}
<\/script>

<template>
  <${moduleName} ${isDark ? 'dark' : '' }/>
</template>`
      this.multiCodes = `<template>
  <${name} ${isDark ? 'dark' : '' }/>
</template>`
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
</style>

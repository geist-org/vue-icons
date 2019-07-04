<template lang="pug">
div.icons
  p.toggle(@click="toggleTheme") {{ isDark ? 'DARK_ON' : 'DARK_OFF' }}
  .zf-grid
    template(v-for="name in names")
      .zi-card.zf-card(@click="showCodes(name)")
        vi-icon(:name="name")
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
    names: data,
    visible: false,
    exampleTitle: '',
    signleCodes: '',
    multiCodes: '',
    isDark: false,
  }),

  methods: {
    showCodes(name) {
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
  <${moduleName}/>
</template>`
      this.multiCodes = `<template>
  <${name}/>
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

    toggleTheme() {
      const html = document.querySelector('html')
      this.isDark = html.classList.contains('dark-theme')
      const next = this.isDark ? '' : 'dark-theme'
      html.setAttribute('class', next)
    },
  },
}
</script>

<style scoped lang="stylus">
.icons
  margin-top 35px

.toggle
  cursor pointer
  user-select none
</style>

<template lang="pug">
zi-card.usage
  h2 Usage
  p Simply import a single #[code IconComponent] can reduce the volumes of bundle, all components support tree-shaking.
  br
  .zi-comment IMPORT A COMPONENT
  Prism {{ code }}
  br
  .zi-comment IMPORT ALL IN ENTRY FILE
  Prism(language="javascript") {{ entryCode }}
  p
</template>

<script>
import Prism from 'vue-prism-component'

const code = `\<script>
import addTeamIcon from '@zeit-ui/vue-icons/packages/add-team'

export default {
  name: 'my-example',
  components: { addTeamIcon },
}
<\/script>

<template>
  <addTeamIcon/>
</template>`

const entryCode = `import { install } from '@zeit-ui/vue-icons'
import Vue from 'vue'
install(Vue)`

export default {
  data: () => ({
    code,
    entryCode,
  }),

  components: { Prism },
}
</script>

<style lang="stylus" scoped>
.usage
  margin-top 15px
</style>

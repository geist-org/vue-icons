<template lang="pug">
zi-col
  h2 Icons
  zi-row.hidden-bar(:class="{ show: fixed }")
  zi-row.fill-bar(v-if="fixed")
  zi-row.bar(justify="space-between" :class="{ fixed }" ref="bar")
    zi-col
      zi-input(placeholder="filter..." v-on="$listeners" v-bind="$attrs")
    zi-col.toggle-group
      vi-icon.icon(name="sun")
      zi-toggle.toggle(v-model="dark")
      vi-icon.icon(name="moon")
  br
</template>

<script>
import ZeitUI from '@zeit-ui/vue'

export default {
  data: () => ({
    dark: false,
    fixed: false,
  }),

  watch: {
    dark(next) {
      if (next) return ZeitUI.theme.enableDark()
      ZeitUI.theme.enableLight()
    },
  },

  mounted() {
    document.addEventListener('scroll', () => {
      this.fixed = window.scrollY > 1210
      this.setWidth(this.fixed)
    })
  },

  methods: {
    setWidth(next) {
      if (!this.$refs.bar) return
      const el = this.$refs.bar.$el
      if (!next) return el.removeAttribute('style')
      el.setAttribute('style', `width: ${el.offsetWidth}px;`)
    },
  },
}
</script>

<style scoped lang="stylus">
.toggle-group
  display flex
  justify-content flex-end
  align-items center

.toggle
  display flex
  margin 0 10px
  justify-content center
  align-items center

.icon
  width 16px
  height 16px

.fill-bar
  height 57px

.bar
  width 100%
  padding 0 10px
  height 57px
  display flex
  justify-content center
  align-items center
  background-color var(--geist-background)
  box-shadow rgba(0, 0, 0, 0) 0px 0px 15px 0px

.fixed
  position fixed
  top 0
  left 50%
  z-index 100
  padding-bottom 1px
  transform translateX(-50%)

.hidden-bar
  position fixed
  top 0
  left 0
  right 0
  z-index 90
  background-color var(--geist-background)
  box-shadow rgba(0, 0, 0, 0.1) 0px 0px 15px 0px
  height 57px
  opacity 0

.show
  opacity 1
</style>

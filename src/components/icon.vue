<script>
export default {
  props: ['name', 'is-dark'],

  computed: {
    tag() {
      if (!this.name) return 'div'
      return `${this.name}-icon`
    },
  },

  render(h) {
    return h(this.tag, { props: { dark: this.isDark || false } })
  },
}
</script>

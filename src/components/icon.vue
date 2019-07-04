<script>
export default {
  props: ['name'],

  computed: {
    tag() {
      if (!this.name) return 'div'
      return `${this.name}-icon`
    },
  },

  render(h) {
    return h(this.tag)
  },
}
</script>

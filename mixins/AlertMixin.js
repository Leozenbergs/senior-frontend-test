
export default {
  data() {
    return {
      visibility: false
    }
  },
  created() {
    this.$nuxt.$on('showAlert', this.showAlert)
  },
  beforeDestroy(){
    this.$nuxt.$off('showAlert')
  },
  methods: {
    showAlert() {
      this.visibility = true
    },
    closeAlert() {
      this.visibility = false
    }
  }
}
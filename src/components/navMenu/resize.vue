<script>
const WIDTH = 992 // refer to Bootstrap's responsive design
const DESKTOP = 'desktop'
const MOBILE = 'mobile'

export default {
  name: 'ResizeMixin',
  data () {
    return {
      deviceType: MOBILE
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted () {
    const isMobile = this.isMobile()
    if (!isMobile) {
      this.deviceType = DESKTOP
    }
    this.onDeviceTypeChanged(this.deviceType)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    isMobile () {
      const rect = document.body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    resizeHandler () {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        this.deviceType = isMobile ? MOBILE : DESKTOP
        this.onDeviceTypeChanged(this.deviceType)
      }
    },
    onDeviceTypeChanged (val) {}
  }
}
</script>

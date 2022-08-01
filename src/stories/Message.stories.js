import HButton from '../components/button/HButton.vue'

export default {
  title: '1.0/Message',
  argTypes: {
    type: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'radio' }
    },
    duration: { control: { type: 'range', min: 0, max: 3000, step: 3000 } },
    showIcon: { control: 'boolean' },
    showClose: { control: 'boolean' }
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { HButton },
    props: Object.keys(argTypes),
    methods: {
      showMessage () {
        this.$message({
          showClose: this.showClose,
          message: `Shows ${this.type} message notification.`,
          type: this.showIcon ? this.type : '',
          duration: this.duration,
          center: true,
          customClass: `message-${this.type}`
        })
      }
    },
    template: `<h-button 
        @click="showMessage"
        :type="type === 'error'? 'danger': type"
        label="show message"
      />`
  }
}

export const Main = Template.bind({})
Main.args = { type: 'success', duration: 0, showClose: true }

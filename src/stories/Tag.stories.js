import HTag from '../components/tag/HTag.vue'
// import DynamicTag from '../components/tag/DynamicTag.vue'

// This is required for each story
export default {
  component: HTag,
  title: '1.0/Tag',
  argTypes: {
    type: {
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      control: { type: 'select' }
    },
    size: {
      options: ['large', 'medium', 'small', 'mini'],
      control: { type: 'select' }
    },
    customColor: {
      control: 'color'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HTag },
  props: Object.keys(argTypes),
  template: '<h-tag v-bind="$props">Custom</h-tag>'
})

export const Main = Template.bind({})
Main.args = { }

// const dynamicTags = ['Tag 1', 'Tag 2', 'Tag 3']
//
// export const dynamicTag = () => ({
//   components: { DynamicTag },
//   data () {
//     return {
//       dynamicTags
//     }
//   },
//   template: `
//       <dynamic-tag
//         :dynamicTags="dynamicTags"
//       />
//       `
// })

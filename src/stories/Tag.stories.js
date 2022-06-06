import HTag from '../components/tag/HTag.vue'
import DynamicTag from '../components/tag/DynamicTag.vue'

// This is required for each story
export default {
  component: HTag,
  title: 'Tag',
  argTypes: {
    customColor: {
      control: 'color'
    }
  }
}

// Customize components here
export const hTag = () => ({
  components: { HTag },
  template: `
    <div>
    <h-tag>Agriculture</h-tag>
    <p />
    <h-tag type="success">Education</h-tag>
    <p />
    <h-tag type="info">WASH</h-tag>
    <p />
    <h-tag type="warning">Health</h-tag>
    <p />
    <h-tag type="danger">Resilience</h-tag>
    <p />

    </div>
  `
})

const Template = (args, { argTypes }) => ({
  components: { HTag },
  props: Object.keys(argTypes),
  template: '<h-tag v-bind="$props">Custom</h-tag>'
})

export const CustomColorTag = Template.bind({})
CustomColorTag.args = { customColor: '#ff0000' }

export const hTagPlain = () => ({
  components: { HTag },
  template: `
    <div>
    <h-tag plain size="mini">Beta</h-tag>
    <p />
    <h-tag plain size="small">Beta</h-tag>
    <p />
    <h-tag plain size="medium">Beta</h-tag>
    <p />
    <h-tag plain>Beta</h-tag>
    </div>
  `
})

const dynamicTags = ['Tag 1', 'Tag 2', 'Tag 3']

export const dynamicTag = () => ({
  components: { DynamicTag },
  data () {
    return {
      dynamicTags
    }
  },
  template: `
      <dynamic-tag
        :dynamicTags="dynamicTags"
      />
      `
})

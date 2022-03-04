import HTag from '../components/tag/HTag.vue'
import DynamicTag from '../components/tag/DynamicTag.vue'

// This is required for each story
export default { title: 'Tag' }

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

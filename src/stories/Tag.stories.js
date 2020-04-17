import BasicTag from '../components/tag/BasicTag.vue'
import RemovableTag from '../components/tag/RemovableTag.vue'
import DynamicTag from '../components/tag/DynamicTag.vue'

// This is required for each story
export default { title: 'Tag' }

// Customize components here
export const basicTag = () => ({
  components: { BasicTag },
  template: `
  <div>
  <basic-tag>Tag 1</basic-tag>
  <basic-tag type="success">Tag 2</basic-tag>
  <basic-tag type="info">Tag 3</basic-tag>
  <basic-tag type="warning">Tag 4</basic-tag>
  <basic-tag type="danger">Tag 5</basic-tag>
  </div>
  `
})

export const removableTag = () => ({
  components: { RemovableTag },
  template: `
    <div>
    <removable-tag>Tag 1</removable-tag>
    <removable-tag type="success">Tag 2</removable-tag>
    <removable-tag type="info">Tag 3</removable-tag>
    <removable-tag type="warning">Tag 4</removable-tag>
    <removable-tag type="danger">Tag 5</removable-tag>
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
      <dynamic-tag :dynamicTags="dynamicTags"></dynamic-tag>
      `
})

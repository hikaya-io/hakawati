import HTag from '../components/tag/HTag.vue'
import DynamicTag from '../components/tag/DynamicTag.vue'

// This is required for each story
export default { title: 'Tag' }

// Customize components here
export const hTag = () => ({
  components: { HTag },
  template: `
    <div>
    <h-tag>Tag 1</h-tag>
    <h-tag type="success">Tag 2</h-tag>
    <h-tag type="info">Tag 3</h-tag>
    <h-tag type="warning">Tag 4</h-tag>
    <h-tag type="danger">Tag 5</h-tag>
    </div>
  `
})

export const removableTag = () => ({
  components: { HTag },
  template: `
    <div>
    <h-tag closable>Tag 1</h-tag>
    <h-tag closable type="success">Tag 2</h-tag>
    <h-tag closable type="info">Tag 3</h-tag>
    <h-tag closable type="warning">Tag 4</h-tag>
    <h-tag closable type="danger">Tag 5</h-tag>
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

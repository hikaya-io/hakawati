import BasicTag from '../components/tag/BasicTag.vue'
import RemovableTag from '../components/tag/RemovableTag.vue'

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

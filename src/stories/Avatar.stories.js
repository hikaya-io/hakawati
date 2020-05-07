import BasicAvatar from '../components/avatar/BasicAvatar.vue'

// This is required for each story
export default { title: 'Avatar' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicAvatar = () => ({
  components: { BasicAvatar },
  template: `
  <div>
    <el-avatar shape="circle" size="medium" src="<url>">
    AP
    </el-avatar>
  </div>
    `
})

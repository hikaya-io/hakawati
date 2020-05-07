import BasicAlert from '../components/alert/BasicAlert.vue'
import IconAlert from '../components/alert/IconAlert.vue'
import DescriptionAlert from '../components/alert/DescriptionAlert.vue'

// This is required for each story
export default { title: 'Alert' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicAlert = () => ({
  components: { BasicAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <basic-alert 
      title="success alert" 
      type="success">
      </basic-alert> 
    </div>
    <div style='margin-bottom:15px'>
      <basic-alert 
      title="info alert" 
      type="info">
      </basic-alert> 
    </div>
    <div style='margin-bottom:15px'>
      <basic-alert 
      title="warning alert" 
      type="warning">
      </basic-alert> 
    </div>
    <div style='margin-bottom:15px'>
      <basic-alert 
      title="error alert" 
      type="error">
      </basic-alert> 
    </div>
  </div>
    `
})

export const iconAlert = () => ({
  components: { IconAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <icon-alert
      title="success alert"
      type="success"
      show-icon>
      </icon-alert>
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
      title="info alert"
      type="info"
      show-icon>
      </icon-alert>
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
      title="warning alert"
      type="warning"
      show-icon>
      </icon-alert>
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
      title="error alert"
      type="error"
      show-icon>
      </icon-alert>
    </div>
  </div>
    `
})

export const descriptionAlert = () => ({
  components: { DescriptionAlert },
  template: `
  <div>
    <description-alert 
    type="success" 
    title="Alert title" 
    description="Add description here">
    </description-alert> 
  </div>
      `
})

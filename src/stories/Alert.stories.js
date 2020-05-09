import HAlert from '../components/alert/HAlert.vue'
import IconAlert from '../components/alert/IconAlert.vue'
import DescriptionAlert from '../components/alert/DescriptionAlert.vue'

// This is required for each story
export default { title: 'Alert' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hAlert = () => ({
  components: { HAlert },
  template: `
  <div>
    <div style='margin-bottom:15px'>
      <h-alert 
        title="success alert" 
        type="success"
      /> 
    </div>
    <div style='margin-bottom:15px'>
      <h-alert 
        title="info alert" 
        type="info"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert 
        title="warning alert" 
        type="warning"
      />
    </div>
    <div style='margin-bottom:15px'>
      <h-alert 
        title="error alert" 
        type="error"
      />
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
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
        title="info alert"
        type="info"
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
        title="warning alert"
        type="warning"
        show-icon
      />
    </div>
    <div style='margin-bottom:15px'>
      <icon-alert
        title="error alert"
        type="error"
        show-icon
      />
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
      description="Add description here"
    />
  </div>
      `
})

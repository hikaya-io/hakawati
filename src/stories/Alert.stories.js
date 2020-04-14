import BasicAlert from '../components/alert/BasicAlert.vue'

// This is required for each story
export default { title: 'Alert' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicAlert = () => ({
  components: { BasicAlert },
  template: `
  <div>
  <div style='margin-bottom:15px'>
  <basic-alert title="success alert" type="success"></basic-alert> 
  </div>
  <div style='margin-bottom:15px'>
  <basic-alert title="info alert" type="info"></basic-alert> 
  </div>
  <div style='margin-bottom:15px'>
  <basic-alert title="warning alert" type="warning"></basic-alert> 
  </div>
  <div style='margin-bottom:15px'>
  <basic-alert title="error alert" type="error"></basic-alert> 
  </div>
  </div>
    `
})

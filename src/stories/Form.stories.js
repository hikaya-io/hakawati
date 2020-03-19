import BasicForm from '../components/form/BasicForm.vue'

// This is required for each story
export default { title: 'Form' }

// Customize components here
export const basicForm = () => ({
    components: { BasicForm },
    template: '<basic-form />'
  })

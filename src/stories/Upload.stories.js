import UploadExcel from '../components/upload/UploadExcel.vue'

// This is required for each story
export default { title: 'Upload' }

export const uploadExcel = () => ({
  components: { UploadExcel },
  template: '<upload-excel />'
})

import UploadExcel from '../components/upload/ExcelUpload.vue'

// This is required for each story
export default { title: 'Upload' }

export const excelUpload = () => ({
  components: { UploadExcel },
  template: '<upload-excel-component />'
})

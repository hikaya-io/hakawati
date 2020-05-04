import HkForm from '../components/form/Form.vue'

// This is required for each story
export default { title: 'Form' }

export const hkForm = () => ({
  components: { HkForm },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <hk-form :model="form">
        <el-form-item>
          <el-input
            placeholder="Sample Input"
            v-model="form.input"
          />
        </el-form-item>
      </hk-form>
      <hk-form
        label-position="top"
        label-width="100px"
        :model="form"
      >
        <el-form-item label="Sample Input with label">
          <el-input v-model="form.input" />
        </el-form-item>
      </hk-form>
      <hk-form
        label-position="top"
        label-width="100px"
        :model="form"
        :disabled="true"
      >
        <el-form-item label="Sample Input with label">
          <el-input v-model="form.input" />
        </el-form-item>
      </hk-form>
    </div>
  `
})

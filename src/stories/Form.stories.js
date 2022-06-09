import HForm from '../components/form/HForm.vue'

// This is required for each story
export default { title: 'Form' }

export const hForm = () => ({
  components: { HForm },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <h-form 
        :model="form"
      >
        <el-form-item>
          <el-input
            placeholder="Sample Input"
            v-model="form.input"
          />
        </el-form-item>
      </h-form>
      <h-form
        label-position="top"
        label-width="100px"
        :model="form"
      >
        <el-form-item 
          label="Sample Input with label"
        >
          <el-input v-model="form.input" />
        </el-form-item>
      </h-form>
      <h-form
        label-position="top"
        label-width="100px"
        :model="form"
        :disabled="true"
      >
        <el-form-item 
          label="Sample Input with label disabled"
        >
          <el-input v-model="form.input" />
        </el-form-item>
      </h-form>
    </div>
  `
})

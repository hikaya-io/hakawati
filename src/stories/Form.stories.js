import BasicForm from '../components/form/BasicForm.vue'

// This is required for each story
export default { title: 'Form' }

export const basicForm = () => ({
  components: { BasicForm },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <basic-form 
        :model="form"
      >
        <el-form-item>
          <el-input
            placeholder="Sample Input"
            v-model="form.input"
          />
        </el-form-item>
      </basic-form>
      <basic-form
        label-position="top"
        label-width="100px"
        :model="form"
      >
        <el-form-item 
          label="Sample Input with label"
        >
          <el-input v-model="form.input" />
        </el-form-item>
      </basic-form>
      <basic-form
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
      </basic-form>
    </div>
  `
})

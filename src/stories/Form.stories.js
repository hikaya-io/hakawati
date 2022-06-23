import HForm from '../components/form/HForm.vue'
import HButton from '../components/button/HButton.vue'

// This is required for each story
export default {
  component: HForm,
  title: '1.0/Form',
  argTypes: {
    labelPosition: {
      options: ['left', 'right', 'top'],
      control: { type: 'select' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HForm, HButton },
  props: Object.keys(argTypes),
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input Activity name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        region: [
          { required: true, message: 'Please select Activity zone', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        ],
        resource: [
          { required: true, message: 'Please select activity resource', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please input activity form', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].$refs.HForm.validate((valid) => {
        if (valid) {
          this.$emit('formIsValid')
        } else {
          this.$emit('formIsInvalid')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].$refs.HForm.resetFields()
    },
    handleCancel () {
      this.$emit('formCancelled')
    }
  },
  template: `
  <div>
    <h-form v-bind="$props" :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </h-form>
    <h-button
    @click.native="submitForm('ruleForm')"
    label="Submit"
    />
    <h-button
    @click.native="handleCancel"
    :isPlain="true"
    label="Cancel"
    />
    <h-button
    @click.native="resetForm('ruleForm')"
    label="Reset"
    type="info"
    />
  </div>`
})

export const Main = Template.bind({})
Main.args = { }

import HDialog from '../components/dialog/HDialog.vue'
import HButton from '../components/button/HButton.vue'
import HForm from '../components/form/HForm.vue'
import HTable from '../components/table/HTable.vue'

export default {
  component: HDialog,
  title: '1.0/Dialog',
  argTypes: {
    sampleSlots: {
      options: ['labelSlot', 'formSlot', 'tableSlot'],
      control: { type: 'radio' }
    },
    sampleWidth: { control: { type: 'range', min: 30, max: 90, step: 10 } },
    labelSlot: { control: 'text' },
    visible: { control: 'boolean' },
    confirmButtonType: {
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      control: { type: 'select' }
    },
    dialogVisible: { table: { disable: true } }
  }
}

const demoTableData = [
  {
    date: '2020-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2020-07-02',
    name: 'John',
    state: 'Andalucia',
    city: 'Malaga',
    address: 'No. 11, Avenida, Malaga',
    zip: 'CA 29011',
    tag: 'Office'
  },
  {
    date: '2020-07-02',
    name: 'John',
    state: 'Andalucia',
    city: 'Malaga',
    address: 'No. 11, Avenida, Malaga',
    zip: 'CA 29011',
    tag: 'School'
  }
]

const Template = (args, { argTypes }) => ({
  components: { HDialog, HButton, HForm, HTable },
  props: Object.keys(argTypes),
  data () {
    return {
      visibility: false,
      formData: {
        name: '',
        description: '',
        resource: ''
      }
    }
  },
  methods: {
    confirmed () {
      console.log('Confirmed')
    },
    canceled () {
      console.log('Cancel')
    },
    toggleVisibility () {
      this.visibility = !this.visibility
    }
  },
  watch: {
    sampleWidth (val) {
      this.width = `${val}%`
    },
    visible (val) {
      this.visibility = val
    }
  },
  template: `
      <div>
        <h-button
          label="Click to open dialog"
          @click="toggleVisibility"
        />
        <h-dialog
          v-bind="$props"
          @dialogConfirmed="confirmed"
          @dialogCancelled="canceled"
          @dialogClosed="toggleVisibility"
          :dialogVisible="visibility"
        >
        <span v-if="sampleSlots==='labelSlot'">{{labelSlot}}</span>
        <h-form v-if="sampleSlots==='formSlot'">
          <el-form-item label="Name" prop="name">
            <el-input v-model="formData.name"></el-input>
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input v-model="formData.description"></el-input>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="formData.resource">
              <el-radio label="Sponsorship"></el-radio>
              <el-radio label="Venue"></el-radio>
            </el-radio-group>
          </el-form-item>
        </h-form>
        <h-table v-if="sampleSlots==='tableSlot'" :tableData="demoTableData"/>
        </h-dialog>
      </div>
    `
})

export const Main = Template.bind({})
Main.args = {
  labelSlot: 'Sample dialog message',
  title: 'Hikaya Dialog',
  sampleSlots: 'labelSlot',
  visible: false,
  demoTableData,
  sampleWidth: 40
}

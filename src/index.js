import './styles/element-variables.scss'
import './styles/theme.scss'
import './styles/variables.scss'

// Avatar
import HAvatar from './components/avatar/HAvatar.vue'

// Breadcrumb
import HBreadcrumb from './components/breadcrumb/HBreadcrumb.vue'

// Button
import HButton from './components/button/HButton.vue'

// Card
import HCard from './components/card/HCard.vue'

// Cascader
import HCascader from './components/cascader/HCascader.vue'

// Checkbox
import HCheckbox from './components/checkbox/HCheckbox.vue'

// Color picker
import HColorPicker from './components/colorPicker/HColorPicker.vue'

// Datepicker
import HDatePicker from './components/datepicker/HDatePicker.vue'
import DateRangePicker from './components/datepicker/DateRangePicker.vue'

// Dialog
import HDialog from './components/dialog/HDialog.vue'

// Drawer
import HDrawer from './components/drawer/HDrawer.vue'

// Dropdown
import HDropdown from './components/dropdown/HDropdown.vue'

// Input
import HInput from './components/input/HInput.vue'

// Nav menu
import TopNav from './components/navMenu/TopNav.vue'
import CollapseNav from './components/navMenu/CollapseNav.vue'

// Pagination
import HPagination from './components/pagination/HPagination.vue'
import HPageSize from './components/pagination/HPageSize.vue'

// Search
import HSearch from './components/search/HSearch.vue'

// Select
import HSelect from './components/select/HSelect.vue'

// Steps
import HSteps from './components/steps/HSteps.vue'
import Steps from './components/steps/Steps.vue'

// Switch
import HSwitch from './components/switch/HSwitch.vue'

// Tab
import HTab from './components/tab/HTab.vue'

// Table
import HTable from './components/table/HTable.vue'

// Tag
import HTag from './components/tag/HTag.vue'
import DynamicTag from './components/tag/DynamicTag.vue'

// Upload
import UploadExcel from './components/upload/UploadExcel.vue'

// Form
import HForm from './components/form/HForm.vue'

// SideNav
import HSideNav from '@/components/sidenav/HSideNav'

// Spreadsheet
import HSpreadsheet from '@/components/spreadsheet/HSpreadsheet'

const components = [
  HButton,
  HCheckbox,
  HInput,
  TopNav,
  CollapseNav,
  HTable,
  UploadExcel,
  HDropdown,
  HSwitch,
  HCard,
  HSelect,
  HTag,
  DynamicTag,
  HCascader,
  HDatePicker,
  DateRangePicker,
  HSteps,
  Steps,
  HDrawer,
  HPagination,
  HPageSize,
  HDialog,
  HTab,
  HForm,
  HAvatar,
  HSearch,
  HBreadcrumb,
  HSideNav,
  HColorPicker,
  HSpreadsheet
]

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  HButton,
  HCheckbox,
  HInput,
  TopNav,
  CollapseNav,
  HTable,
  UploadExcel,
  HDropdown,
  HSwitch,
  HCard,
  HSelect,
  HTag,
  DynamicTag,
  HCascader,
  HDatePicker,
  DateRangePicker,
  HSteps,
  Steps,
  HDrawer,
  HPagination,
  HPageSize,
  HDialog,
  HTab,
  HForm,
  HAvatar,
  HSearch,
  HBreadcrumb,
  HSideNav,
  HColorPicker,
  HSpreadsheet
}

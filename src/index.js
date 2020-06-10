
import './styles/element-variables.scss'
import './styles/theme.scss'

// Alert
import HAlert from './components/alert/HAlert.vue'

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
import BasicCheckbox from './components/checkbox/BasicCheckbox.vue'
import CheckboxGroup from './components/checkbox/CheckboxGroup.vue'
import HCheckbox from './components/checkbox/HCheckbox.vue'

// Datepicker
import HDatePicker from './components/datepicker/HDatePicker.vue'
import DateRangePicker from './components/datepicker/DateRangePicker.vue'

// Dialog
import HDialog from './components/dialog/HDialog.vue'

// Drawer
import HDrawer from './components/drawer/HDrawer.vue'

// Dropdown
import HDropdown from './components/dropdown/HDropdown.vue'

// Filter
import HFilter from './components/filter/HFilter.vue'

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
import GroupedSelect from './components/select/GroupedSelect.vue'

// Steps
import HSteps from './components/steps/HSteps.vue'
import Steps from './components/steps/Steps.vue'

// Switch
import HSwitch from './components/switch/HSwitch.vue'

// Tab
import HTab from './components/tab/HTab.vue'

// Table
import HTable from './components/table/HTable.vue'
import HkoboTable from './components/table/HKoboTable.vue'

// Tag
import HTag from './components/tag/HTag.vue'
import DynamicTag from './components/tag/DynamicTag.vue'

// Upload
import UploadExcel from './components/upload/UploadExcel.vue'

// Form
import HForm from './components/form/HForm.vue'

// Import other components from here

const components = [
  HButton,
  BasicCheckbox,
  CheckboxGroup,
  HCheckbox,
  HInput,
  TopNav,
  CollapseNav,
  HTable,
  HkoboTable,
  UploadExcel,
  HDropdown,
  HAlert,
  HSwitch,
  HCard,
  HSelect,
  GroupedSelect,
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
  HFilter,
  HBreadcrumb
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  HButton,
  BasicCheckbox,
  CheckboxGroup,
  HCheckbox,
  HInput,
  TopNav,
  CollapseNav,
  HTable,
  HkoboTable,
  UploadExcel,
  HDropdown,
  HAlert,
  HSwitch,
  HCard,
  HSelect,
  GroupedSelect,
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
  HFilter,
  HBreadcrumb
}

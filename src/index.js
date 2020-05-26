
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
import DisabledInput from './components/input/DisabledInput.vue'
import ClearInput from './components/input/ClearInput.vue'
import InputPasswordBox from './components/input/InputPasswordBox.vue'
import InputTextArea from './components/input/InputTextArea.vue'
import InputLength from './components/input/InputLength.vue'
import HLabelInput from './components/input/HLabelInput.vue'

// Nav menu
import TopNav from './components/navMenu/TopNav.vue'
import CollapseNav from './components/navMenu/CollapseNav.vue'

// Pagination
import PaginationBasic from './components/pagination/PaginationBasic.vue'
import PaginationPageSize from './components/pagination/PaginationPageSize.vue'

// Search
import HSearch from './components/search/HSearch.vue'

// Select
import HSelect from './components/select/HSelect.vue'
import GroupedSelect from './components/select/GroupedSelect.vue'

// Steps
import HSteps from './components/steps/HSteps.vue'

// Switch
import HSwitch from './components/switch/HSwitch.vue'

// Tab
import HTab from './components/tab/HTab.vue'

// Table
import HTable from './components/table/HTable.vue'

// Tag
import HTag from './components/tag/HTag.vue'
import RemovableTag from './components/tag/RemovableTag.vue'
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
  DisabledInput,
  ClearInput,
  InputPasswordBox,
  InputTextArea,
  InputLength,
  HLabelInput,
  TopNav,
  CollapseNav,
  HTable,
  UploadExcel,
  HDropdown,
  HAlert,
  HSwitch,
  HCard,
  HSelect,
  GroupedSelect,
  HTag,
  RemovableTag,
  DynamicTag,
  HCascader,
  HDatePicker,
  DateRangePicker,
  HSteps,
  HDrawer,
  PaginationBasic,
  PaginationPageSize,
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
  DisabledInput,
  ClearInput,
  InputPasswordBox,
  InputTextArea,
  InputLength,
  HLabelInput,
  TopNav,
  CollapseNav,
  HTable,
  UploadExcel,
  HDropdown,
  HAlert,
  HSwitch,
  HCard,
  HSelect,
  GroupedSelect,
  HTag,
  RemovableTag,
  DynamicTag,
  HCascader,
  HDatePicker,
  DateRangePicker,
  HSteps,
  HDrawer,
  PaginationBasic,
  PaginationPageSize,
  HDialog,
  HTab,
  HForm,
  HAvatar,
  HSearch,
  HFilter,
  HBreadcrumb
}

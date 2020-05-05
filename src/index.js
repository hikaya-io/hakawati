
import './styles/element-variables.scss'

// Button
import BasicButton from './components/button/BasicButton.vue'
import DisabledButton from './components/button/DisabledButton.vue'
import PlainButton from './components/button/PlainButton.vue'
import RoundButton from './components/button/RoundButton.vue'
import CircleButton from './components/button/CircleButton.vue'
import TextButton from './components/button/TextButton.vue'

// Checkbox
import BasicCheckbox from './components/checkbox/BasicCheckbox.vue'
import DisabledCheckbox from './components/checkbox/DisabledCheckbox.vue'
import CheckboxGroup from './components/checkbox/CheckboxGroup.vue'
import ButtonCheckbox from './components/checkbox/ButtonCheckbox.vue'

// Input
import BasicInput from './components/input/BasicInput.vue'
import DisabledInput from './components/input/DisabledInput.vue'
import ClearInput from './components/input/ClearInput.vue'
import PasswordBox from './components/input/PasswordBox.vue'
import TextArea from './components/input/TextArea.vue'
import InputLength from './components/input/InputLength.vue'

// Nav menu
import TopNav from './components/navMenu/TopNav.vue'
import CollapseNav from './components/navMenu/CollapseNav.vue'

// Table
// import BasicTable from './components/table/BasicTable.vue'
// import TableWithStatus from './components/table/TableWithStatus.vue'

// Upload
import UploadExcel from './components/upload/UploadExcel.vue'

// Dropdown
import BasicDropdown from './components/dropdown/BasicDropdown.vue'
import TriggerDropdown from './components/dropdown/TriggerDropdown.vue'

// Alert
import BasicAlert from './components/alert/BasicAlert.vue'
import IconAlert from './components/alert/IconAlert.vue'
import DescriptionAlert from './components/alert/DescriptionAlert.vue'

// Switch
import BasicSwitch from './components/switch/BasicSwitch.vue'
import TextSwitch from './components/switch/TextSwitch.vue'
import DisabledSwitch from './components/switch/DisabledSwitch.vue'

// Card
import BasicCard from './components/card/BasicCard.vue'

// Breadcrumb
import BreadcrumbBasic from './components/breadcrumb/BreadcrumbBasic.vue'
import BreadcrumbIconSeparator from './components/breadcrumb/BreadcrumbIconSeparator.vue'

// Select
import BasicSelect from './components/select/BasicSelect.vue'
import MultiSelect from './components/select/MultiSelect.vue'
import GroupedSelect from './components/select/GroupedSelect.vue'

// Tag
import BasicTag from './components/tag/BasicTag.vue'
import RemovableTag from './components/tag/RemovableTag.vue'
import DynamicTag from './components/tag/DynamicTag.vue'

// Cascader
import BasicCascader from './components/cascader/BasicCascader.vue'

// Datepicker
import BasicDatePicker from './components/datepicker/BasicDatePicker.vue'
import DateRangePicker from './components/datepicker/DateRangePicker.vue'

// Steps
import BasicSteps from './components/steps/BasicSteps.vue'
import BasicStepsWithDescription from './components/steps/BasicStepsWithDescription.vue'

// Drawer
import BasicDrawer from './components/drawer/BasicDrawer.vue'

// Pagination
import PaginationBasic from './components/pagination/PaginationBasic.vue'
import PaginationPageSize from './components/pagination/PaginationPageSize.vue'

// Import other components from here

const components = [
  BasicButton,
  DisabledButton,
  PlainButton,
  RoundButton,
  CircleButton,
  TextButton,
  BasicCheckbox,
  DisabledCheckbox,
  CheckboxGroup,
  ButtonCheckbox,
  BasicInput,
  DisabledInput,
  ClearInput,
  PasswordBox,
  TextArea,
  InputLength,
  TopNav,
  CollapseNav,
  // BasicTable,
  // TableWithStatus,
  UploadExcel,
  BasicDropdown,
  TriggerDropdown,
  BasicAlert,
  IconAlert,
  DescriptionAlert,
  BasicSwitch,
  TextSwitch,
  DisabledSwitch,
  BasicCard,
  BreadcrumbBasic,
  BreadcrumbIconSeparator,
  BasicSelect,
  MultiSelect,
  GroupedSelect,
  BasicTag,
  RemovableTag,
  DynamicTag,
  BasicCascader,
  BasicDatePicker,
  DateRangePicker,
  BasicSteps,
  BasicStepsWithDescription,
  BasicDrawer,
  PaginationBasic,
  PaginationPageSize
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
  BasicButton,
  DisabledButton,
  PlainButton,
  RoundButton,
  CircleButton,
  TextButton,
  BasicCheckbox,
  DisabledCheckbox,
  CheckboxGroup,
  ButtonCheckbox,
  BasicInput,
  DisabledInput,
  ClearInput,
  PasswordBox,
  TextArea,
  InputLength,
  TopNav,
  CollapseNav,
  // BasicTable,
  // TableWithStatus,
  UploadExcel,
  BasicDropdown,
  TriggerDropdown,
  BasicAlert,
  IconAlert,
  DescriptionAlert,
  BasicSwitch,
  TextSwitch,
  DisabledSwitch,
  BasicCard,
  BreadcrumbBasic,
  BreadcrumbIconSeparator,
  BasicSelect,
  MultiSelect,
  GroupedSelect,
  BasicTag,
  RemovableTag,
  DynamicTag,
  BasicCascader,
  BasicDatePicker,
  DateRangePicker,
  BasicSteps,
  BasicStepsWithDescription,
  BasicDrawer,
  PaginationBasic,
  PaginationPageSize
}

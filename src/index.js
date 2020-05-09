
import './styles/element-variables.scss'
import './styles/theme.scss'

// Alert
import HAlert from './components/alert/HAlert.vue'
import IconAlert from './components/alert/IconAlert.vue'
import DescriptionAlert from './components/alert/DescriptionAlert.vue'

// Avatar
import HAvatar from './components/avatar/HAvatar.vue'

// Breadcrumb
// import BreadcrumbBasic from './components/breadcrumb/BreadcrumbBasic.vue'
// import BreadcrumbIconSeparator from './components/breadcrumb/BreadcrumbIconSeparator.vue'

// Button
import BasicButton from './components/button/BasicButton.vue'
import DisabledButton from './components/button/DisabledButton.vue'
import PlainButton from './components/button/PlainButton.vue'
import HButton from './components/button/HButton.vue'
import CircleButton from './components/button/CircleButton.vue'
import TextButton from './components/button/TextButton.vue'
import WorkspaceButton from './components/button/WorkspaceButton.vue'

// Card
import HCard from './components/card/HCard.vue'

// Cascader
import HCascader from './components/cascader/HCascader.vue'

// Checkbox
import BasicCheckbox from './components/checkbox/BasicCheckbox.vue'
import DisabledCheckbox from './components/checkbox/DisabledCheckbox.vue'
import CheckboxGroup from './components/checkbox/CheckboxGroup.vue'
import HCheckbox from './components/checkbox/HCheckbox.vue'

// Datepicker
import BasicDatePicker from './components/datepicker/BasicDatePicker.vue'
import DateRangePicker from './components/datepicker/DateRangePicker.vue'

// Dialog
import BasicDialog from './components/dialog/BasicDialog.vue'
import FormDialog from './components/dialog/FormDialog.vue'

// Drawer
import HDrawer from './components/drawer/HDrawer.vue'

// Dropdown
import HDropdown from './components/dropdown/HDropdown.vue'
import TriggerDropdown from './components/dropdown/TriggerDropdown.vue'

// Filter
import HFilter from './components/filter/HFilter.vue'

// Input
import HInput from './components/input/HInput.vue'
import DisabledInput from './components/input/DisabledInput.vue'
import ClearInput from './components/input/ClearInput.vue'
import PasswordBox from './components/input/PasswordBox.vue'
import TextArea from './components/input/TextArea.vue'
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
import MultiSelect from './components/select/MultiSelect.vue'
import GroupedSelect from './components/select/GroupedSelect.vue'

// Steps
import BasicSteps from './components/steps/BasicSteps.vue'
import BasicStepsWithDescription from './components/steps/BasicStepsWithDescription.vue'

// Switch
import BasicSwitch from './components/switch/BasicSwitch.vue'
import TextSwitch from './components/switch/TextSwitch.vue'
import DisabledSwitch from './components/switch/DisabledSwitch.vue'

// Tab
import BasicTab from './components/tab/BasicTab.vue'
import CardTab from './components/tab/CardTab.vue'
import VerticalTab from './components/tab/VerticalTab.vue'
import HTab from './components/tab/HTab.vue'

// Table
import HTable from './components/table/HTable.vue'
// import BasicTable from './components/table/BasicTable.vue'
// import TableWithStatus from './components/table/TableWithStatus.vue'

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
  BasicButton,
  DisabledButton,
  PlainButton,
  HButton,
  CircleButton,
  TextButton,
  WorkspaceButton,
  BasicCheckbox,
  DisabledCheckbox,
  CheckboxGroup,
  HCheckbox,
  HInput,
  DisabledInput,
  ClearInput,
  PasswordBox,
  TextArea,
  InputLength,
  HLabelInput,
  TopNav,
  CollapseNav,
  HTable,
  // BasicTable,
  // TableWithStatus,
  UploadExcel,
  HDropdown,
  TriggerDropdown,
  HAlert,
  IconAlert,
  DescriptionAlert,
  BasicSwitch,
  TextSwitch,
  DisabledSwitch,
  HCard,
  // BreadcrumbBasic,
  // BreadcrumbIconSeparator,
  HSelect,
  MultiSelect,
  GroupedSelect,
  HTag,
  RemovableTag,
  DynamicTag,
  HCascader,
  BasicDatePicker,
  DateRangePicker,
  BasicSteps,
  BasicStepsWithDescription,
  HDrawer,
  PaginationBasic,
  PaginationPageSize,
  BasicDialog,
  FormDialog,
  BasicTab,
  CardTab,
  VerticalTab,
  HTab,
  HForm,
  HAvatar,
  HSearch,
  HFilter
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
  HButton,
  CircleButton,
  TextButton,
  WorkspaceButton,
  BasicCheckbox,
  DisabledCheckbox,
  CheckboxGroup,
  HCheckbox,
  HInput,
  DisabledInput,
  ClearInput,
  PasswordBox,
  TextArea,
  InputLength,
  HLabelInput,
  TopNav,
  CollapseNav,
  HTable,
  // BasicTable,
  // TableWithStatus,
  UploadExcel,
  HDropdown,
  TriggerDropdown,
  HAlert,
  IconAlert,
  DescriptionAlert,
  BasicSwitch,
  TextSwitch,
  DisabledSwitch,
  HCard,
  // BreadcrumbBasic,
  // BreadcrumbIconSeparator,
  HSelect,
  MultiSelect,
  GroupedSelect,
  HTag,
  RemovableTag,
  DynamicTag,
  HCascader,
  BasicDatePicker,
  DateRangePicker,
  BasicSteps,
  BasicStepsWithDescription,
  HDrawer,
  PaginationBasic,
  PaginationPageSize,
  BasicDialog,
  FormDialog,
  BasicTab,
  CardTab,
  VerticalTab,
  HTab,
  HForm,
  HAvatar,
  HSearch,
  HFilter
}

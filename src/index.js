// Button
import BasicButton from '../components/button/BasicButton.vue'
import DisabledButton from '../components/button/DisabledButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import RoundButton from '../components/button/RoundButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import TextButton from '../components/button/TextButton.vue'

// Checkbox
import BasicCheckbox from '../components/checkbox/BasicCheckbox.vue'
import DisabledCheckbox from '../components/checkbox/DisabledCheckbox.vue'
import CheckboxGroup from '../components/checkbox/CheckboxGroup.vue'
import ButtonCheckbox from '../components/checkbox/ButtonCheckbox.vue'

// Input
import BasicInput from '../components/input/BasicInput.vue'
import DisabledInput from '../components/input/DisabledInput.vue'
import ClearInput from '../components/input/ClearInput.vue'
import PasswordBox from '../components/input/PasswordBox.vue'
import TextArea from '../components/input/TextArea.vue'
import InputLength from '../components/input/InputLength.vue'

// Table
import BasicTable from '../components/table/BasicTable.vue'
import TableWithStatus from '../components/table/TableWithStatus.vue'

// Upload
import UploadExcel from '../components/upload/UploadExcel.vue'

// Import other components

export default () => {
  return {
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
    BasicTable,
    TableWithStatus,
    UploadExcel
    // Add other components here
  }
}

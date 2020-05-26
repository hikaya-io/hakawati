import HDatePicker from '../components/datepicker/HDatePicker.vue'
import DateRangePicker from '../components/datepicker/DateRangePicker.vue'

export default { title: 'Datepicker' }

export const hDatePicker = () => ({
  components: { HDatePicker },
  template: `
  <div>
  Default date format: 
  <h-date-picker 
    placeholder="Select a date" 
  />
  <br>
  dd-MM-yyyy format:
  <h-date-picker
    type="date"
    size="medium"
    format="dd-MM-yyyy"
    placeholder="Select a date"
  />
  </div>`

})

export const dateRangePicker = () => ({
  components: { DateRangePicker },
  template: `  
  <div>
  Default date format:
  <date-range-picker
    rangeSeparator="To"
    startDate="Start"
    endDate="End"
    />
    <br>
  dd-MM-yyyy format: 
  <date-range-picker
    format="dd-MM-yyyy"
    rangeSeparator="To"
    startDate="Start"
    endDate="End"
  />
  </div>`
})

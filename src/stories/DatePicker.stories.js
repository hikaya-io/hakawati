import BasicDatePicker from '../components/datepicker/BasicDatePicker.vue'
import DateRangePicker from '../components/datepicker/DateRangePicker.vue'

export default { title: 'Datepicker' }

export const basicDatePicker = () => ({
  components: { BasicDatePicker },
  template: `
  <div>
  Default date format: 
  <basic-date-picker 
    placeholder="Select a date" 
  />
  <br>
  dd-MM-yyyy format:
  <basic-date-picker
    type="daterange"
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
  dd-MM-yyyy format: 
  <date-range-picker
    format="dd-MM-yyyy"
  />
  </div>`
})

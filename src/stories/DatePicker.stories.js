import BasicDatePicker from '../components/datepicker/BasicDatePicker.vue';
import DateRangePicker from '../components/datepicker/DateRangePicker.vue';

export default { title: 'Datepicker' }

export const basicDatePicker = () => ({
  components: { BasicDatePicker },
  template: `
  <div>
  Default date format: <basic-date-picker />
  dd-MM- YY format: <basic-date-picker format="dd-MM-yyyy"/>
  </div>`
  
});

export const dateRangePicker = () => ({
  components: { DateRangePicker },
  template: '<date-range-picker />'
});




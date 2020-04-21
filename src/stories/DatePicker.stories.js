import BasicDatePicker from '../components/datepicker/BasicDatePicker.vue';
import DateRangePicker from '../components/datepicker/DateRangePicker.vue';

export default { title: 'Datepicker' }

export const basicDatePicker = () => ({
  components: { BasicDatePicker },
  template: '<basic-date-picker />'
});

export const dateRangePicker = () => ({
  components: { DateRangePicker },
  template: '<date-range-picker />'
});




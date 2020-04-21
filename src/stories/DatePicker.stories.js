import DateRange from '../components/datepicker/DateRange.vue'

export default { title: 'Datepicker' }

export const dateRange = () => ({
    components: { DateRange },
    template: '<date-range />'
  })
import HFilter from '../components/filter/HFilter.vue'

// This is required for each story
export default { title: 'Filter' }

export const filter = () => ({
  components: { HFilter },
  template: `
  <div>
    <h-filter />
  </div>
  `,
  methods: {}
})

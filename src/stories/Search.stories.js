import PlainSearch from '../components/search/PlainSearch.vue'

// This is required for each story
export default { title: 'Search' }

export const plainSearch = () => ({
  components: { PlainSearch },
  template: `
  <div>
  <plain-search placeholder="Search user name or email" clearable/>
  </div>
  `,
  methods: {}
})

<template>
  <el-autocomplete
    class="en-round"
    v-model="state"
    :clearable="isClearable"
    prefix-icon="el-icon-search"
    :fetch-suggestions="querySearchAsync"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    @select="handleSelect"
  ></el-autocomplete>
</template>
<script>
export default {
  name: 'PlainSearch',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    isClearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      links: [],
      state: '',
      timeout: null
    }
  },
  methods: {
    loadAll () {
      return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' }
      ]
    },
    querySearchAsync (queryString, cb) {
      var links = this.links
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createFilter (queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  mounted () {
    this.links = this.loadAll()
  }
}
</script>
<style>
.en-round input {
  border-radius: 3rem;
}
</style>

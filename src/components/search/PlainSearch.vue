<template>
  <el-input   prefix-icon="el-icon-search" :placeholder="placeholder" v-model="input" v-bind="$attrs" v-on="$listeners" class="en-round">
    <slot></slot>
  </el-input>
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
      input: ''
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.en-round input {
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 15%;
    border-radius: 3rem;
    border: 1px solid #d8dce5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.1s width;
    /* Safari */
    transition: 0.5s width;
    &:focus {
      width: 100%;
    }

    background: #FFFFFF;
}

</style>


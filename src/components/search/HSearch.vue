<template>
  <el-input
    prefix-icon="el-icon-search"
    v-bind="$attrs"
    v-on="$listeners"
    class="h-search"
  >
    <slot></slot>
  </el-input>
</template>
<script>
export default {
  name: 'HSearch',
  methods: {
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-search {
  .en-round input {
    border-radius: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 35%;
      border-radius: 3rem;
      border: transparent;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: 0.1s width;
      /* Safari */
      transition: 0.5s width;
      &:focus {
        width: 100%;
      }
  }

  .el-input__inner {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    border-color: transparent;
    padding: 13px 33px;
    border: none;
  }
}
</style>

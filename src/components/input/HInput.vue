<template>
  <div class="h-input">
    <el-input
      v-model="inputValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'HInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-input {
  .el-textarea__inner {
    font-family: $main-font-family;
    color: $dark-body-grey;
    padding-top: 10px;
    min-height: 33px;
    height: 62px;
  }
}

</style>

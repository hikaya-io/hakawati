<template>
  <el-switch
    v-model="value"
    v-bind="$attrs"
    v-on="$listeners"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'HSwitch',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

</style>

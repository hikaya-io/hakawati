<template>
    <el-switch
    v-model="value"
    v-bind="$attrs"
    v-on="$listeners"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
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

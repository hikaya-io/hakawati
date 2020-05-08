<template>
    <el-switch v-model="value"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    :active-text="activeText"
    :inactive-text="inactiveText"
    @click="$emit('click')">
    </el-switch>
</template>

<script>
export default {
  name: 'TextSwitch',
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    },
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

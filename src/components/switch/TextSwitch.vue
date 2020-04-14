<template>
    <el-switch v-model="value1"
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
    }
  },
  data () {
    return {
      value1: true
    }
  }
}
</script>

<style scoped>

</style>

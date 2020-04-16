<template>
    <el-switch v-model="value1"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    @click="$emit('click')"
    disabled>
    </el-switch>
</template>

<script>
export default {
  name: 'DisabledSwitch',
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
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

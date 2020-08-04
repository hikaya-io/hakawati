<template>
  <el-switch
    v-model="switchValue"
    v-bind="$attrs"
    v-on="$listeners"
    @click="$emit('click')"
  />
</template>

<script>
export default {
  name: 'HSwitch',
  data () {
    return {
      switchValue: this.value
    }
  },
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

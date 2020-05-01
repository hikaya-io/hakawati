<template>
  <el-steps
    :active="active"
    finish-status="success"
    :simple="isSimple"
    :direction="direction"
  >
    <el-step v-for="(step, i) in steps" :key="i" :title="step"></el-step>
  </el-steps>
</template>
<script>
export default {
  name: 'BasicSteps',
  props: {
    steps: {
      type: Array,
      default: () => ['Step 1', 'Step 2', 'Step 3']
    },
    active: {
      type: Number,
      default: 0
    },
    isSimple: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.el-step__head.is-success {
  color: #25ced1;
  border-color: #25ced1;
}
.el-step__title.is-success {
  color: #25ced1;
}
</style>

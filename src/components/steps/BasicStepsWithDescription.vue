<template>
  <el-steps :active="active" finish-status="success" :direction="direction">
    <el-step
      v-for="(step, i) in steps"
      :key="i"
      :title="step.title"
      :description="step.description"
      :space="200"
    ></el-step>
  </el-steps>
</template>
<script>
export default {
  name: 'BasicSteps',
  props: {
    active: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      default: () => [
        {
          title: 'Step 1',
          description: 'Description 1'
        },
        {
          title: 'Step 2',
          description: 'Description 2'
        },
        {
          title: 'Step 3',
          description: 'Description 1'
        }
      ]
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
.el-step__description.is-success {
  color: #25ced1;
}
</style>

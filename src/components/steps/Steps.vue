<template>
  <div class="step">
    <el-steps
      :active="active"
      finish-status="success"
      :simple="isSimple"
      :direction="direction"
    >
      <el-step
        v-for="(step, i) in steps"
        :key="i"
        :title="step.title"
        :description="step.description"
        :space="200"
      />
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
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

<style lang="scss">
@import "../../styles/theme";

.step {
  .el-step__head.is-success {
    color: $primary-color;
    border-color: $primary-color;
  }

  .el-step__title.is-success {
    color: $primary-color;
  }

  .el-step__description.is-success {
    color: $primary-color;
  }
}
</style>

<template>
  <div class="h-step">
    <el-steps
      :active="active"
      finish-status="success"
      :direction="direction"
      simple
    >
      <el-step
        v-for="(step, i) in steps"
        :key="i"
        :title="step.title"
        :description="step.description"
        :space="200"
        @click.native="e => clickStep(e,i)"
      />
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'HSteps',
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
    direction: {
      type: String,
      default: 'horizontal'
    },
    clickStep: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-step {
  .el-step__head.is-success {
    color: transparent;
    border-color: transparent;
  }

  .el-step__title {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 13px 33px;
      border-radius: 25px;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;

    &.is-process {
      color: $primary-color;
      background: $white;
    }

    &.is-wait {
      color: $light-body-grey;
      background: $white;
    }

    &.is-success {
      color: $light-body-grey;
      background: $background-color;
    }
  }

  .el-step__icon.is-text {
    border: 0px;
  }

  .el-icon-check:before {
    content: "";
  }

  .el-steps--simple {
    background: $background-color;
  }
}
</style>

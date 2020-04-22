<template>
  <el-steps :active="active" finish-status="finish" :direction="direction">
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
  name: "BasicSteps",
  props: {
    steps: {
      type: Array,
      default: [
        {
          title: "Step 1",
          description: "Description 1"
        },
        {
          title: "Step 2",
          description: "Description 2"
        },
        {
          title: "Step 3",
          description: "Description 1"
        }
      ]
    },
    direction: {
      type: String,
      default: 'horizontal'
    }
  },
  data() {
    return {
      active: 1
    };
  }
};
</script>
<style scoped>
</style>
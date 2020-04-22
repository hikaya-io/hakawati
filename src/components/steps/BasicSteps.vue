<template>
  <div>
    <el-steps :active="active" finish-status="finish" :direction="direction">
      <el-step v-for="(step, i) in steps" :key="i" :title="step.title" :description="step.description" :space="200" simple></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">Next step</el-button>
  </div>
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
          description: "" 
          },
            {
          title: "Step 2",
          description: "" 
          },
            {
          title: "Step 3",
          description: "" 
          },
          ]
    },
  },
  data() {
    return {
      active: 1
    };
  },
  methods: {
    next() {
      if (this.active++ >= this.steps.length) this.active = 1;
    }
  }
};
</script>
<style scoped>
</style>
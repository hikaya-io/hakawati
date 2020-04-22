<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step v-for="(step, i) in steps" :key="i" :title="step"></el-step>
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
      default: ["Step 1", "Step 2", "Step 3"]
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      if (this.active++ > this.steps.length) this.active = 0;
    }
  }
};
</script>
<style scoped>
</style>
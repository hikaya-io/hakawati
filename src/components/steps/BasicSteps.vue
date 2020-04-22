<template>
    <el-steps :active="active" finish-status="finish" :simple="isSimple" :direction="direction">
      <el-step v-for="(step, i) in steps" :key="i" :title="step"></el-step>
    </el-steps>

</template>
<script>
export default {
  name: "BasicSteps",
  props: {
    steps: {
      type: Array,
      default: ["Step 1", "Step 2", "Step 3"]
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
  data() {
    return {
      active: 1
    };
  }
};
</script>
<style scoped>
</style>
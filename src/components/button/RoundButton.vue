<template>
  <el-button @click="$emit('click')" :size="size" :type="type" :class="type" round>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: "RoundButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.primary {
  background: #33cccc;
  border: 3px solid #33cccc;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 11px 33px;
}

.danger {
  background: #ff3333;
  border-radius: 25px;
  padding: 11px 33px;
}

.ghost {
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 11px 33px;
}
</style>

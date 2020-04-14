<template>
    <el-checkbox-group @click="$emit('click')" :size="size">
      <el-checkbox-button>
        <slot></slot>
      </el-checkbox-button>
    </el-checkbox-group>
</template>

<script>

export default {
  name: 'ButtonCheckbox',
  props: {
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  .el-checkbox__label {
    font-family: 'Lato',sans-serif;
    font-weight: 300;
  }

</style>

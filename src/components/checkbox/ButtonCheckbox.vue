<template>
    <el-checkbox-group @click="$emit('click')" :type="type" v-model="checked" size="medium">
        <slot></slot>
    </el-checkbox-group>
</template>

<script>
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

export default {
  name: 'ButtonCheckbox',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checked: ['Shanghai'],
      cities: cityOptions
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

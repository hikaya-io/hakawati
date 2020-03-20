<template>
  <el-row>
    <el-button @click="$emit('click')"> <slot></slot> </el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'BasicButton'
}
</script>

<style>
    .el-button {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }
</style>>

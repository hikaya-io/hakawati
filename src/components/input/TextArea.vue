<template>
    <el-form ref="form" model="form" label-width="120px">
        <el-row :gutter="20">
            <el-col class="grid-content" :span="12">
                <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="Text area input here"
                    v-model="form.textarea">
                        <slot></slot>
                </el-input>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {
        textarea: ''
      }
    }
  }
}
</script>

<style scoped>

</style>

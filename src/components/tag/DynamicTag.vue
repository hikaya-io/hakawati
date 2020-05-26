<template>
  <div class="dynamic-tag">
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
    {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="mini"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button
      v-else
      class="button-new-tag"
      size="small"
      @click="showInput"
    >
      + New
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'DynamicTag',
  props: {
    dynamicTags: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm () {
      const inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.dynamic-tag {
  .el-tag {
    margin-left: 10px;
    font-family: $main-font-family;
    border-radius: 20px;
    border-color: transparent;
    padding: 0px 15px 0px 15px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    padding: 0px 15px 0px 15px;
    font-family: $main-font-family;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
    border-radius: 20px;
  }

  .el-tag .el-tag__close:hover {
    background-color: transparent;
  }
}

</style>

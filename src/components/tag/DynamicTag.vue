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
    <h-button
      v-else
      class="button-new-tag"
      is-cancel
      label="+ New"
      @click.native="showInput"
    />
  </div>
</template>

<script>
import HButton from '../button/HButton.vue'

export default {
  name: 'DynamicTag',
  components: { HButton },
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
    margin-left: .5rem;
    border-radius: 25px;
    border-color: transparent;
    padding: 0px 24px;
  }

  .button-new-tag {
    margin-left: .5rem;
    border-radius: 25px;
    height: 32px;
    padding: 0px 24px;
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

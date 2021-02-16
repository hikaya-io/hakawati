<template>
  <div>
    <slot name="custom" v-bind:toggle="toggleDropdownVisibility">
    </slot>
    <el-cascader
      v-show="showDefault"
      ref="cascader"
      class="h-cascader"
      v-bind="$attrs"
      v-on="$listeners"
      @visible-change="dropDownVisible = !dropDownVisible"
    />
  </div>
</template>

<script>

export default {
  name: 'HCascader',
  data () {
    return {
      dropDownVisible: false
    }
  },
  computed: {
    showDefault () {
      return !!this.$slots.default
    }
  },
  mounted () {
    if (!this.showDefault) {
      this.$children[1].$refs.reference = this.$children[0].$el
    }
  },
  methods: {
    toggleDropdownVisibility () {
      this.dropDownVisible = !this.dropDownVisible
      this.$refs.cascader.toggleDropDownVisible()
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-cascader {
  .el-cascader .el-input .el-input__inner:focus {
      border-color: $dark-body-grey;
  }

  .el-cascader-menu {
    color: $dark-body-grey;
  }

  .el-cascader-menu__list {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 6px 6px;
    border-color: transparent;
  }
}
.el-cascader-node.in-active-path, .el-cascader-node.is-selectable.in-checked-path, .el-cascader-node.is-active {
  font-weight: normal;
}

</style>

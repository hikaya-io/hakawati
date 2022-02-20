<template>
  <div>
    <h-button
      plain
      @click="successMessage"
    >
    </h-button>
    <h-button
      plain
      @click="errorMessage"
    >
    </h-button>
  </div>
</template>

<script>
export default {
  name: 'HMessage',
  methods: {
    successMessage () {
      const h = this.$createElement

      this.$notify({
        title: 'Title',
        message: h('i', 'This is a success message that automatically closes'),
        type: 'success'
      })
    },

    errorMessage () {
      this.$notify({
        title: 'Prompt',
        message: 'This is an error message that does not automatically close',
        type: 'error',
        duration: 0
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

</style>

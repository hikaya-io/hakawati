<template>
  <h-card>
    <div slot="title" class="body-3-bold">
      <span>{{ title }}</span>
    </div>
    <div slot="items">
      <p>{{ description }}</p>
      <h-button label="Click" @click.native="$emit('button-clicked')"/>
    </div>
  </h-card>
</template>
<script>
import HCard from '../card/HCard'
import HButton from '../button/HButton'

export default {
  name: 'ComplexItem',
  components: {
    HButton,
    HCard
  },
  props: {
    title: String,
    description: String
  }
}
</script>
<style lang="scss">
  .card {
    height: 100%;
  }
</style>

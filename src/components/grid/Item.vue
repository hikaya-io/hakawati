<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: {
    title: String,
    description: String
  }
}
</script>

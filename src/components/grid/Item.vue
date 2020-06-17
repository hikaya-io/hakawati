<template>
  <div>
    <h1>{{ title }}</h1>
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

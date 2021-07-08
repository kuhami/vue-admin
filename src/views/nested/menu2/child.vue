<template>
  <div>
    <ul>
      <li v-for="list in lists">
        <slot :bbbbb="list"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'child',
    props: ['lists'],
  }
</script>

<style scoped>

</style>

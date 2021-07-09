<template>
  <div>
    <slot name="header">我是header</slot>
    <br>
    <slot name="main">我是main</slot>
    <br>
    <slot :title="title" :message="message" name="footer">我是footer</slot>
    <br>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'slotName',
    data() {
      return {
        title: {
          title: '我是slotName'
        },
        message: '我是Message'
      }
    }
  }
</script>

<style scoped>

</style>

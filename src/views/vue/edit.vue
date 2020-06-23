<template>
  <div class="app-container">
    <div>主要用于保留组件状态或避免重新渲染</div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        tempRoute:{}
      }
    },
    created() {
      this.tempRoute = Object.assign({}, this.$route)
      this.setTagsViewTitle()
    },
    methods: {
      setTagsViewTitle() {
        const title = '答案'
        const route = Object.assign({}, this.tempRoute, { title: `${title}-${this.$route.params.id}` })
        this.$store.dispatch('tagsView/updateVisitedView', route)
      },
    }
  }
</script>

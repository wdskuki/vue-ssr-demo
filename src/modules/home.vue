<template>
<div>
  home
  <div>{{ homeInfo }}</div>
</div>
</template>
<script>
export default {
  serverRequest(store){
    console.log('serverRequest')
    return store.dispatch('getHomeInfo')
  },
  mounted() {

  },
  computed: {
    homeInfo(){
      return this.$store.state.homeInfo
    }
  }
}
</script>
<style scoped>
</style>

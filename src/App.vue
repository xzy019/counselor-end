<template>
  <router-view v-if="isRouterAlive"/>
</template>

<script>
export default {
  components: {

  },
  provide(){
    return{
      reload: this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <homePage class="home" />
    <tail />
  </div>
</template>

<script>
import homePage from './components/homePage.vue'
import tail from './components/tail.vue'

export default {
  name: 'App',
  data() {
    return {
      num:0
    }
  },
  components: {
    homePage,
    tail,
  },
  mounted () {
    var that = this
    this.$bus.$on('',(data)=>{
      that.num = data
    })
    localStorage.setItem('backstage',0)
    localStorage.setItem('user',0)  
  },
}
</script>

<style>
.home{
  width: 100%;
  top: 0px;
}
.login{
  width: 100%;
}
</style>

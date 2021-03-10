<template>
  <div id="app">
     <loading :isLoading="isLoading"/>
      <div>
        <test></test>
      </div>
  </div> 
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Test from "./components/test.vue"
import Loading from "./components/loading.vue"

export default {
  name: 'App',
  components:{
    Test,
    Loading
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #000b3f;
  background-color: #e0e5ff;
}
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
</style>
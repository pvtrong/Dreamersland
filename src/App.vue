<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { main } from '@/assets/js/main';


export default {
  name: 'App',
  mounted() {
    setTimeout(() => {
      main(window.jQuery); 
    }, 500);
  },
};
</script>

<style lang="css">
@import '~@/style.css';
</style>

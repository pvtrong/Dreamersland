<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { main } from '@/utils/main';
import jQuery from 'jquery';
import WOW from 'wowjs';

export default {
  name: 'App',
  created() {
    setTimeout(() => {
      new WOW.WOW().init();
    })
  },
  updated() {
    setTimeout(() => {
      main(jQuery);
    }, 100);
  },
};
</script>

<style lang="css">
@import './style.css';
</style>

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
  updated: function () {
    setTimeout(() => {
      main(jQuery);
      new WOW.WOW({
        live: false
      }).init();
    }, 100);
  },
};
</script>

<style lang="css">
@import './style.css';
</style>

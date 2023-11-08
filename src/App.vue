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
  data() {
    return {
      activeIndex: '1',
    };
  },
  created() {
    new WOW.WOW({
      live: false
    }).init();
  },
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

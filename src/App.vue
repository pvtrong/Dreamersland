<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { main } from '@/utils/main';
import jQuery from 'jquery';
import 'animate.css';
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
    main(jQuery);
    new WOW.WOW({
      live: false
    }).init();
  },
};
</script>

<style lang="css">
@import '~@/style.css';
</style>

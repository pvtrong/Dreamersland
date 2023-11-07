<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { main } from '@/utils/main';
import jQuery from 'jquery';

export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
    };
  },
  updated: function () {
    setTimeout(() => {
      main(jQuery);
    }, 500);
  },
};
</script>

<style lang="css">
@import '~@/style.css';
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header/index.vue';
import { main } from '@/utils/main';
import jQuery from 'jquery';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    search() {},
    redirectPage(path) {
      this.$router.push(path);
    },
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath;
    },
  },
  mounted: function () {
    setTimeout(() => {
      main(jQuery);
    }, 500);
  },
};
</script>

<style lang="css">
@import '~@/style.css';

.is-active {
  color: #46f780 !important;
  border-bottom: none !important;
}

.is-active::before {
  content: '';
  transition-duration: 0.3s;
  transition-delay: 0s;
  transition-property: all;
  transition-timing-function: ease-out;
  transform: rotate(-45deg);
  width: 42px;
  background-color: #46f780;
}
</style>

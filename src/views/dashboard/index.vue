<template>
  <div>
    <main class="main--area overflow-x-hidden">
      <banner-area />
      <match-result-area />
      <area-background />
    </main>
  </div>
</template>

<script>
import BannerArea from './banner-area.vue';
import MatchResultArea from './match-result-area.vue';
import AreaBackground from './area-background/index.vue';
export default {
  components: {
    BannerArea,
    MatchResultArea,
    AreaBackground
  }
};
</script>

<style lang="scss" scoped></style>

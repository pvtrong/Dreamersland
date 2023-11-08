<template>
  <!-- area-background-start done -->
  <div class="area-background bg-[top_center] bg-no-repeat bg-cover">
    <about-area />

    <streamers-area />
  </div>
  <!-- area-background-end -->
</template>

<script>
import AboutArea from './about-area.vue';
import StreamersArea from './streamers-area.vue';

export default {
  components: {
    AboutArea,
    StreamersArea
  }
}
</script>

<style lang="scss" scoped>
.area-background {
  background-image: url(../../../assets/img/bg/area_bg02.jpg);
}
</style>

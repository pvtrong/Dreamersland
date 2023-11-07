<template>
  <!-- area-background-start done -->
  <div class="area-background bg-[top_center] bg-no-repeat bg-cover" data-background="assets/img/bg/area_bg02.jpg">
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

<style lang="scss" scoped></style>

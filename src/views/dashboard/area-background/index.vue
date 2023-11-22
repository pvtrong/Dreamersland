<template>
  <!-- area-background-start done -->
  <div
    class="area-background bg-[top_center] bg-no-repeat bg-cover"
    data-background="../../assets/img/bg/area_bg02.jpg"
  >
    <!-- about-area done -->
    <about-area />
    <!-- about-area-end -->

    <!-- streamers-area done -->
    <streams-area :listPlayers="listPlayers" />
    <!-- streamers-area-end -->
  </div>
  <!-- area-background-end -->
</template>

<script>
import AboutArea from './about-area.vue';
import StreamsArea from './streams-area.vue';

export default {
  components: {
    AboutArea,
    StreamsArea,
  },
  props: {
    listPlayers: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>

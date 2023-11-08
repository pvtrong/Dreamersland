<template>
  <div>
    <main class="main--area overflow-hidden">
      <banner-area />
      <match-result-area />
      <area-background />
      <upcomming-match />
      <project-area />
      <social-area />
    </main>
  </div>
</template>

<script>
import $ from 'jquery';

import BannerArea from './banner-area.vue';
import MatchResultArea from './match-result-area.vue';
import AreaBackground from './area-background/index.vue';
import UpcommingMatch from './upcomming-match.vue';
import ProjectArea from './project-area.vue';
import SocialArea from './social-area.vue';

export default {
  components: {
    BannerArea,
    MatchResultArea,
    AreaBackground,
    UpcommingMatch,
    ProjectArea,
    SocialArea
  },
};
</script>

<style lang="scss" scoped></style>

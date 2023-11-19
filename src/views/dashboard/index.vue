<template>
  <div>
    <banner-area />

    <match-result-area />

    <area-background v-if="listPlayers.length !== 0" :listPlayers="listPlayers" />

    <upcoming-match />
    <!-- project-area done -->
    <project-area />
    <!-- project-area-end -->

    <!-- social-area done -->
    <social-area />
    <!-- social-area-end -->

    <!-- brand-area done -->

    <brand-area />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { main } from '@/assets/js/main';
import BannerArea from './banner-area.vue';
import MatchResultArea from './match-result-area.vue';
import AreaBackground from './area-background/index.vue';
import UpcomingMatch from './upcoming-match.vue';
import ProjectArea from './project-area.vue';
import SocialArea from './social-area.vue';
import BrandArea from './brand-area.vue';

import { getListPlayers } from '@/api/user';

export default {
  name: 'Dashboard',
  components: {
    BannerArea,
    MatchResultArea,
    AreaBackground,
    UpcomingMatch,
    ProjectArea,
    SocialArea,
    BrandArea,
  },
  computed: {
    ...mapGetters(['name']),
  },
  created() {
    this.getData({ page: 1, limit: 12 });
  },
  data() {
    return {
      listPlayers: [],
      isLoading: false,
    };
  },
  methods: {
    async getData(params) {
      this.isLoading = true;
      try {
        const { data } = await getListPlayers(params);
        this.listPlayers = data.data;
      } catch (error) {}
      this.isLoading = false;
    },
  },
  updated() {
    setTimeout(() => {
      main(window.jQuery);
    });
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

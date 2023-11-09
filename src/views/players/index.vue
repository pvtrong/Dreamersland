<template>
  <article>
    <breadcrumb
      :pageTitle="'Players'"
      :thumbImage="breadcrumbImage"
      :isUserDetail="false"
    ></breadcrumb>
    <section class="pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container">
        <custom-title :title="'Players'"></custom-title>

        <div class="flex gap-[20px] justify-center flex-wrap">
          <player-info
            v-for="(player, index) in listPlayers"
            :key="index"
            :player="player"
          ></player-info>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import PlayerInfo from './player-info.vue';
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import breadcrumbImage from '@/assets/img/others/breadcrumb_img01.png';
import { getListPlayers } from '@/api/user';

export default {
  components: {
    PlayerInfo,
    Breadcrumb,
    breadcrumbImage,
    CustomTitle,
  },
  data() {
    return {
      breadcrumbImage,
      listPlayers: [],
      isLoading: false,
    };
  },
  created() {
    this.getData({});
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
};
</script>

<style scoped></style>

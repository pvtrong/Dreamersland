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
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
          <player-info></player-info>
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
    };
  },
};
</script>

<style scoped></style>

<template>
  <section>
    <breadcrumb :pageTitle="'Players'" :thumbImage="breadcrumbImage" :isUserDetail="false"></breadcrumb>
    <div class="pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container 2xl:px-[3.5rem]">
        <custom-title :title="'Players'"></custom-title>

        <div class="flex gap-[20px] justify-center flex-wrap">
          <player-info v-for="(player, index) in listPlayers" :key="index" :player="player"></player-info>
        </div>
        <div class="block text-center mt-[2rem]">
          <el-pagination layout="prev, pager, next" :page-size="pageSize" :current-page.sync="pageIndex" :total="total"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { main } from '@/assets/js/main';

import PlayerInfo from './player-info.vue';
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import breadcrumbImage from '@/assets/img/others/breadcrumb_img01.png';
import { getListPlayers } from '@/api/user';

export default {
  components: {
    PlayerInfo,
    Breadcrumb,
    CustomTitle,
  },
  data() {
    return {
      breadcrumbImage,
      listPlayers: [],
      isLoading: false,
      total: 0,
      pageSize: 16,
      pageIndex: 1,
    };
  },
  created() {
    this.getData({ page: this.pageIndex, limit: this.pageSize });
  },
  methods: {
    async getData(params) {
      this.isLoading = true;
      try {
        const { data } = await getListPlayers(params);
        this.listPlayers = data.data;
        this.total = data.total;
      } catch (error) { }
      this.isLoading = false;
    },

    handleCurrentChange(val) {
      this.pageIndex = val;

      this.getData({ page: val, limit: this.pageSize }).then(() => {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      });
    },
  },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  }
};
</script>

<style scoped></style>

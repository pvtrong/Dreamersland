<template>
  <section>
    <breadcrumb :pageTitle="'PLAY TO EARN'" :thumbImage="breadcrumbImage" :isUserDetail="false"></breadcrumb>
    <div class="pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container">
        <custom-title :title="'PLAY TO EARN'"></custom-title>

        <div
          class="flex flex-wrap justify-start w-full xl:gap-[20px] xxl:gap-[20px] 2xl:gap-[20px] lg:gap-[15px] md:justify-between sm:justify-center xsm:justify-center">
          <task-card-item v-for="task in listTasks" :key="task.id" :blood-count="task.bloodCount" :status="task.status"
            :task-name="task.taskName" :point="task.point" :image="task.image" :isActive="task.isActive" />
        </div>

        <!-- <div class="flex gap-[20px] justify-center flex-wrap">
          <task-info v-for="(player, index) in listTasks" :key="index" :player="player"></task-info>
        </div> -->
        <!-- <div class="block text-end mt-[2rem]">
          <el-pagination layout="prev, pager, next" :page-size="pageSize" :current-page.sync="pageIndex" :total="total"
            @current-change="handleCurrentChange">
          </el-pagination>
      </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { main } from '@/assets/js/main';
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import ItemCardImg from '@/assets/item-card.png';
import ItemCardImg2 from '@/assets/img/others/breadcrumb_img03.png';
import breadcrumbImage from '../../assets/img/others/breadcrumb_img01.png';
// import { getListPlayers } from '@/api/user';

import TaskCardItem from './task-card-item.vue';

export default {
  components: {
    Breadcrumb,
    CustomTitle,
    breadcrumbImage,
    TaskCardItem
  },
  data() {
    return {
      breadcrumbImage,
      listTasks: [
        {
          id: 1,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
          isActive: false,
        },
        {
          id: 2,
          bloodCount: 40,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA Tháng',
          image: ItemCardImg2,
          point: 20,
          isActive: true,
        },
        {
          id: 3,
          bloodCount: 10,
          status: 'Chưa nhận',
          taskName: 'KỶ LỤC',
          image: ItemCardImg,
          point: 40,
          isActive: false,
        },
        {
          id: 4,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA',
          image: ItemCardImg2,
          point: 30,
          isActive: false,
        },
        {
          id: 5,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA',
          image: ItemCardImg2,
          point: 30,
          isActive: false,
        },
        {
          id: 6,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA',
          image: ItemCardImg2,
          point: 30,
          isActive: false,
        },
        {
          id: 7,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA',
          image: ItemCardImg2,
          point: 30,
          isActive: false,
        },
      ],
      isLoading: false,
      total: 0,
      pageSize: 16,
      pageIndex: 1,
    };
  },
  // created() {
  //   this.getData({ page: this.pageIndex, limit: this.pageSize });
  // },
  // methods: {
  //   async getData(params) {
  //     this.isLoading = true;
  //     try {
  //       const { data } = await getListPlayers(params);
  //       this.listTasks = data.data;
  //       this.total = data.total;
  //     } catch (error) { }
  //     this.isLoading = false;
  //   },

  //   handleCurrentChange(val) {
  //     this.pageIndex = val;

  //     this.getData({ page: val, limit: this.pageSize }).then(() => {
  //       window.scrollTo({
  //         top: 300,
  //         behavior: 'smooth',
  //       });
  //     });
  //   },
  // },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  }
};
</script>

<style scoped></style>

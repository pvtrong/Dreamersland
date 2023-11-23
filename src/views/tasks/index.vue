<template>
  <section>
    <breadcrumb :pageTitle="'PLAY TO EARN'" :thumbImage="breadcrumbImage" :isUserDetail="false"></breadcrumb>
    <div class="pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container">
        <custom-title :title="'PLAY TO EARN'"></custom-title>

        <div
          class="flex flex-wrap justify-center w-full xl:gap-[20px] xxl:gap-[20px] 2xl:gap-[20px] lg:gap-[15px] md:justify-between sm:justify-center xsm:justify-center">
          <task-card-item v-for="task in listTasks" :key="task.id" :blood-count="task.bloodCount" :status="task.status"
            :openCondition="task.openCondition" :task-name="task.taskName" :point="task.point" :image="task.image"
            :isActive="task.isActive" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { main } from '@/assets/js/main';
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import ItemCardImg2 from '@/assets/img/others/breadcrumb_img03.png';
import breadcrumbImage from '@/assets/img/others/breadcrumb_img01.png';
import ItemCardImg3 from '@/assets/img/others/breadcrumb_img02.png';
// import { getListPlayers } from '@/api/user';

import TaskCardItem from './task-card-item.vue';

export default {
  name: 'Danh sách nhiệm vụ',
  components: {
    Breadcrumb,
    CustomTitle,
    breadcrumbImage,
    TaskCardItem,
  },
  data() {
    return {
      breadcrumbImage,
      listTasks: [
        {
          id: 1,
          bloodCount: 30,
          status: 'Mở khóa',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: breadcrumbImage,
          point: 20,
          isActive: false,
          openCondition: 'Để mở khóa danh hiện này, bạn cần vượt qua kỷ lục ngày của hệ thống'
        },
        {
          id: 2,
          bloodCount: 40,
          status: 'Mở khóa',
          taskName: 'KỶ LỤC GIA TUẦN',
          image: ItemCardImg2,
          point: 55,
          isActive: false,
          openCondition: 'Để mở khóa danh hiện này, bạn cần vượt qua kỷ lục tuần của hệ thống'
        },
        {
          id: 3,
          bloodCount: 50,
          status: 'Mở khóa',
          taskName: 'KỶ LỤC GIA THÁNG',
          image: ItemCardImg3,
          point: 150,
          isActive: false,
          openCondition: 'Để mở khóa danh hiện này, bạn cần vượt qua kỷ lục tháng của hệ thống'
        },
      ],
      isLoading: false,
      total: 0,
      pageSize: 16,
      pageIndex: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  },
};
</script>

<style scoped></style>

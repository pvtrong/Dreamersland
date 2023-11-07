<template>
  <main class="main--area overflow-x-hidden">
    <breadcrumb :page-title="currentUser.last_name + ' ' + currentUser.first_name" :thumb-image="win02Img"
      :isUserDetail="true" :createdDate="createdAt" />
    <!-- services-area done -->
    <section class="services-area services__bg-color pt-[120px] pb-[120px] bg-[#11171D]">
      <div class="container">
        <div class="tournament__wrapper px-20 py-0 xl:px-[60px] xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0">
          <div class="services-row flex flex-wrap mx-[-15px] items-center align-items-xl-start">
            <div
              class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative">
              <div
                class="section__title text-left mb-6 relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-0 lg:w-[calc(100%_+_200px)] sm:w-full sm:text-center sm:after:m-[19px_auto_0] xsm:w-full xsm:text-center xsm:after:m-[19px_auto_0]">
                <span
                  class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0">DREAMERS
                  LAND</span>
                <h3 class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]">
                  ABOUT THE PLAYER
                </h3>
              </div>

              <div>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                Maecenas tempus, tellus eget.
              </div>
            </div>
            <rank-info />
          </div>

          <div class="services-row flex flex-wrap mx-[-15px] items-center align-items-xl-start mt-28">
            <div
              class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative">
              <div
                class="section__title text-left mb-6 relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-0 lg:w-[calc(100%_+_200px)] sm:w-full sm:text-center sm:after:m-[19px_auto_0] xsm:w-full xsm:text-center xsm:after:m-[19px_auto_0]">
                <span
                  class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0">DREAMERS
                  LAND</span>
                <h3 class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]">
                  ACHIVEMENTS
                </h3>
              </div>
            </div>

            <div class="flex flex-wrap mx-[-15px] justify-center gutter-25">
              <task-card-item v-for="task in tasks" :key="task.id" :blood-count="task.bloodCount" :status="task.status"
                :task-name="task.taskName" :point="task.point" :image="task.image" :isActive="task.isActive" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- services-area-end -->
  </main>
</template>

<script>
import moment from 'moment';

import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import RankInfo from '@/views/users/rank-info.vue';
import TaskCardItem from '@/views/users/task-card-item.vue';
import win02Img from '@/assets/img/team/team02.png';
import store from '@/store';
import ItemCardImg from '@/assets/item-card.png';
import ItemCardImg2 from '@/assets/img/others/breadcrumb_img03.png';

export default {
  name: 'Users',
  components: {
    Breadcrumb,
    RankInfo,
    TaskCardItem,
  },
  computed: {
    createdAt() {
      return moment(this.currentUser.createdAt).format('DD/MM/YYYY')
    }
  },
  data() {
    return {
      win02Img,
      currentUser: store.getters.currentUser,
      tasks: [
        {
          id: 1,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
          isActive: false
        },
        {
          id: 2,
          bloodCount: 40,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA Tháng',
          image: ItemCardImg2,
          point: 20,
          isActive: true
        },
        {
          id: 3,
          bloodCount: 10,
          status: 'Chưa nhận',
          taskName: 'KỶ LỤC',
          image: ItemCardImg,
          point: 40,
          isActive: false
        },
        {
          id: 4,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA',
          image: ItemCardImg2,
          point: 30,
          isActive: false
        },
      ],
    };
  },
};
</script>

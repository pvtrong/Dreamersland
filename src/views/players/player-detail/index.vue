<template>
  <main class="main--area overflow-x-hidden">
    <breadcrumb :page-title="currentUser.last_name + ' ' + currentUser.first_name"
      :thumb-image="currentUser.avatar_url || win02Img" :isUserDetail="true" :createdDate="createdAt" />
    <!-- services-area done -->
    <section class="services-area services__bg-color pt-[120px] pb-[120px] bg-[#11171D]">
      <div class="container">
        <div class="py-0 xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0">
          <div class="services-row flex flex-wrap items-center align-items-xl-start">
            <div
              class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative">
              <div
                class="section__title text-left mb-6 relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-0 lg:w-[calc(100%_+_200px)] sm:w-full sm:text-center sm:after:m-[19px_auto_0] xsm:w-full xsm:text-center xsm:after:m-[19px_auto_0]">
                <span
                  class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0">DREAMERS
                  LAND
                </span>
                <h3
                  class="title text-[45px] font-extrabold tracking-[1px] m-0 lg:text-4xl sm:text-[35px] xsm:text-[35px]">
                  ABOUT THE PLAYER
                </h3>
              </div>

              <div>
                {{ currentUser.bio }}
              </div>
            </div>

            <rank-info v-if="currentUser" :rankImg="currentUser.rank && currentUser.rank.image_url"
              :currentSeasonPoint="currentUser.current_season_point || 0"
              :currentSeasonBonus="currentUser.current_season_bonus || 0" :currentSeasonTotalPoint="Number(currentUser.current_season_point || 0) +
                Number(currentUser.current_season_bonus || 0)
                " :rankName="currentUser.rank && currentUser.rank.rank_name" />
          </div>

          <!-- <div class="services-row flex flex-wrap items-center align-items-xl-start mt-28">
            <div
              class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative">
              <div
                class="section__title text-left relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-0 lg:w-[calc(100%_+_200px)] sm:w-full sm:text-center sm:after:m-[19px_auto_0] xsm:w-full xsm:text-center xsm:after:m-[19px_auto_0]">
                <span
                  class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0">
                  DREAMERS LAND
                </span>
                <h3 class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]">
                  ACHIVEMENTS
                </h3>
              </div>
            </div>

            <div
              class="flex flex-wrap justify-start w-full xl:gap-[20px] xxl:gap-[20px] 2xl:gap-[20px] lg:gap-[15px] md:justify-between sm:justify-center xsm:justify-center">
              <task-card-item v-for="task in tasks" :key="task.id" :blood-count="task.bloodCount" :status="task.status"
                :task-name="task.taskName" :point="task.point" :image="task.image" :isActive="task.isActive" />
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- services-area-end -->
  </main>
</template>

<script>
import moment from 'moment';
import { main } from '@/assets/js/main';
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import RankInfo from './rank-info.vue';
import TaskCardItem from './task-card-item.vue';
import win02Img from '@/assets/img/team/team02.png';
import ItemCardImg from '@/assets/item-card.png';
import ItemCardImg2 from '@/assets/img/others/breadcrumb_img03.png';
import { getUserDetail } from '@/api/user';

export default {
  name: 'Chi tiết người chơi',
  components: {
    Breadcrumb,
    RankInfo,
    TaskCardItem,
  },
  created() {
    const idParams = this.$router.currentRoute.params;
    this.getData(idParams?.id);
  },
  data() {
    return {
      win02Img,
      currentUser: {},
      isLoading: false,
      // tasks: [
      //   {
      //     id: 1,
      //     bloodCount: 30,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA NGÀY',
      //     image: ItemCardImg,
      //     point: 40,
      //     isActive: false,
      //   },
      //   {
      //     id: 2,
      //     bloodCount: 40,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA Tháng',
      //     image: ItemCardImg2,
      //     point: 20,
      //     isActive: true,
      //   },
      //   {
      //     id: 3,
      //     bloodCount: 10,
      //     status: 'Chưa nhận',
      //     taskName: 'KỶ LỤC',
      //     image: ItemCardImg,
      //     point: 40,
      //     isActive: false,
      //   },
      //   {
      //     id: 4,
      //     bloodCount: 30,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA',
      //     image: ItemCardImg2,
      //     point: 30,
      //     isActive: false,
      //   },
      //   {
      //     id: 5,
      //     bloodCount: 30,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA',
      //     image: ItemCardImg2,
      //     point: 30,
      //     isActive: false,
      //   },
      //   {
      //     id: 6,
      //     bloodCount: 30,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA',
      //     image: ItemCardImg2,
      //     point: 30,
      //     isActive: false,
      //   },
      //   {
      //     id: 7,
      //     bloodCount: 30,
      //     status: 'Đã nhận',
      //     taskName: 'KỶ LỤC GIA',
      //     image: ItemCardImg2,
      //     point: 30,
      //     isActive: false,
      //   },
      // ],
    };
  },
  methods: {
    async getData(params) {
      this.isLoading = true;
      try {
        const { data } = await getUserDetail(params);
        this.currentUser = data.currentUser;
      } catch (error) { }
      this.isLoading = false;
    },
  },
  computed: {
    createdAt() {
      return moment(this.currentUser.createdAt).format('DD/MM/YYYY');
    },
  },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  },
};
</script>

<style scoped>
.title {
  text-shadow: -1px 2px 0px rgba(69, 248, 130, 0.66);
  font-family: 'berlin_sans_fb_demibold';
}
</style>

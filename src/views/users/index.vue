<template>
  <main class="main--area overflow-x-hidden">
    <breadcrumb :page-title="'Người chơi'" :thumb-image="win02Img" />

    <!-- services-area done -->
    <section
      class="services-area services__bg-color pt-[120px] pb-[120px] bg-[#040608]"
    >
      <div class="container">
        <div
          class="services-row flex flex-wrap mx-[-15px] items-center align-items-xl-start"
        >
          <div
            class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative"
          >
            <div
              class="section__title text-left mb-6 relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-0 lg:w-[calc(100%_+_200px)] sm:w-full sm:text-center sm:after:m-[19px_auto_0] xsm:w-full xsm:text-center xsm:after:m-[19px_auto_0]"
            >
              <span
                class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0"
                >DREAMERS LAND</span
              >
              <h3
                class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]"
              >
                ABOUT THE PLAYER
              </h3>
            </div>

            <!-- <div>
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
              Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
              tempus, tellus eget.
            </div> -->
          </div>
          <rank-info />
        </div>

        <div
          class="services-row flex flex-wrap mx-[-15px] items-center align-items-xl-start"
        >
          <div
            class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative"
          >
            <!--  -->
          </div>

          <div class="flex flex-wrap justify-between w-full">
            <!-- <task-card-item
              v-for="task in tasks"
              :key="task.id"
              :blood-count="task.bloodCount"
              :status="task.status"
              :task-name="task.taskName"
              :point="task.point"
              :image="task.image"
            /> -->
          </div>
        </div>
      </div>
    </section>
    <!-- services-area-end -->
  </main>
</template>

<script>
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import RankInfo from '@/views/users/rank-info.vue';
import TaskCardItem from '@/views/users/task-card-item.vue';
import win02Img from '@/assets/img/others/win02.png';
import ItemCardImg from '@/assets/item-card.png';

export default {
  name: 'Users',
  components: {
    Breadcrumb,
    RankInfo,
    TaskCardItem,
  },
  data() {
    return {
      win02Img,
      tasks: [
        {
          id: 1,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
        },
        {
          id: 2,
          bloodCount: 40,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
        },
        {
          id: 3,
          bloodCount: 10,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
        },
        {
          id: 4,
          bloodCount: 30,
          status: 'Đã nhận',
          taskName: 'KỶ LỤC GIA NGÀY',
          image: ItemCardImg,
          point: 40,
        },
      ],
    };
  },
};
</script>

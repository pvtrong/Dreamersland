<template>
  <section class="streamers__area pt-[95px] pb-[120px]">
    <div class="container">
      <div class="flex flex-wrap mx-[-15px] justify-center">
        <div
          class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-7/12 lg:basis-7/12 md:w-10/12 md:basis-10/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
          <div
            class="section__title text-center mb-[60px] relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto">
            <span
              class="sub-title tg__animate-text block uppercase text-[14px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0">Our
              top streamers</span>
            <h3
              class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] sm:leading-[1.1] xsm:text-[35px] xsm:leading-[1.1]">
              top rated streamers
            </h3>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="swiper-container streamers-active mr-[-15px] ml-[-15px] my-0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(player, index) in listPlayers" :key="index">
            <div
              class="streamers__item text-center relative transition-all duration-[0.3s] ease-[ease-out] delay-[0s] mt-0 mb-[30px] mx-0 p-[3px] rounded-[10px] border-[3px] border-solid border-[#383c4e] group hover:border-[#45f882]">
              <div
                class="streamers__thumb relative z-[1] before:content-[''] before:absolute before:w-full before:h-full before:opacity-100 before:pointer-events-none before:transition-all before:duration-[0.4s] before:ease-[ease-out] before:delay-[0s] before:rounded-md before:left-0 before:bottom-0 after:content-[''] after:absolute after:w-full after:h-0 after:opacity-0 after:pointer-events-none after:transition-all after:duration-[0.4s] after:ease-[ease-out] after:delay-[0s] after:rounded-md after:left-0 after:bottom-0 group-hover:before:opacity-0 group-hover:after:h-full group-hover:after:opacity-80 before:bg-[linear-gradient(0deg,#0e141e_0%,#ffffff00_100%)] after:bg-[linear-gradient(0deg,#45f882_0%,transparent_100%)]">
                <a href="#"><img class="h-[460px] object-cover border w-full rounded-md border-solid border-[#383c4e]"
                    :src="getAvatar(player) || avatar" alt="img" /></a>
              </div>
              <div class="streamers__content absolute pointer-events-none z-[1] bottom-7 inset-x-5">
                <h4 class="name text-xl tracking-[1px] m-0">
                  {{ player.last_name + ' ' + player.first_name }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="streamers__pagination flex items-center justify-center gap-[5px_13px] flex-wrap leading-none mt-5 mb-0 mx-0">
        <div
          class="slider-button-prev streamers__pagination-arrow text-[15px] text-[#fff] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] hover:text-[#45f882]">
          <i class="fas fa-angle-left"></i>
        </div>
        <div class="swiper-pagination streamers__pagination-dots relative flex items-center gap-2 z-[1]"></div>
        <div
          class="slider-button-next streamers__pagination-arrow text-[15px] text-[#fff] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] hover:text-[#45f882]">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <!--  -->
    </div>
  </section>
</template>

<script>
import avatarDemo from '@/assets/img/team/streamers01.png';
import { getImgSmall } from '@/utils/index';

export default {
  props: {
    listPlayers: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      avatar: avatarDemo,
    };
  },
  methods: {
    getAvatar(player) {
      return player.avatar_url && getImgSmall(player.avatar_url);
    },
  },
};
</script>

<style lang="scss" scoped></style>

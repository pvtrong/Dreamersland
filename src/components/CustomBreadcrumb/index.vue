<template>
  <section
    class="breadcrumb-area relative bg-center bg-cover min-h-[561px] flex items-center pt-[110px] pb-[75px] px-0 before:content-[''] before:absolute before:w-6/12 before:bg-[#45f882] before:h-[50px] before:left-0 before:bottom-0 after:content-[''] after:absolute after:w-6/12 after:bg-[#45f882] after:h-[50px] after:left-auto after:right-0 after:bottom-0 before:clip-path-polygon-[0_0,0_100%,100%_100%] after:clip-path-polygon-[100%_0,0_100%,100%_100%] xl:min-h-[480px] lg:min-h-[400px] md:min-h-[400px] xl:before:h-10 xl:after:h-10 lg:before:h-[30px] lg:after:h-[30px] md:before:h-[30px] md:after:h-[30px] sm:min-h-[310px] sm:pt-[120px] sm:pb-[75px] sm:px-0 sm:before:h-5 sm:after:h-5 xsm:min-h-[310px] xsm:pt-[120px] xsm:pb-[75px] xsm:px-0 xsm:before:h-5 xsm:after:h-5"
    :style="{ 'background-image': 'url(' + backgroundImage + ')' }">
    <div class="container">
      <div class="breadcrumb__wrapper relative px-20 py-0 lg:px-0 md:px-0 sm:px-0 xsm:px-0">
        <div class="flex flex-wrap mx-[-15px]">
          <div
            class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-7/12 lg:basis-7/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
            <div class="breadcrumb__content text-left md:text-center sm:text-center xsm:text-center">
              <h2
                class="title text-[45px] sm:text-[35px] xsm:text-[35px] leading-[0.8] mt-0 mb-[21px] mx-0 font-berlin wow fadeInUp sm:mt-0 sm:mb-[21px] sm:mx-0 xsm:text-[14vw] xsm:mt-0 xsm:mb-[21px] xsm:mx-0 text-show-title">
                {{ pageTitle }}
              </h2>
              <nav aria-label="breadcrumb">
                <ol
                  class="breadcrumb justify-start sm:justify-center xsm:justify-center mt-3 mb-0 mx-0 flex flex-wrap list-none md:justify-center sm:text-center xsm:text-center">
                  <li
                    class="breadcrumb-item uppercase font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18]">
                    <a class="hover:text-[#ffbe18]" @click="handleRedirectHomePage">Home</a>
                  </li>
                  <li
                    class="breadcrumb-item uppercase font-bold text-[14px] tracking-[2px] flex items-center after:content-[''] after:block after:w-2 after:h-2 after:transition-all after:duration-[0.3s] after:ease-[ease-out] after:delay-[0s] after:mx-2.5 after:my-0 after:rounded-[50%] after:bg-[#45f882] hover:after:bg-[#ffbe18] active text-[#fff]"
                    aria-current="page">
                    {{ pageTitle }}
                  </li>
                </ol>
              </nav>

              <div v-if="isUserDetail"
                class="mt-9 px-14 py-4 bg-[#EBB917] inline-block text-black font-Barlow font-bold rounded-md">
                NGÀY THAM GIA: {{ createdDate }}
              </div>
            </div>
          </div>
          <div
            class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-5/12 lg:basis-5/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px] block md:hidden sm:hidden xsm:hidden">
            <div
              class="breadcrumb__img absolute -translate-y-2/4 right-[30px] top-2/4 group xl:right-[60px] xl:top-[60%] lg:right-[60px] lg:top-[60%]">
              <img
                class="max-h-[412px] max-w-[402px] group-hover:animate-[breadcrumbShake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both] lg:max-h-[260px] lg:max-w-[255px] xl:max-h-80 xl:max-w-[310px]"
                :src="thumbImage" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery';

import breadcrumbBgImage03 from '@/assets/img/bg/breadcrumb_bg03.jpg';

export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    thumbImage: {
      required: true,
    },
    backgroundImage: {
      default: breadcrumbBgImage03,
    },
    isUserDetail: {
      type: Boolean,
      required: true,
    },
    createdDate: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleRedirectHomePage() {
      this.$store
        .dispatch('app/setActiveMenuItem', '1');
      this.$router.push({ path: '/' });
    }
  }
};
</script>

<style scoped>
.text-show-title {
  text-shadow: -1px 5px 0px rgba(69, 248, 130, 0.66);
}
</style>

<template>
  <!-- project-area done -->
  <section
    class="project-area project-bg pt-[120px] pb-[140px] bg-[#09090b] overflow-hidden sm:pt-[100px] xsm:pt-[100px]">
    <div class="container custom-container">
      <div
        class="project__wrapper flex relative mt-0 mb-[75px] mx-0 md:flex-col md:gap-y-[50px] sm:m-[0_0_50px] sm:flex-col sm:gap-y-[50px] xsm:m-[0_0_50px] xsm:flex-col xsm:gap-y-[50px]">
        <div
          class="section__title text-left w-[420px] flex-[0_0_auto] mt-[70px] mb-0 mx-0 relative after:hidden md:w-full md:flex-[0_0_auto] md:text-center md:m-0 sm:w-full sm:flex-[0_0_auto] sm:text-center sm:m-0 xsm:w-full xsm:flex-[0_0_auto] xsm:text-center xsm:m-0">
          <h3
            class="title mt-0 mb-2.5 mx-0 text-[45px] font-extrabold tracking-[1px] sm:text-[35px] sm:leading-[1.1] xsm:text-[35px] xsm:leading-[1.1]">
            PROJECTS MYKD
          </h3>

          <show-text-animation :text="'OUR LATEST GALLERY'" />
        </div>
        <div
          class="swiper-container project-active mr-[-180px] ml-40 my-0 xl:m-[0_-230px_0_100px] lg:m-[0_-230px_0_80px] md:m-[0_-230px_0_110px] sm:m-0 xsm:m-0">
          <div class="swiper-wrapper">
            <div v-for="(image, index) in images" class="swiper-slide">
              <div class="project__item">
                <a :key="index" :href="image" class="image-link">
                  <img :src="image" alt="Image" @click="openPopup(index)" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slider-button-prev absolute -translate-y-2/4 rotate-180 flex items-center leading-none text-[38px] tracking-[-7px] left-[30.5%] top-2/4 xl:left-[34.5%] lg:left-[43.5%] md:left-0 md:top-[calc(50%_+_60px)]">
          <i
            class="flaticon-right-arrow transition-all duration-[0.3s] ease-out delay-[0s] text-[#fff] animate-[shapeBlinker_0.6s_linear_infinite]"></i>
          <i
            class="flaticon-right-arrow transition-all duration-[0.3s] ease-out text-[#fff] animate-[shapeBlinker_0.6s_linear_infinite] last:text-[#45f882] !delay-[0.2s]"></i>
        </div>
      </div>
    </div>
    <!-- scrollbar -->
    <div
      class="swiper-scrollbar block w-full h-0.5 relative mx-0 my-[11px] rounded-none before:content-[''] before:absolute before:w-full before:h-full before:pointer-events-none before:opacity-[0.65] before:left-0 before:top-0 bg-transparent before:bg-[#45f882]">
    </div>
  </section>
  <!-- project-area-end -->
</template>

<script>
import $ from 'jquery';
import ShowTextAnimation from '@/components/ShowTextAnimation/index.vue';

import Project_01 from '@/assets/img/gallery/project_01.jpg';
import Project_02 from '@/assets/img/gallery/project_02.jpg';
import Project_03 from '@/assets/img/gallery/project_03.jpg';
import Project_04 from '@/assets/img/gallery/project_04.jpg';
import Project_05 from '@/assets/img/gallery/project_05.jpg';
import Project_06 from '@/assets/img/gallery/project_06.jpg';
import Project_07 from '@/assets/img/gallery/project_07.jpg';
import Project_08 from '@/assets/img/gallery/project_08.jpg';

export default {
  components: {
    ShowTextAnimation,
  },
  data() {
    return {
      images: [
        Project_01,
        Project_02,
        Project_03,
        Project_04,
        Project_05,
        Project_06,
        Project_07,
        Project_08,
      ],
    };
  },

  methods: {
    openPopup(index) {
      // Initialize Magnific Popup
      $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: false,
          duration: 300, // don't foget to change the duration also in CSS
          opener: function (element) {
            return element.find('img');
          },
        },
      });

      // Open the popup for the clicked image
      $('.image-link').magnificPopup('open', index);
    },
  },
  beforeDestroy() {
    $.magnificPopup.close();
    $.magnificPopup.destroy();
  },
};
</script>

<style lang="scss" scoped></style>

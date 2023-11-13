<template>
  <!-- brand-area done -->
  <section class="brand-area bg-[#050506] pt-[110px] pb-[120px] px-0">
    <div class="container">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="w-full basis-full">
          <div class="brand__title text-center mt-0 mb-[70px] mx-0">
            <h2
              class="title text-[45px] font-medium leading-none tracking-[3px] m-0 sm:text-4xl sm:tracking-[2px] xsm:text-4xl xsm:tracking-[2px]"
            >
              they trust us
            </h2>
          </div>
        </div>
      </div>
      <vue-slick-carousel
        v-if="images.length > 0"
        :autoplay="true"
        :dots="false"
        :infinite="true"
        :speed="500"
        :slidesToShow="6"
        :slidesToScroll="1"
        :arrows="false"
        :responsive="responsiveCa"
      >
        <div
          class="brand-active px-[15px]"
          v-for="(image, index) in images"
          :key="index"
        >
          <div
            :class="
              hoverActive === null
                ? 'col hover-active'
                : hoverActive === index
                ? 'col hover-active'
                : 'col hover-not-active'
            "
            @mouseenter="fadeToEnter(index)"
            @mouseleave="fadeToLeave(index)"
          >
            <div class="brand__item">
              <a
                href="#"
                class="brand__link flex items-center justify-center h-[57px] sm:h-[35px] xsm:h-[35px]"
              >
                <img :src="image" alt="Carousel Image" class="max-h-full" />
              </a>
            </div>
          </div>
        </div>
      </vue-slick-carousel>
    </div>
  </section>
  <!-- brand-area-end -->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

import Brand_Logo01 from '@/assets/img/brand/brand_logo01.png';
import Brand_Logo02 from '@/assets/img/brand/brand_logo02.png';
import Brand_Logo03 from '@/assets/img/brand/brand_logo03.png';
import Brand01 from '@/assets/img/brand/brand01.png';
import Brand02 from '@/assets/img/brand/brand02.png';
import Brand03 from '@/assets/img/brand/brand03.png';
import Brand04 from '@/assets/img/brand/brand04.png';
import Brand05 from '@/assets/img/brand/brand05.png';
import Brand06 from '@/assets/img/brand/brand06.png';
import Brand07 from '@/assets/img/brand/brand07.png';

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        Brand_Logo01,
        Brand_Logo02,
        Brand_Logo03,
        Brand01,
        Brand02,
        Brand03,
        Brand04,
        Brand05,
        Brand06,
        Brand07,
      ],
      responsiveCa: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
      hoverActive: null,
    };
  },
  methods: {
    fadeToEnter(index, opacity) {
      this.hoverActive = index;
    },
    fadeToLeave(index, opacity) {
      this.hoverActive = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.hover-active {
  opacity: 1;
  animation: hoverActive 1s forwards;

  @keyframes hoverActive {
    0% {
      opacity: 0.3;
    }

    100% {
      opacity: 1;
    }
  }
}

.hover-not-active {
  animation: hoverNotActive 1s forwards;

  @keyframes hoverNotActive {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.3;
    }
  }
}
</style>

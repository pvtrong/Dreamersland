<template>
  <!-- brand-area done -->
  <section class="brand-area  bg-[#050506] pt-[110px] pb-[120px] px-0">
    <div class="container">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="w-full basis-full">
          <div class="brand__title text-center  mt-0 mb-[70px] mx-0">
            <h2
              class="title text-[45px] font-medium leading-none tracking-[3px] m-0 sm:text-4xl sm:tracking-[2px] xsm:text-4xl xsm:tracking-[2px]">
              they trust us</h2>
          </div>
        </div>
      </div>
      <vue-slick-carousel v-if="images.length > 0" :autoplay="true" :dots="false" :infinite="true" :speed="500"
        :slidesToShow="6" :slidesToScroll="1" :arrows="false" :responsive="responsiveCa">
        <div class="brand-active px-[15px]" v-for="(image, index) in images" :key="index">
          <div
            :class="hoverActive === null ? 'col hover-active' : hoverActive === index ? 'col hover-active' : 'col hover-not-active'"
            @mouseenter="fadeToEnter(index)" @mouseleave="fadeToLeave(index)">
            <div class="brand__item">
              <a href="#" class="brand__link flex items-center justify-center h-[57px] sm:h-[35px] xsm:h-[35px]">
                <img :src="image" alt="Carousel Image" class=" max-h-full">
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

export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        'https://i.ibb.co/tBvpXTn/brand01.png',
        'https://i.ibb.co/3MV9z3g/brand02.png',
        'https://i.ibb.co/18MXCCh/brand-logo01.png',
        'https://i.ibb.co/6Rfnxs7/brand04.png',
        'https://i.ibb.co/DCtGfP5/brand05.png',
        'https://i.ibb.co/7ytPDBW/brand-logo03.png',
        'https://i.ibb.co/9hDgFCc/brand07.png',
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
      hoverActive: null
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
}
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

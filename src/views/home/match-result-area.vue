<template>
  <!-- match-result-area done -->
  <section class="match__result-area relative z-[1] pt-[95px] pb-[120px] px-0">
    <div class="match__result-bg absolute w-full h-[calc(100%_+_70px)] bg-[top_center] bg-cover z-[-1] left-0 bottom-0">
    </div>
    <div class="container">
      <div class="flex flex-wrap mx-[-15px] justify-center">
        <div
          class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-7/12 lg:basis-7/12 md:w-10/12 md:basis-10/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
          <div
            class="text-container section__title text-center mb-[55px] relative after:content-[''] after:block after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto">
            <show-text-animation :text="'LATEST RESULTS FOR'" />
            <h3
              class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] sm:leading-[1.1] xsm:text-[35px] xsm:leading-[1.1]">
              EXPERIENCE JUST FOR
            </h3>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px]">
        <div class="w-full basis-full relative px-[15px]">
          <h4
            class="match__winner-title text-center text-[24px] font-extrabold tracking-[2px] text-[#45f882] mt-0 mb-5 mx-0 sm:m-[0_0_30px] xsm:m-[0_0_30px]">
            Premier league
          </h4>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px] match__result-wrapper justify-center">
        <div
          class="w-5/12 basis-5/12 xl:w-5/12 xl:basis-5/12 lg:w-6/12 lg:basis-6/12 md:w-6/12 md:basis-6/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]">
          <div
            class="match__winner-wrap flex justify-end items-center md:justify-start md:items-end md:flex-col-reverse md:gap-y-[13px] md:mr-2.5 sm:items-start sm:max-w-[280px] sm:m-[0_auto] sm:justify-start sm:flex-col-reverse sm:gap-y-[13px] xsm:items-start xsm:max-w-[280px] xsm:m-[0_auto] xsm:justify-start xsm:flex-col-reverse xsm:gap-y-[13px]">
            <div class="match__winner-info grow text-right sm:text-left xsm:text-left">
              <h4 class="name text-[24px] leading-none font-extrabold tracking-[2px] mt-0 mb-1.5 mx-0">
                black hunt
              </h4>
              <span class="price-amount block text-[14px] font-semibold text-[#45f882] tracking-[0.5px] font-Barlow">$500
                000</span>
            </div>
            <div class="match__winner-img tg-svg flex items-center relative z-[1] ml-[22px] sm:ml-0 xsm:ml-0">
              <div
                class="team-logo-img w-28 h-28 border-[#45f882] flex justify-center items-center flex-[0_0_auto] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.1)] rounded-[50%] border-[3px] border-solid bg-[#171717]">
                <a href="team-details.html"><img class="max-w-[70px]" src="@/assets/img/others/win01.png" alt="img" /></a>
              </div>
              <div class="svg-icon absolute -translate-y-2/4 h-[75px] w-[135px] fill-[#45f882] z-[-1] right-0 top-2/4"
                id="svg-3" data-svg-icon="assets/img/icons/win_shape.svg"></div>
              <h3
                class="match__winner-place text-3xl font-extrabold text-[#20202a] tracking-[2px] uppercase leading-none m-0 pl-[15px] pr-[35px] py-2.5">
                win
              </h3>
            </div>
          </div>
        </div>
        <div
          class="w-5/12 basis-5/12 xl:w-5/12 xl:basis-5/12 lg:w-6/12 lg:basis-6/12 md:w-6/12 md:basis-6/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]">
          <div
            class="match__winner-wrap flex justify-end items-center md:!flex-col-reverse md:items-start md:ml-2.5 md:mr-0 md:gap-y-[13px] sm:m-[0_auto_0] sm:items-end sm:!flex-col-reverse sm:max-w-[280px] sm:justify-start sm:gap-y-[13px] xsm:m-[20px_auto_0] xsm:items-end xsm:!flex-col-reverse xsm:max-w-[280px] xsm:justify-start xsm:gap-y-[13px]">
            <div class="match__winner-info grow text-right sm:!text-right xsm:!text-right">
              <h4 class="name text-[24px] leading-none font-extrabold tracking-[2px] mt-0 mb-1.5 mx-0">
                sky Hunter
              </h4>
              <span class="price-amount block text-[14px] font-semibold text-[#45f882] tracking-[0.5px] font-Barlow">$300
                000</span>
            </div>
            <div
              class="match__winner-img tg-svg flex items-center relative z-[1] ml-[22px] sm:!m-0 sm:flex-row-reverse xsm:!m-0 xsm:flex-row-reverse">
              <div
                class="team-logo-img w-28 h-28 border-[#45f882] flex justify-center items-center flex-[0_0_auto] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.1)] rounded-[50%] border-[3px] border-solid bg-[#171717]">
                <a href="team-details.html"><img class="max-w-[70px]" src="@/assets/img/others/win02.png" alt="img" /></a>
              </div>
              <div
                class="svg-icon absolute -translate-y-2/4 h-[75px] w-[135px] fill-[#45f882] z-[-1] right-0 top-2/4 sm:right-auto sm:left-0 xsm:right-auto xsm:left-0"
                id="svg-4" data-svg-icon="@/assets/img/icons/win_shape.svg"></div>
              <h3
                class="match__winner-place text-3xl font-extrabold text-[#20202a] tracking-[2px] uppercase leading-none m-0 pl-[15px] pr-[35px] py-2.5 sm:p-[10px_15px_10px_35px] xsm:p-[10px_15px_10px_35px]">
                2nd
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px]">
        <div class="w-full basis-full relative px-[15px]">
          <div class="grand__final text-center mt-[30px] mb-0 mx-0">
            <h6 class="grand__final-date text-[14px] font-medium text-neutral-200 tracking-[1px] mt-0 mb-[3px] mx-0">
              December 19, 2021 | 9:50 am
            </h6>
            <span class="grand__final-place block uppercase font-semibold text-[#45f882] tracking-[1px] font-Barlow">grand
              dubai</span>
            <div class="grand__final-button mt-8 mb-0 mx-0">
              <a href="contact.html" class="tg-btn-3 tg-svg mx-auto text-white hover:text-[#44F17F]">
                <div class="svg-icon" id="svg-5"></div>
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- match-result-area-end -->
</template>

<script>
import ShowTextAnimation from '@/components/ShowTextAnimation/index.vue';

export default {
  components: {
    ShowTextAnimation,
  },
};
</script>

<style lang="scss" scoped>
.match__result-bg {
  background-image: url('../../assets/img/bg/result_bg.png');
}

.svg-icon {
  background-image: url('../../assets/img/icons/shape.svg');
}

.section__title {
  &::after {
    background-image: url('../../assets/img/bg/title_shape.svg');
  }
}
</style>

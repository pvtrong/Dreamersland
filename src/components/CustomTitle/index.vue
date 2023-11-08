<template>
  <div
    class="section__title text-center mb-[60px] relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto"
  >
    <span
      class="sub-title tg__animate-text block uppercase text-[16px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0 sm:m-[0_0_10px] xsm:m-[0_0_10px]"
      >Dreamers land</span
    >
    <h3
      class="title text-[45px] sm:text-[35px] xsm:text-[35px] leading-[0.8] mt-0 mb-[21px] mx-0 font-berlin drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] wow fadeInUp sm:drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] sm:mt-0 sm:mb-[21px] sm:mx-0 xsm:text-[14vw] xsm:drop-shadow-[-1px_5px_0px_rgba(69,248,130,0.66)] xsm:mt-0 xsm:mb-[21px] xsm:mx-0"
    >
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="section__title text-center mb-[60px] relative after:content-[''] after:block after:bg-[url(./assets/img/bg/title\_shape.svg)] after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto"
  >
    <span
      class="sub-title tg__animate-text block uppercase text-[16px] tracking-[2px] font-semibold text-[#45f882] leading-none mt-0 mb-[7px] mx-0 sm:m-[0_0_10px] xsm:m-[0_0_10px]"
      >Dreamers land</span
    >
    <h3
      class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] xsm:text-[35px]"
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

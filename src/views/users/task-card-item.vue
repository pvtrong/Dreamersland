<template>
  <div
    class="mt-24 w-4/12 basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-5/12 lg:basis-5/12 md:w-6/12 md:basis-6/12 sm:w-9/12 sm:basis-9/12 xsm:w-full xsm:basis-full relative px-[15px]">
    <div
      :class="isActive
        ? `before:bg-[radial-gradient(circle,#ffbe18_0%,transparent_100%)] tournament__box-wrap relative transition-[0.4s] duration-500 z-[1] mt-0 mb-[30px] mx-0 pt-[25px] pb-[10px] px-[30px] rounded-[0_0_17px_17px] hover:translate-y-[-7px] before:content-[''] before:absolute before:-translate-x-2/4 before:w-[90px] before:h-[90px] before:blur-[50px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-2/4 before:top-[20%] md:border md:pt-[25px] md:pb-10 md:px-[30px] md:rounded-[17px] md:border-solid md:border-[#212d38] md:bg-[#19222b] sm:border sm:pt-[25px] sm:pb-10 sm:px-[30px] sm:rounded-[17px] sm:border-solid sm:border-[#212d38] sm:bg-[#19222b] xsm:border xsm:pt-[25px] xsm:pb-10 xsm:px-[30px] xsm:rounded-[17px] xsm:border-solid xsm:border-[#212d38] xsm:bg-[#19222b] active`
        : `before:bg-[radial-gradient(circle,#45F882_0%,transparent_100%)] tournament__box-wrap relative transition-[0.4s] duration-500 z-[1] mt-0 mb-[30px] mx-0 pt-[25px] pb-[10px] px-[30px] rounded-[0_0_17px_17px] hover:translate-y-[-7px] before:content-[''] before:absolute before:-translate-x-2/4 before:w-[90px] before:h-[90px] before:blur-[50px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-2/4 before:top-[20%] md:border md:pt-[25px] md:pb-10 md:px-[30px] md:rounded-[17px] md:border-solid md:border-[#212d38] md:bg-[#19222b] sm:border sm:pt-[25px] sm:pb-10 sm:px-[30px] sm:rounded-[17px] sm:border-solid sm:border-[#212d38] sm:bg-[#19222b] xsm:border xsm:pt-[25px] xsm:pb-10 xsm:px-[30px] xsm:rounded-[17px] xsm:border-solid xsm:border-[#212d38] xsm:bg-[#19222b] active`">
      <div class="absolute z-10 -right-2 top-4 bg-[#ecb917] text-white rounded-lg py-1 pr-4 pl-3">
        {{ status }}
      </div>
      <svg
        class="h-full main-bg absolute w-full z-[-2] left-0 rounded-[0_0_17px_17px] top-0 block md:hidden sm:hidden xsm:hidden"
        x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 357 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M2.00021 63H103C103 63 114.994 62.778 128 50C141.006 37.222 168.042 13.916 176 10C183.958 6.084 193 1.9 213 2C233 2.1 345 1 345 1C347.917 1.66957 350.51 3.33285 352.334 5.70471C354.159 8.07658 355.101 11.0093 355 14C355.093 25.1 356 515 356 515C356 515 357.368 529.61 343 530C328.632 530.39 15.0002 532 15.0002 532C15.0002 532 0.937211 535.85 1.00021 522C1.06321 508.15 2.00021 63 2.00021 63Z"
          fill="#19222B" stroke="#4C4C4C" stroke-width="0.25" />
      </svg>
      <svg
        :class="isActive ? 'text-[#ffbe18] price-bg absolute w-[166px] h-14 z-[-1] pointer-events-none left-0 top-0' : 'text-[#45F882] price-bg absolute w-[166px] h-14 z-[-1] pointer-events-none left-0 top-0'"
        viewBox="0 0 166 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z"
          fill="currentcolor" />
      </svg>
      <div
        class="tournament__box-price absolute flex items-center gap-[7px] font-extrabold text-[#0f161b] text-[20px] leading-none tracking-[1px] z-[2] p-[17px] left-0 top-0 font-Barlow">
        <i class="fas fa-trophy text-[18px] tracking-[0]"></i>
        <span>{{ bloodCount }}</span>
      </div>
      <div class="tournament__box-countdown mt-0 mb-20 mx-0">
        <div class="coming-time flex justify-end gap-[15px] leading-none text-center" data-countdown="2023/5/16"></div>
      </div>
      <div class="h-32 tournament__box-caption text-center mt-10 mb-7 mx-0">
        <span
          class="sub block text-[16px] leading-none text-[#fff] font-extrabold tracking-[1px] mt-0 mb-[5px] mx-0 font-Barlow">NHIỆM
          VỤ</span>
        <h4
          :class="isActive ? 'text-[#ffbe18]' : 'text-[#45F882]' + ' title text-[30px] font-extrabold  tracking-[1px] m-0'">
          {{ taskName }}
        </h4>
      </div>
      <div class="h-[200px] w-[200px] m-auto">
        <img class="w-full h-full" :src="image" alt="" />
      </div>
      <div
        class="tournament__box-prize text-center uppercase font-bold tracking-[1px] flex items-center justify-center gap-[0_13px] border rounded-[10px] border-solid border-[#1e2933] bg-[#10181f] font-Barlow py-2 mt-8">
        <span class="flex items-center">
          SỐ ĐIỂM / NGÀY:
          <span class="text-4xl inline-block ml-2 text-[#3CF777]">
            {{ point }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bloodCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: '',
    },
    taskName: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    point: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>

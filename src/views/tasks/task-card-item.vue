<template>
  <div class="card-item-container mt-6 md:basis-[46%] sm:basis-[80%] xsm:w-full xsm:basis-full relative">
    <div :class="isActive
      ? `task-card-item-status before:bg-[radial-gradient(circle,#ffbe18_0%,transparent_100%)] tournament__box-wrap relative transition-[0.4s] duration-500 z-[1] mt-0 mx-0 pt-[25px] pb-[10px] px-[30px] rounded-[0_0_17px_17px] hover:translate-y-[-7px] before:content-[''] before:absolute before:-translate-x-2/4 before:w-[90px] before:h-[90px] before:blur-[50px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-2/4 before:top-[20%] md:border md:pt-[25px] md:pb-10 md:px-[30px] md:rounded-[17px] md:border-solid md:border-[#212d38] md:bg-[#19222b] sm:border sm:pt-[25px] sm:pb-10 sm:px-[30px] sm:rounded-[17px] sm:border-solid sm:border-[#212d38] sm:bg-[#19222b] xsm:border xsm:pt-[25px] xsm:pb-10 xsm:px-[30px] xsm:rounded-[17px] xsm:border-solid xsm:border-[#212d38] xsm:bg-[#19222b] active`
      : `task-card-item-status before:bg-[radial-gradient(circle,#45F882_0%,transparent_100%)] tournament__box-wrap relative transition-[0.4s] duration-500 z-[1] mt-0 mx-0 pt-[25px] pb-[10px] px-[30px] rounded-[0_0_17px_17px] hover:translate-y-[-7px] before:content-[''] before:absolute before:-translate-x-2/4 before:w-[90px] before:h-[90px] before:blur-[50px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-2/4 before:top-[20%] md:border md:pt-[25px] md:pb-10 md:px-[30px] md:rounded-[17px] md:border-solid md:border-[#212d38] md:bg-[#19222b] sm:border sm:pt-[25px] sm:pb-10 sm:px-[30px] sm:rounded-[17px] sm:border-solid sm:border-[#212d38] sm:bg-[#19222b] xsm:border xsm:pt-[25px] xsm:pb-10 xsm:px-[30px] xsm:rounded-[17px] xsm:border-solid xsm:border-[#212d38] xsm:bg-[#19222b] active`
      ">
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
      <svg :class="isActive
        ? 'text-[#ffbe18] price-bg absolute w-[136px] xl:w-[130px] h-14 z-[-1] pointer-events-none left-0 top-0'
        : 'text-[#45F882] price-bg absolute w-[136px] xl:w-[130px] h-14 z-[-1] pointer-events-none left-0 top-0'
        " viewBox="0 0 166 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0.00792892 55V11C0.00792892 11 -0.729072 0.988 12.0079 1C24.7449 1.012 160.008 0 160.008 0C160.008 0 172.491 1.863 161.008 10C148.995 18.512 115.008 48 115.008 48C115.008 48 110.021 55.238 90.0079 55C69.9949 54.762 0.00792892 55 0.00792892 55Z"
          fill="currentcolor" />
      </svg>
      <div
        class="tournament__box-price absolute flex items-center gap-[7px] font-extrabold text-[#0f161b] text-[20px] leading-none tracking-[1px] z-[2] p-[17px] left-0 top-0 font-Barlow">
        <!-- <i class="text-[18px] tracking-[0] diamond-icon"></i> -->
        <img src="@/assets/img/icons/diamond_icon.svg" class="text-[18px] tracking-[0]" alt="diamond" />
        <span>{{ bloodCount }}</span>
      </div>
      <div class="h-20 tournament__box-caption text-center mt-12 mx-0">
        <span class="sub block text-[14px] leading-none text-[#fff] tracking-[1px] mt-0 mb-[5px] mx-0 font-Barlow">
          NHIỆM VỤ
        </span>
        <h4 :class="{
          'title text-2xl tracking-[1px] m-0': true,
          'text-[#ffbe18]': isActive,
          'text-[#45F882]': !isActive,
        }">
          {{ taskName }}
        </h4>
      </div>
      <div class="h-[140px] w-[140px] m-auto">
        <img class="w-full h-full object-cover" :src="image" alt="" />
      </div>
      <div
        class="tournament__box-prize text-center uppercase font-bold tracking-[1px] flex items-center justify-center gap-[0_13px] border rounded-[10px] border-solid border-[#1e2933] bg-[#10181f] font-Barlow py-2 mt-4 mb-2">
        <span class="flex items-center">
          SỐ ĐIỂM / NGÀY:
          <span class="text-4xl inline-block ml-2 text-[#3CF777]">
            {{ point }}
          </span>
        </span>
      </div>

      <div class="text-white h-28">
        <strong>Điều kiện mở khoá:</strong>

        <p>
          {{ openCondition }}
        </p>
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
    openCondition: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item-container {
  @media only screen and (min-width: 768px) {
    flex-basis: calc(50% - 12px);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199.98px) {
    flex-basis: calc(100% / 3 - 10px);

    &:nth-child(n + 4) {
      margin-top: 0;
    }
  }

  @media only screen and (min-width: 1200px) {
    flex-basis: calc(25% - 15px);

    &:nth-child(n + 5) {
      margin-top: 0;
    }
  }
}

.task-card-item-status {
  &::before {
    filter: blur(50px) !important;
  }
}

.sub,
.title {
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
}

.diamond-icon {
  background-image: url('../../assets/img/icons/diamond_icon.svg');
}
</style>

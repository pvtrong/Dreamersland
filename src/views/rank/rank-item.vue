<template>
  <div
    class="tournament__list-item relative z-[1] mt-0 md:flex-1 sm:flex-1 xsm:flex-1 mb-[25px] mx-0 last:m-0 before:content-[''] before:absolute before:w-[200px] before:h-[60px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-[13%] before:top-[19px] group before:bg-[#45f882] hover:before:bg-[#ffbe18] md:border md:m-0 md:p-[1rem] md:rounded-[10px] md:border-solid md:border-[#212d38] md:before:hidden md:bg-[#19222b] sm:border sm:m-0 sm:p-[1rem] sm:rounded-[10px] sm:border-solid sm:border-[#212d38] sm:before:hidden sm:bg-[#19222b] xsm:border xsm:m-0 xsm:p-[1rem] xsm:rounded-[10px] xsm:border-solid xsm:border-[#212d38] xsm:before:hidden xsm:bg-[#19222b] wow fadeInUp"
    data-wow-delay=".2s"
  >
    <svg
      class="block w-full lg:h-auto md:hidden sm:hidden xsm:hidden"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="195"
      viewBox="0 0 1116.562 163.37"
    >
      <path
        class="background-path fill-[#19222b] stroke-[#4c4c4c] stroke-[0.25px]"
        d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z"
        transform="translate(-401.563 -1749.875)"
      />
    </svg>
    <div
      class="tournament__list-content absolute -translate-y-2/4 flex items-center md:flex-col md:flex-1 left-[60px] right-[50px] top-2/4 lg:left-[50px] lg:right-[45px] md:relative md:translate-y-0 md:flex-wrap md:gap-[40px_0] md:top-0 md:inset-x-0 sm:relative sm:translate-y-0 sm:flex-wrap sm:gap-[40px_0] sm:top-0 sm:inset-x-0 xsm:relative xsm:translate-y-0 xsm:flex-wrap xsm:gap-[40px_0] xsm:top-0 xsm:inset-x-0"
    >
      <div class="flex items-center justify-between md:w-[60%]" style="flex: 1">
        <div @click="handleUserDetail()">
          <img
            class="w-[134px] rounded-[50%] h-[134px] lg:max-w-[80px] lg:max-h-[75px] md:max-w-[80px] md:max-h-[75px] sm:max-w-[80px] sm:max-h-[75px] xsm:max-w-[80px] xsm:max-h-[75px]"
            :src="rank.user.avatar_url || thumbImage"
            alt="thumb"
          />
        </div>
        <div class="relative z-[1] pl-[1.5rem] pr-[1.5rem]">
          <h5
            class="status block uppercase text-[24px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
          >
            0{{ index }}
          </h5>
        </div>
        <div class="w-[205px] relative z-[1]">
          <h5
            class="text-[21px] xl:text-[18px] md:text-[18px] sm:text-[18px] xsm:text-[18px] font-bold mt-0 mb-[1.125rem] mx-0 leading-[25.2px]"
          >
            {{ rank.user.first_name }} {{ rank.user.last_name }}
          </h5>
          <h5
            class="status block uppercase text-[16px] leading-[19.2px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
          >
            {{ rank.user.nickname }}
          </h5>
        </div>
      </div>
      <div
        class="flex items-center justify-between xsm:flex-col xsm:gap-[20px]"
        style="flex: 2"
      >
        <div class="flex items-center justify-between xsm:flex-col xsm:w-full xsm:gap-[20px]">
          <div class="flex items-center justify-between xsm:w-full">
            <div
              class="flex-1 2xl:w-[169px] xxl:w-[125px] xl:w-[125px] lg:w-[110px] xsm:w-[50%] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-['']"
            >
              <h5
                class="text-[#A0A4B1] text-[16px] font-bold mt-0 mb-[1.125rem] mx-0"
              >
                Hạng
              </h5>
              <h5
                class="status block uppercase text-[16px] leading-[19.2px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
              >
                {{ rank.user.rank.rank_name || 'Không có hạng' }}
              </h5>
            </div>
            <div
              class="flex-1 2xl:w-[169px] xxl:w-[125px] xl:w-[125px] lg:w-[110px] xsm:w-[50%] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:h-[26px] before:w-px before:z-[1] before:left-px before:bg-[#CBCBCB]"
            >
              <h5
                class="text-[#A0A4B1] text-[16px] font-bold mt-0 mb-[1.125rem] mx-0"
              >
                Số điểm
              </h5>
              <h5
                class="status block uppercase text-[16px] leading-[19.2px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
              >
                {{ rank.point || 0 }}
              </h5>
            </div>
          </div>
          <div class="flex items-center justify-between xsm:w-full">
            <div
              class="flex-1 2xl:w-[169px] xxl:w-[125px] xl:w-[125px] lg:w-[110px] xsm:w-[50%] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] xsm:before:hidden before:absolute before:h-[26px] before:w-px before:z-[1] before:left-px before:bg-[#CBCBCB]"
            >
              <h5
                class="text-[#A0A4B1] text-[16px] font-bold mt-0 mb-[1.125rem] mx-0"
              >
                Bonus
              </h5>
              <h5
                class="status block uppercase text-[16px] leading-[19.2px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
              >
                {{ rank.bonus || 0 }}
              </h5>
            </div>
            <div
              class="flex-1 2xl:w-[169px] xxl:w-[125px] xl:w-[125px] lg:w-[110px] xsm:w-[50%] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:h-[26px] before:w-px before:z-[1] before:left-px before:bg-[#CBCBCB]"
            >
              <h5
                class="text-[#A0A4B1] text-[16px] font-bold mt-0 mb-[1.125rem] mx-0"
              >
                Tổng Điểm
              </h5>
              <h5
                class="status block uppercase text-[16px] leading-[19.2px] font-bold tracking-[1px] text-[#45f882] font-semibold tracking-[1px] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] font-Barlow group-hover:text-[#ffbe18]"
              >
                {{ rank.totalPoint || 0 }}
              </h5>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <img
            width="60"
            class="h-[66px] w-[66px] group-hover:animate-[breadcrumbShake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both] lg:max-h-[260px] lg:max-w-[255px] xl:max-h-80 xl:max-w-[310px]"
            :src="rank.user.rank.image_url"
            alt="img"
          />
        </div>
      </div>
      <!-- </span> -->
    </div>
  </div>
</template>

<script>
import team02 from '@/assets/img/team/team02.png';
import rank1 from '@/assets/img/rank/rank_1.png';

export default {
  props: {
    rank: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      thumbImage: team02,
      rank1: rank1,
    };
  },
  methods: {
    handleUserDetail() {
      this.$router.push({
        path: `/rank/${this.rank.user.id}`,
      });
    },
  },
};
</script>

<style scoped>
.tournament-item {
  border: 1px solid #2e0d0d;
  padding: 15px;
  margin: 15px;
}

.tournament-item-title {
  font-weight: bold;
}

/* Add more styling as needed */
</style>

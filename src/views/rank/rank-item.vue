<template>
  <div
    class="tournament__list-item relative z-[1] mt-0 mb-[25px] mx-0 last:m-0 before:content-[''] before:absolute before:w-[200px] before:h-[60px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:z-[-1] before:left-[13%] before:top-[19px] group before:bg-[#45f882] hover:before:bg-[#ffbe18] md:border md:m-0 md:p-[30px] md:rounded-[10px] md:border-solid md:border-[#212d38] md:before:hidden md:bg-[#19222b] sm:border sm:m-0 sm:p-[30px] sm:rounded-[10px] sm:border-solid sm:border-[#212d38] sm:before:hidden sm:bg-[#19222b] xsm:border xsm:m-0 xsm:p-[30px] xsm:rounded-[10px] xsm:border-solid xsm:border-[#212d38] xsm:before:hidden xsm:bg-[#19222b] wow fadeInUp"
    data-wow-delay=".2s"
  >
    <svg
      class="block w-full lg:h-auto md:hidden sm:hidden xsm:hidden"
      xmlns="http://www.w3.org/2000/svg"
      width="1116.562"
      height="163.37"
      viewBox="0 0 1116.562 163.37"
    >
      <path
        class="background-path fill-[#19222b] stroke-[#4c4c4c] stroke-[0.25px]"
        d="M708,1784l28-27s4.11-5.76,18-6,702-1,702-1a37.989,37.989,0,0,1,16,9c7.47,7.08,37,33,37,33s9.02,9.47,9,18,0,42,0,42-0.19,9.43-11,19-32,30-32,30-5.53,11.76-21,12-985,0-985,0a42.511,42.511,0,0,1-26-13c-11.433-12.14-34-32-34-32s-6.29-5.01-7-17,0-43,0-43-1-5.42,12-18,34-32,34-32,10.4-8.28,19-8,76,0,76,0a44.661,44.661,0,0,1,21,11c9.268,8.95,22,22,22,22Z"
        transform="translate(-401.563 -1749.875)"
      />
    </svg>
    <div
      class="tournament__list-content absolute -translate-y-2/4 flex items-center left-[60px] right-[50px] top-2/4 lg:left-[50px] lg:right-[45px] md:relative md:translate-y-0 md:flex-wrap md:gap-[40px_0] md:top-0 md:inset-x-0 sm:relative sm:translate-y-0 sm:flex-wrap sm:gap-[40px_0] sm:top-0 sm:inset-x-0 xsm:relative xsm:translate-y-0 xsm:flex-wrap xsm:gap-[40px_0] xsm:top-0 xsm:inset-x-0"
    >
      <div
        class="tournament__list-thumb w-[150px] flex-[0_0_auto] lg:w-[115px] md:w-6/12 sm:w-6/12 xsm:w-6/12"
      >
        <div @click="handleUserDetail()">
          <img
            class="max-w-[89px] max-h-[91px] lg:max-w-[80px] lg:max-h-[75px] md:max-w-[80px] md:max-h-[75px] sm:max-w-[80px] sm:max-h-[75px] xsm:max-w-[80px] xsm:max-h-[75px]"
            :src="thumbImage"
            alt="thumb"
          />
        </div>
      </div>
      <div
        class="tournament__list-name flex-[0_0_auto] relative z-[1] pl-[0.5rem] pr-[0.5rem]"
      >
        <h5
          class="status block uppercase text-[24px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          0{{ index }}
        </h5>
      </div>
      <div
        class="tournament__list-name w-[205px] flex-[0_0_auto] relative z-[1] pl-[35px]"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">
          {{ rank.user.first_name }} {{ rank.user.last_name }}
        </h5>
        <h5
          class="status block uppercase text-[16px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          {{ rank.user.rank.rank_name }}
        </h5>
      </div>
      <!-- <span v-for="(character, key) in listCharacters" :key="key"> -->
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Hạng</h5>
        <h5
          class="status block uppercase text-[16px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          {{ rank.user.rank.rank_name }}
        </h5>
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Số điểm</h5>
        <h5
          class="status block uppercase text-[16px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          {{ rank.point }}
        </h5>
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Bonus</h5>
        <h5
          class="status block uppercase text-[16px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          80
        </h5>
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative text-center z-[1] pl-[1.5rem] pr-[1.5rem] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Tổng Điểm</h5>
        <h5
          class="status block uppercase text-[16px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s]"
        >
          {{ rank.amount }}
        </h5>
      </div>
      <!-- </span> -->
      <div
        class="tournament__list-live ml-auto flex-[0_0_auto] md:mx-auto md:my-0 sm:mx-auto sm:my-0 xsm:mx-auto xsm:my-0"
      >
        <img width="60"
          class="h-[66px] w-[66px] group-hover:animate-[breadcrumbShake_0.82s_cubic-bezier(0.36,0.07,0.19,0.97)_both] lg:max-h-[260px] lg:max-w-[255px] xl:max-h-80 xl:max-w-[310px]"
          :src="rank.user.rank.image_url"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import team02 from '@/assets/img/team/team02.png';
import rank1 from '@/assets/img/rank/rank_1.png';

// const parseListCharacter = (rank) => {
//   return [
//     {
//       title: 'Hạng',
//       value: rank.user.rank.rank_name,
//       code: 'rankName',
//     },
//     {
//       title: 'Số điểm',
//       value: rank.point,
//       code: 'score',
//     },
//     {
//       title: 'Bonus',
//       value: '80',
//       code: 'bonus',
//     },
//     {
//       title: 'Tổng Điểm',
//       value: rank.amount,
//       code: 'totalScore',
//     },
//   ];
// };

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
    // const listCharacters = parseListCharacter(this.rank);
    return {
      thumbImage: team02,
      // listCharacters,
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

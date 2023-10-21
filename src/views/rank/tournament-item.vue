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
        <a href="tournament-details.html">
          <img
            class="max-w-[89px] max-h-[91px] lg:max-w-[80px] lg:max-h-[75px] md:max-w-[80px] md:max-h-[75px] sm:max-w-[80px] sm:max-h-[75px] xsm:max-w-[80px] xsm:max-h-[75px]"
            :src="thumbImage"
            alt="thumb"
          />
        </a>
      </div>
      <div
        class="tournament__list-name w-[205px] flex-[0_0_auto] relative z-[1] pl-[35px] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Nguyen Trong Ha</h5>
        <span
          class="status block uppercase text-[13px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] pl-[13px]"
          >Snipper</span
        >
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative z-[1] pl-[35px] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Hang</h5>
        <span
          class="status block uppercase text-[13px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] "
          >Snipper</span
        >
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative z-[1] pl-[35px] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">So dien</h5>
        <span
          class="status block uppercase text-[13px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] "
          >Snipper</span
        >
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative z-[1] pl-[35px] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Bonus</h5>
        <span
          class="status block uppercase text-[13px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] "
          >Snipper</span
        >
      </div>
      <div
        class="w-[125pxpx] flex-[0_0_auto] relative z-[1] pl-[35px] before:content-[''] before:absolute before:-translate-y-2/4 before:h-[53px] before:w-px before:opacity-[0.18] before:z-[1] before:left-px before:top-2/4 before:bg-[radial-gradient(circle,_var(--tw-gradient-stops))] before:from-[#fff_0%] before:via-[transparent_100%] before:to-[#10181f_100%] after:content-[''] after:absolute after:-translate-y-2/4 after:h-[60px] after:w-[3px] after:left-0 after:top-2/4 after:bg-[#121920] md:w-6/12 md:flex-[0_0_auto] md:text-right md:pl-5 sm:w-6/12 sm:flex-[0_0_auto] sm:text-right sm:pl-5 xsm:w-6/12 xsm:flex-[0_0_auto] xsm:text-right xsm:pl-5"
      >
        <h5 class="team-name text-[18px] mt-0 mb-2 mx-0">Tong diem</h5>
        <span
          class="status block uppercase text-[13px] font-bold tracking-[1px] text-[#45f882] relative leading-none transition-all duration-[0.3s] ease-[ease-out] delay-[0s] "
          >Snipper</span
        >
      </div>
      <div
        class="tournament__list-live ml-auto flex-[0_0_auto] md:mx-auto md:my-0 sm:mx-auto sm:my-0 xsm:mx-auto xsm:my-0"
      >
        <a
          class="group-hover:text-[#fff] inline-block uppercase font-bold text-[13px] text-[#adb0bc] tracking-[1px] px-[45px] py-3 rounded-md font-Barlow bg-[#0c1217] lg:px-[22px] lg:py-3"
          href="https://www.twitch.tv/videos/1726788358"
          target="_blank"
          >Live now
          <i
            class="far fa-play-circle group-hover:text-[#ffbe18] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ml-[3px]"
          ></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import team02 from "@/assets/img/team/team02.png";

export default {
  props: {
    tournament: {
      type: Object,
      required: true,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      thumbImage: team02,
    };
  },
};
</script>

<style scoped>
.tournament-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px;
}

.tournament-item-title {
  font-weight: bold;
}

/* Add more styling as needed */
</style>

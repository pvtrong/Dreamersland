<template>
  <!-- upcoming-match done -->
  <section class="upcoming-match__area pt-[120px] bg-[bottom_center] bg-cover">
    <div class="container">
      <div class="flex flex-wrap mx-[-15px]  justify-center ">
        <div
          class="w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-7/12 lg:basis-7/12 md:w-10/12 md:basis-10/12 sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[15px]">
          <div
            class="section__title text-center mb-[60px]  relative after:content-[''] after:block after:w-[65px] after:h-[5px] after:mt-5 after:mb-0 after:mx-auto">
            <show-text-animation :text="'MATCHES LIST'" />

            <h3
              class="title text-[45px] font-extrabold tracking-[1px] m-0 sm:text-[35px] sm:leading-[1.1] xsm:text-[35px] xsm:leading-[1.1]">
              upcoming MATCHES</h3>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px]">
        <div class="w-full basis-full relative px-[15px]">
          <div class="upcoming-match__lists mx-20 my-0 md:m-0 sm:m-0 xsm:m-0">
            <div
              class="upcoming-match__item tg-svg relative mt-0 mb-[60px] mx-0 before:content-[''] before:absolute before:-translate-y-2/4 before:max-w-[80%] before:h-[13px] before:bg-no-repeat before:bg-center before:opacity-10 before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 sm:p-[30px] sm:border sm:rounded-lg sm:border-solid sm:border-[#2c2b2b] sm:bg-[#0f1c23] xsm:p-[25px] xsm:border xsm:rounded-lg xsm:border-solid xsm:border-[#2c2b2b] xsm:bg-[#0f1c23] md:before:opacity-[0.05] sm:before:top-[60%]  sm:before:opacity-[0.05] xsm:before:top-[60%] xsm:before:opacity-[0.05] group wow fadeInUp"
              data-wow-delay=".2s">
              <div
                class="svg-icon fill-[#0f1c23] stroke-[#2c2b2b] stroke-[1px] group-hover:stroke-[#45f882] block sm:hidden xsm:hidden md:min-h-[140px] md:border md:rounded-lg md:border-solid md:border-[#2c2b2b] md:bg-[#0f1c23]"
                id="svg-7"></div>
              <div
                class="upcoming-match__position flex absolute z-[1] top-[21px] bottom-3.5 inset-x-[60px] lg:top-[17px] lg:bottom-[18px] md:-translate-y-2/4 md:top-2/4 md:bottom-auto md:inset-x-[30px] sm:relative sm:flex-wrap sm:justify-between sm:translate-y-0 sm:gap-y-[15px] sm:top-auto sm:inset-x-0 sm:bottom-auto xsm:relative xsm:flex-wrap xsm:justify-between xsm:translate-y-0 xsm:gap-y-[15px] xsm:top-auto xsm:inset-x-0 xsm:bottom-auto">
                <div
                  class="upcoming-match__team team-left flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] mr-5 md:mr-[15px] sm:mr-[15px] sm:w-[90px] sm:h-[90px] xsm:mr-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs01.png" alt="img"></a>
                </div>
                <div
                  class="upcoming-match__content flex items-center justify-center grow sm:order-2 sm:w-full sm:flex-[0_0_100%] sm:gap-[30px] sm:justify-between xsm:order-2 xsm:w-full xsm:flex-[0_0_100%] xsm:gap-[30px] xsm:justify-between">
                  <div class="team--info info-left text-right sm:!text-left xsm:!text-left">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">dota2</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">sky hunter</a>
                    </h3>
                  </div>
                  <div
                    class="upcoming-match__time w-[140px] h-[110px] flex items-center justify-center mx-[35px] my-0 rounded-[15px] border-4 border-solid border-[#3f3f49] bg-[rgba(12,23,29,0.671)] lg:w-[130px] lg:h-[85px] md:w-[100px] md:h-[85px] md:m-[0_20px] sm:absolute sm:w-[130px] sm:h-[90px] sm:text-center sm:mx-auto sm:my-0 sm:top-0 sm:inset-x-0 xsm:absolute xsm:w-[95px] xsm:h-[75px] xsm:text-center xsm:mx-auto xsm:my-0 xsm:top-0 xsm:inset-x-0  oxm:w-[130px] oxm:h-[90px]">
                    <h2 class="time text-[34px] m-0 lg:text-[30px] md:text-[26px] sm:text-[22px] xsm:text-[22px]">08:30
                    </h2>
                  </div>
                  <div class="team--info info-right sm:text-right xsm:text-right">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">dota2</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">The Tadium</a>
                    </h3>
                  </div>
                </div>
                <div
                  class="upcoming-match__team team-right flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] ml-5 md:ml-[15px] sm:ml-[15px] sm:w-[90px] sm:h-[90px] xsm:ml-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs02.png" alt="img"></a>
                </div>
              </div>
              <div
                class="upcoming-match__date absolute max-w-[287px] h-6 text-center overflow-hidden mx-auto my-0 -bottom-6 inset-x-0">
                <svg
                  class=" block w-full h-full fill-[#101d25] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] group-hover:fill-[#45f882]"
                  xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24">
                  <path id="bottom-svg1" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)" />
                </svg>
                <span
                  class=" absolute block -translate-y-2/4 uppercase text-[13px] text-[#fff] font-bold tracking-[1px] opacity-50 transition-all duration-[0.3s] ease-[ease-out] delay-[0s] leading-none overflow-hidden whitespace-nowrap text-ellipsis px-[30px] py-0 top-2/4 inset-x-0 font-Barlow group-hover:text-[#0f1c23] group-hover:opacity-100">October
                  7, 2023, 8:30 pm</span>
              </div>
            </div>
            <div
              class="upcoming-match__item tg-svg relative mt-0 mb-[60px] mx-0 before:content-[''] before:absolute before:-translate-y-2/4 before:max-w-[80%] before:h-[13px] before:bg-no-repeat before:bg-center before:opacity-10 before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 sm:p-[30px] sm:border sm:rounded-lg sm:border-solid sm:border-[#2c2b2b] sm:bg-[#0f1c23] xsm:p-[25px] xsm:border xsm:rounded-lg xsm:border-solid xsm:border-[#2c2b2b] xsm:bg-[#0f1c23] md:before:opacity-[0.05] sm:before:top-[60%]  sm:before:opacity-[0.05] xsm:before:top-[60%] xsm:before:opacity-[0.05] group wow fadeInUp"
              data-wow-delay=".4s">
              <div
                class="svg-icon fill-[#0f1c23] stroke-[#2c2b2b] stroke-[1px] group-hover:stroke-[#45f882] block sm:hidden xsm:hidden md:min-h-[140px] md:border md:rounded-lg md:border-solid md:border-[#2c2b2b] md:bg-[#0f1c23]"
                id="svg-8"></div>
              <div
                class="upcoming-match__position flex absolute z-[1] top-[21px] bottom-3.5 inset-x-[60px] lg:top-[17px] lg:bottom-[18px] md:-translate-y-2/4 md:top-2/4 md:bottom-auto md:inset-x-[30px] sm:relative sm:flex-wrap sm:justify-between sm:translate-y-0 sm:gap-y-[15px] sm:top-auto sm:inset-x-0 sm:bottom-auto xsm:relative xsm:flex-wrap xsm:justify-between xsm:translate-y-0 xsm:gap-y-[15px] xsm:top-auto xsm:inset-x-0 xsm:bottom-auto">
                <div
                  class="upcoming-match__team team-left flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] mr-5 md:mr-[15px] sm:mr-[15px] sm:w-[90px] sm:h-[90px] xsm:mr-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs03.png" alt="img"></a>
                </div>
                <div
                  class="upcoming-match__content flex items-center justify-center grow sm:order-2 sm:w-full sm:flex-[0_0_100%] sm:gap-[30px] sm:justify-between xsm:order-2 xsm:w-full xsm:flex-[0_0_100%] xsm:gap-[30px] xsm:justify-between">
                  <div class="team--info info-left text-right sm:!text-left xsm:!text-left">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">valorant</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">killer 7</a>
                    </h3>
                  </div>
                  <div
                    class="upcoming-match__time w-[140px] h-[110px] flex items-center justify-center mx-[35px] my-0 rounded-[15px] border-4 border-solid border-[#3f3f49] bg-[rgba(12,23,29,0.671)] lg:w-[130px] lg:h-[85px] md:w-[100px] md:h-[85px] md:m-[0_20px] sm:absolute sm:w-[130px] sm:h-[90px] sm:text-center sm:mx-auto sm:my-0 sm:top-0 sm:inset-x-0 xsm:absolute xsm:w-[95px] xsm:h-[75px] xsm:text-center xsm:mx-auto xsm:my-0 xsm:top-0 xsm:inset-x-0  oxm:w-[130px] oxm:h-[90px]">
                    <h2 class="time text-[34px] m-0 lg:text-[30px] md:text-[26px] sm:text-[22px] xsm:text-[22px]">05:30
                    </h2>
                  </div>
                  <div class="team--info info-right sm:text-right xsm:text-right">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">valorant</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">Black mx</a>
                    </h3>
                  </div>
                </div>
                <div
                  class="upcoming-match__team team-right flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] ml-5 md:ml-[15px] sm:ml-[15px] sm:w-[90px] sm:h-[90px] xsm:ml-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs04.png" alt="img"></a>
                </div>
              </div>
              <div
                class="upcoming-match__date absolute max-w-[287px] h-6 text-center overflow-hidden mx-auto my-0 -bottom-6 inset-x-0">
                <svg
                  class=" block w-full h-full fill-[#101d25] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] group-hover:fill-[#45f882]"
                  xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24">
                  <path id="bottom-svg2" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)" />
                </svg>
                <span
                  class=" absolute block -translate-y-2/4 uppercase text-[13px] text-[#fff] font-bold tracking-[1px] opacity-50 transition-all duration-[0.3s] ease-[ease-out] delay-[0s] leading-none overflow-hidden whitespace-nowrap text-ellipsis px-[30px] py-0 top-2/4 inset-x-0 font-Barlow group-hover:text-[#0f1c23] group-hover:opacity-100">October
                  9, 2023, 5:30 pm</span>
              </div>
            </div>
            <div
              class="overflow-hidden upcoming-match__item tg-svg relative mt-0 mb-[60px] mx-0 before:content-[''] before:absolute before:-translate-y-2/4 before:max-w-[80%] before:h-[13px] before:bg-no-repeat before:bg-center before:opacity-10 before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 sm:p-[30px] sm:border sm:rounded-lg sm:border-solid sm:border-[#2c2b2b] sm:bg-[#0f1c23] xsm:p-[25px] xsm:border xsm:rounded-lg xsm:border-solid xsm:border-[#2c2b2b] xsm:bg-[#0f1c23] md:before:opacity-[0.05] sm:before:top-[60%]  sm:before:opacity-[0.05] xsm:before:top-[60%] xsm:before:opacity-[0.05] group wow fadeInUp"
              data-wow-delay=".6s">
              <div
                class="svg-icon fill-[#0f1c23] stroke-[#2c2b2b] stroke-[1px] group-hover:stroke-[#45f882] block sm:hidden xsm:hidden md:min-h-[140px] md:border md:rounded-lg md:border-solid md:border-[#2c2b2b] md:bg-[#0f1c23]"
                id="svg-9"></div>
              <div
                class="upcoming-match__position flex absolute z-[1] top-[21px] bottom-3.5 inset-x-[60px] lg:top-[17px] lg:bottom-[18px] md:-translate-y-2/4 md:top-2/4 md:bottom-auto md:inset-x-[30px] sm:relative sm:flex-wrap sm:justify-between sm:translate-y-0 sm:gap-y-[15px] sm:top-auto sm:inset-x-0 sm:bottom-auto xsm:relative xsm:flex-wrap xsm:justify-between xsm:translate-y-0 xsm:gap-y-[15px] xsm:top-auto xsm:inset-x-0 xsm:bottom-auto">
                <div
                  class="upcoming-match__team team-left flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] mr-5 md:mr-[15px] sm:mr-[15px] sm:w-[90px] sm:h-[90px] xsm:mr-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs05.png" alt="img"></a>
                </div>
                <div
                  class="upcoming-match__content flex items-center justify-center grow sm:order-2 sm:w-full sm:flex-[0_0_100%] sm:gap-[30px] sm:justify-between xsm:order-2 xsm:w-full xsm:flex-[0_0_100%] xsm:gap-[30px] xsm:justify-between">
                  <div class="team--info info-left text-right sm:!text-left xsm:!text-left">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">PUBG
                      PC</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">killer 7</a>
                    </h3>
                  </div>
                  <div
                    class="upcoming-match__time w-[140px] h-[110px] flex items-center justify-center mx-[35px] my-0 rounded-[15px] border-4 border-solid border-[#3f3f49] bg-[rgba(12,23,29,0.671)] lg:w-[130px] lg:h-[85px] md:w-[100px] md:h-[85px] md:m-[0_20px] sm:absolute sm:w-[130px] sm:h-[90px] sm:text-center sm:mx-auto sm:my-0 sm:top-0 sm:inset-x-0 xsm:absolute xsm:w-[95px] xsm:h-[75px] xsm:text-center xsm:mx-auto xsm:my-0 xsm:top-0 xsm:inset-x-0  oxm:w-[130px] oxm:h-[90px]">
                    <h2 class="time text-[34px] m-0 lg:text-[30px] md:text-[26px] sm:text-[22px] xsm:text-[22px]">09:30
                    </h2>
                  </div>
                  <div class="team--info info-right sm:text-right xsm:text-right">
                    <span
                      class="game-name block uppercase text-[14px] font-bold text-[#45f882] tracking-[1px] font-Barlow">PUBG
                      PC</span>
                    <h3
                      class="name text-[26px] font-extrabold tracking-[1.5px] m-0 lg:text-[22px] md:text-[20px] sm:text-[18px] xsm:text-[18px]">
                      <a class=" hover:text-[#45f882]" href="team-details.html">Black mx</a>
                    </h3>
                  </div>
                </div>
                <div
                  class="upcoming-match__team team-right flex items-center justify-center w-[104px] h-[104px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.14)] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] rounded-[15px] border-[3px] border-solid border-[#34353d] hover:border-[#45f882] bg-[#14242c] lg:w-[90px] lg:h-[90px] lg:flex-[0_0_auto] ml-5 md:ml-[15px] sm:ml-[15px] sm:w-[90px] sm:h-[90px] xsm:ml-[15px] xsm:w-[75px] xsm:h-[75px]">
                  <a href="team-details.html"><img class=" max-h-[75px] sm:max-w-[60px] xsm:max-w-[45px]"
                      src="@/assets/img/others/team_vs06.png" alt="img"></a>
                </div>
              </div>
              <div
                class="upcoming-match__date absolute max-w-[287px] h-6 text-center overflow-hidden mx-auto my-0 -bottom-6 inset-x-0">
                <svg
                  class=" block w-full h-full fill-[#101d25] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] group-hover:fill-[#45f882]"
                  xmlns="http://www.w3.org/2000/svg" width="287" height="24" viewBox="0 0 287 24">
                  <path id="bottom-svg3" d="M1104,3760l-20,24H837l-20-24" transform="translate(-817 -3760)" />
                </svg>
                <span
                  class=" absolute block -translate-y-2/4 uppercase text-[13px] text-[#fff] font-bold tracking-[1px] opacity-50 transition-all duration-[0.3s] ease-[ease-out] delay-[0s] leading-none overflow-hidden whitespace-nowrap text-ellipsis px-[30px] py-0 top-2/4 inset-x-0 font-Barlow group-hover:text-[#0f1c23] group-hover:opacity-100">October
                  10, 2023, 9:30 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- upcoming-match-end -->
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
.upcoming-match__item {
  &::before {
    background-image: url('../../assets/img/bg/line.png');
  }
}

.section__title {
  &::after {
    background-image: url('../../assets/img/bg/title_shape.svg');
    background-repeat: no-repeat;
  }
}

.upcoming-match__area {
  background-repeat: no-repeat;
  background-image: url('../../assets/img/bg/match_bg.jpg');
}

.svg-icon {
  background-repeat: no-repeat;
  background-image: url('../../assets/img/icons/match.svg');
}
</style>

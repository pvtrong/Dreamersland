<template>
  <!-- header-search -->
  <div
    class="search__popup-wrap fixed h-screen w-full z-[99] mt-[-370px] -translate-y-full transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] left-0 top-0 after:content-[''] after:absolute after:w-full after:h-[370px] after:bg-[url(./assets/img/bg/search\_wave.png)] after:bg-no-repeat after:bg-center after:bg-cover after:mt-0 after:left-0 after:top-full"
  >
    <div
      class="search__layer content-[''] absolute h-screen w-full bg-[rgba(15,22,27,0.9)] transition-all duration-[1500ms] ease-[cubic-bezier(0.86,0,0.07,1)] z-[-1] left-0 top-0"
    ></div>
    <div
      class="search__close absolute text-3xl text-[#45f882] cursor-pointer right-[5%] top-[5%]"
    >
      <span><i class="flaticon-swords-in-cross-arrangement"></i></span>
    </div>
    <div
      class="search__wrap text-center absolute -translate-y-2/4 top-2/4 inset-x-0"
    >
      <div class="container">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full basis-full relative px-[15px]">
            <h2
              class="title text-[47px] font-extrabold uppercase text-[#45f882] tracking-[-1px] mt-0 mb-[70px] mx-0 font-Barlow"
            >
              ...
              <span
                class="text-[#fff] tracking-[5px] drop-shadow-[-2px_2.5px_0px_rgba(69,248,130,0.66)]"
                >Search Here</span
              >
              ...
            </h2>
            <div
              class="search__form relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:transition-all after:duration-[600ms] after:ease-[ease] after:left-0 after:bottom-0 after:bg-[#45f882] focus:after:!bg-[#45f882]"
            >
              <form action="#">
                <input
                  type="text"
                  name="search"
                  placeholder="Type keywords here"
                  required
                  class="block w-full text-center font-medium text-3xl text-[#fff] pt-2.5 pb-5 px-[50px] border-transparent bg-transparent placeholder:text-3xl placeholder:opacity-50 focus:!ring-[none] focus:!border-transparent"
                />
                <button
                  class="search-btn absolute text-[25px] text-[#45f882] -translate-y-2/4 border-0 right-5 top-2/4 bg-transparent"
                >
                  <i class="flaticon-loupe"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- header-search-end -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

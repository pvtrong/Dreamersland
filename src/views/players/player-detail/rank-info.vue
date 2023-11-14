<template>
  <div
    class="mt-8 flex justify-end w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative md:justify-center">
    <div class="octagonBox lg:w-full md:!w-full xsm:!w-full sm:!w-full">
      <div class="flex absolute px-4 py-6 h-full w-full">
        <div class="flex flex-wrap justify-evenly items-center">
          <div class="basis-1/5 xsm:!basis-full flex justify-center">
            <img :src="rankImg" alt="image" class="w-28 h-24" />
          </div>
          <div class="text-center basis-1/5 xsm:!basis-1/3">
            <div class="text-[#a0a4b1] font-bold text-base xsm:text-xs whitespace-pre">
              SỐ ĐIỂM
            </div>
            <span class="text-[#3CF777] text-3xl xsm:text-2xl font-bold text-center">
              {{ currentSeasonPoint || 0 }}
            </span>
          </div>

          <div class="text-center basis-1/5 xsm:!basis-1/3">
            <div class="text-[#a0a4b1] font-bold text-base xsm:text-xs whitespace-pre">
              BONUS
            </div>
            <span class="text-[#3CF777] text-3xl font-bold xsm:text-2xl">
              {{ currentSeasonBonus || 0 }}
            </span>
          </div>

          <div class="text-center basis-1/4 xsm:!basis-1/3">
            <div class="text-[#a0a4b1] font-bold text-base xsm:text-xs whitespace-pre">
              Tổng điểm
            </div>
            <span class="text-[#3CF777] text-3xl font-bold xsm:text-2xl">
              {{ currentSeasonTotalPoint || 0 }}
            </span>
          </div>

          <div class="text-center basis-1/4 xsm:!basis-1/3">
            <div class="text-[#a0a4b1] font-bold xsm:text-xs whitespace-pre">
              HẠNG HIỆN TẠI
            </div>
            <span class="text-[#3CF777] text-3xl xsm:text-2xl font-bold">
              {{ rankName }}
            </span>
          </div>

          <div class="text-center basis-1/4 xsm:!basis-1/3">
            <div class="color-[#a0a4b1] font-bold xsm:text-xs whitespace-pre">
              SỐ TRẬN DUAL
            </div>
            <span class="text-[#3CF777] text-3xl font-bold xsm:text-2xl">
              0
            </span>
          </div>

          <div class="text-center basis-1/4 xsm:!basis-1/3">
            <div class="color-[#a0a4b1] font-bold xsm:text-xs whitespace-pre">
              TỈ LỆ THẮNG
            </div>
            <span class="text-[#3CF777] text-3xl xsm:text-2xl font-bold">
              0%
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentSeasonPoint: 0,
    currentSeasonBonus: 0,
    currentSeasonTotalPoint: 0,
    rankName: '',
    rankImg: '',
  },
};
</script>

<style lang="scss" scoped>
.octagonBox {
  width: calc(100% - 2rem);
  height: 300px;
  position: relative;
  /* copied from the generator */
  clip-path: polygon(10% 0,
      90% 0,
      100% 30%,
      100% 70%,
      90% 100%,
      11% 100%,
      0 70%,
      0% 30%);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #252a2f;
    clip-path: polygon(10% 0,
        90% 0,
        100% 30%,
        100% 70%,
        90% 100%,
        11% 100%,
        0 70%,
        0% 30%);
  }
}
</style>

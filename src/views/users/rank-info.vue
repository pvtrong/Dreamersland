<template>
  <div
    class="flex justify-end w-6/12 basis-6/12 xl:w-6/12 xl:basis-6/12 lg:w-6/12 lg:basis-6/12 md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative md:justify-center"
  >
    <div
      class="flex flex-wrap mx-[-15px] md:w-full md:basis-full sm:w-full sm:basis-full xsm:w-full xsm:basis-full"
    >
      <div class="w-full basis-full relative">
        <div class="">
          <div class="" data-wow-delay=".2s">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="630"
              height="335.249"
              viewBox="287.444 2328.97 824.634 335.249"
              class="md:w-full"
            >
              <path
                d="M287.444 2555.2v-119.157l41.508-107.073h69.703l1.197 3.432h139.585l.04-.104 531.549-2.838 41.052 106.218v123.735l-41.052 104.31-742.074.497-41.508-109.02Z"
                fill="#252a2f"
                fill-rule="evenodd"
                data-name="Union 1"
              />
            </svg>
            <div
              class="absolute top-0 left-0 flex items-center justify-center flex-col h-full w-full"
            >
              <div class="flex w-full justify-evenly items-center px-8">
                <div>
                  <img :src="currentUser.rank.image_url" alt="image" width="120" height="100">
                </div>
                <div>
                  <div class="text-[#a0a4b1] font-bold">SỐ ĐIỂM</div>
                  <span class="text-[#3CF777] text-4xl font-bold">
                    {{ currentUser.current_season_point || 0 }}
                  </span>
                </div>

                <!-- <div>
                  <div class="text-[#a0a4b1] font-bold">BONUS</div>
                  <span class="text-[#3CF777] text-4xl font-bold">
                    80
                  </span>
                </div> -->

                <div>
                  <div class="text-[#a0a4b1] font-bold">TỔNG DOANH SÔ</div>
                  <span class="text-[#3CF777] text-4xl font-bold">
                    {{ currentUser.all_season_sales || 0 }}
                  </span>
                </div>
              </div>

              <div
                class="flex w-full justify-evenly items-center px-4 mt-4"
              >
                <div class="text-center">
                  <div class="text-[#a0a4b1] font-bold">
                    HẠNG HIỆN TẠI
                  </div>
                  <span class="text-[#3CF777] text-3xl font-bold">
                    {{ currentUser.rank.rank_name }}
                  </span>
                </div>

                <!-- <div class="text-center">
                  <div class="color-[#a0a4b1] font-bold">
                    SỐ TRẬN DUAL
                  </div>
                  <span class="text-[#3CF777] text-3xl font-bold">
                    160
                  </span>
                </div>

                <div class="text-center">
                  <div class="color-[#a0a4b1] font-bold">
                    TỈ LỆ THẮNG
                  </div>
                  <span class="text-[#3CF777] text-3xl font-bold">
                    12.67%
                  </span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      currentUser: store.getters.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

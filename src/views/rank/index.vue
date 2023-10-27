<template>
  <div>
    <breadcrumb
      :pageTitle="'Ranking'"
      :thumbImage="breadcrumbImage03"
    ></breadcrumb>

    <section class="rank__list-area pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container">
        <custom-title :title="'Top of dreamers'"></custom-title>
        <!-- <div class="text-end">
          <div>
            <el-date-picker
              v-model="value2"
              :type="typeDate"
              :picker-options="pickerOptions"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              align="right"
            >
            </el-date-picker>
          </div>
        </div> -->
        <div
          class="sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative px-[5rem] lg:p-0 md:p-0 sm:p-0 xsm:p-0"
        >
          <div class="shop__top-wrap mt-0 mb-[30px] mx-0">
            <div class="flex flex-wrap mx-[-15px] items-center">
              <div
                class="w-8/12 basis-8/12 xl:w-8/12 xl:basis-8/12 lg:w-8/12 lg:basis-8/12 md:w-6/12 md:basis-6/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]"
              >
                <!-- <div class="shop__showing-result xsm:text-center">
                  <p class="text-[14px] font-medium uppercase m-0">
                    Showing 1 - 9 of 15 results
                  </p>
                </div> -->
              </div>
              <div
                class="w-4/12 basis-4/12 xl:w-4/12 xl:basis-4/12 lg:w-4/12 lg:basis-4/12 md:w-6/12 md:basis-6/12 sm:w-6/12 sm:basis-6/12 xsm:w-full xsm:basis-full relative px-[15px]"
              >
                <div
                  class="shop__ordering flex relative ml-auto after:content-['\f107'] after:absolute after:-translate-y-2/4 after:font-bold after:text-[14px] after:right-5 after:top-2/4 after:font-FontAwesome xsm:m-[15px_auto_0]"
                >
                  <select
                    v-model="sortBy"
                    @change="handleSortBy"
                    name="sort"
                    class="orderby mr-[1rem] !bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-[#171d24] border border-[none] text-[#adb0bc] font-medium text-[14px] capitalize appearance-none w-full pl-5 pr-10 py-3 rounded-[5px] border-solid border-[#333333] focus:!ring-0 focus:!border-[#333333] focus-visible:!ring-0 focus-visible:!border-[#333333] focus-visible:!border-[none] focus-visible:outline-none"
                  >
                    <option :value="rankSortBy.POINT">Theo điểm</option>
                    <option :value="rankSortBy.AMOUNT">Theo doanh số</option>
                  </select>
                  <select
                    name="filter"
                    v-model="filterBy"
                    @change="handleFilterBy"
                    class="orderby !bg-[linear-gradient(0deg,#1215187d_0%,#1f29355c_100%)] bg-[#171d24] border border-[none] text-[#adb0bc] font-medium text-[14px] capitalize appearance-none w-full pl-5 pr-10 py-3 rounded-[5px] border-solid border-[#333333] focus:!ring-0 focus:!border-[#333333] focus-visible:!ring-0 focus-visible:!border-[#333333] focus-visible:!border-[none] focus-visible:outline-none"
                  >
                    <option :value="filterByDate">Ngày</option>
                    <option :value="filterByWeek">Tuần</option>
                    <option :value="filterByMonth">Tháng</option>
                    <!-- <option value="season">Mùa</option> -->
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="rank__wrapper px-20 py-0 xl:px-[60px] xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0"
        >
          <div class="flex flex-wrap mx-[-15px]">
            <rank-item
              v-for="(rank, index) in ranks"
              :key="index"
              :index="index + 1"
              :rank="rank"
              :animate="animateText"
            ></rank-item>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RankItem from '@/views/rank/rank-item.vue'; // Adjust the path to match your project structure
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import breadcrumbImage03 from '@/assets/img/others/breadcrumb_img03.png';
import { getListRanks } from '@/api/rank';
import { RANK_SORT_BY, DATE_FORMAT } from '@/constants';
import { getStartAndEndOfWeek, getStartAndEndOfMonth } from '@/utils';
import moment from 'moment';
const filterByDate = {
  from: moment().format(DATE_FORMAT),
  to: moment().format(DATE_FORMAT),
};
const filterByWeek = {
  from: moment(getStartAndEndOfWeek().startDate).format(DATE_FORMAT),
  to: moment(getStartAndEndOfWeek().endDate).format(DATE_FORMAT),
};
const filterByMonth = {
  from: moment(getStartAndEndOfMonth().startDate).format(DATE_FORMAT),
  to: moment(getStartAndEndOfMonth().endDate).format(DATE_FORMAT),
};

export default {
  components: {
    RankItem,
    Breadcrumb,
    breadcrumbImage03,
    CustomTitle,
  },
  data() {
    const filterDate = new Date();
    const filterTime = {
      date: filterDate,
    };
    return {
      isLoading: false,
      typeDate: 'daterange',
      backgroundImage: breadcrumbImage03,
      rankTitle: 'Active rank',
      animateText: false, // Set to true for animation
      rankSortBy: RANK_SORT_BY,
      ranks: [],
      filterBy: filterByDate,
      filterByDate,
      filterByWeek,
      filterByMonth,
      sortBy: RANK_SORT_BY.AMOUNT,
      breadcrumbImage03,
      // pickerOptions: {
      //   shortcuts: [
      //     {
      //       text: 'Last week',
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         this.typeDate = 'date';
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      //         picker.$emit('pick', [start, end]);
      //         console.log('picker', picker)
      //       },
      //     },
      //     {
      //       text: 'Last month',
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      //         picker.$emit('pick', [start, end]);
      //       },
      //     },
      //     {
      //       text: 'Last 3 months',
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      //         picker.$emit('pick', [start, end]);
      //       },
      //     },
      //   ],
      // },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      radio1: 'New York',
    };
  },
  created() {
    this.getData({ ...this.filterBy, sort_by: this.sortBy });
  },
  methods: {
    async getData(params) {
      this.isLoading = true;
      try {
        const { data } = await getListRanks({...params, season_id: 1});
        this.ranks = data;
      } catch (error) {}
      this.isLoading = false;
    },
    handleFilterBy(event) {
      this.getData({ ...this.filterBy, sort_by: this.sortBy });
    },
    handleSortBy(event) {
      this.getData({ ...this.filterBy, sort_by: this.sortBy });
    },
    exploreMore() {},
  },
};
</script>

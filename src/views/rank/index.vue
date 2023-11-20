<template>
  <article>
    <breadcrumb :pageTitle="'Ranking'" :thumbImage="breadcrumbImage03" :isUserDetail="false"></breadcrumb>

    <section class="rank__list-area pb-[120px] pt-[120px] bg-center bg-cover">
      <div class="container md:px-[0rem] xsm:px-[1.5rem]">
        <custom-title :title="'Top of dreamers'"></custom-title>

        <div class="sm:w-full sm:basis-full xsm:w-full xsm:basis-full relative lg:p-0 md:p-0 sm:p-0 xsm:p-0">
          <div class="shop__top-wrap mt-0 mb-[30px] mx-0">
            <div class="flex justify-end items-center">
              <div
                class="shop__ordering flex gap-5 relative ml-auto after:content-['\f107'] after:absolute after:-translate-y-2/4 after:font-bold after:text-[14px] after:right-5 after:top-2/4 after:font-FontAwesome xsm:m-[15px_auto_0]">
                <el-date-picker class="xsm:!w-full" v-model="filterBy" type="daterange" :ref="pickerRef" :picker-options="pickerOptions"
                  @change="handleFilterBy">
                  ></el-date-picker>
              </div>
            </div>
          </div>
        </div>
        <div class="rank__wrapper py-0 xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0">
          <div class="flex flex-col md:gap-[1.5rem] sm:gap-[1.5rem] xsm:gap-[1.5rem]">
            <rank-item v-for="(rank, index) in listRanks" :key="index" :index="index + 1" :rank="rank"
              :animate="animateText"></rank-item>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>
<script>
import { main } from '@/assets/js/main';
import RankItem from '@/views/rank/rank-item.vue'; // Adjust the path to match your project structure
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import breadcrumbImage03 from '@/assets/img/others/breadcrumb_img03.png';
import { getListRanks } from '@/api/rank';
import { getListSeasons } from '@/api/season';
import { RANK_SORT_BY, DATE_FORMAT } from '@/constants';
import { getStartAndEndOfWeek, getStartAndEndOfMonth } from '@/utils';
import moment from 'moment';

const end = new Date();
const start = new Date();

start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
const defaultDate = [start, end];

export default {
  name: 'Bảng xếp hạng',
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
      rankTitle: 'Active rank',
      animateText: false, // Set to true for animation
      selectedSeason: null,
      seasonOptions: [],
      listRanks: [],
      rankSortByOptions: [
        {
          label: 'Theo điểm',
          value: RANK_SORT_BY.POINT,
        },
        {
          label: 'Theo doanh số',
          value: RANK_SORT_BY.AMOUNT,
        },
      ],
      sortBy: RANK_SORT_BY.POINT,
      filterBy: defaultDate,
      breadcrumbImage03,
      pickerRef: 'datePickerRef', // Reference for the date range picker
      pickerOptions: {
        shortcuts: [
          {
            text: 'Hôm nay',
            onClick(picker) {
              const { from, to } = filterByDate;
              picker.$emit('pick', [from, to]);
            },
          },
          {
            text: '7 ngày trước',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '30 ngày trước',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      radio1: 'New York',
    };
  },
  created() {
    this.getData({
      from: moment(this.filterBy[0]).format(DATE_FORMAT),
      to: moment(this.filterBy[1]).format(DATE_FORMAT),
      sort_by: this.sortBy,
    });
    // this.getListSeasons();
  },
  methods: {
    async getData(params) {
      this.isLoading = true;
      try {
        const { data } = await getListRanks({ ...params });
        this.listRanks = data;
      } catch (error) { }
      this.isLoading = false;
    },

    async getListSeasons() {
      try {
        const { data } = await getListSeasons();
        this.seasonOptions = data;
        this.selectedSeason = data[0] ?? null;
      } catch (error) { }
    },

    handleFilterBy(value) {
      this.getData({
        from: moment(value[0]).format(DATE_FORMAT),
        to: moment(value[1]).format(DATE_FORMAT),
        sort_by: this.sortBy,
      });
    },
    handleSortBy(value) {
      this.getData({
        from: moment(this.filterBy[0]).format(DATE_FORMAT),
        to: moment(this.filterBy[1]).format(DATE_FORMAT),
        sort_by: this.sortBy,
      });
    },
    changeType(newType) {
      this.typeDate = value;
    },
    exploreMore() { },
    openDateRangePicker() {
      // Access the date range picker using its ref
      const datePicker = this.$refs.datePickerRef;

      if (datePicker) {
        datePicker.showPicker(); // Open the date range picker
      }
    },
    handleOptionHover(optionLabel) {
      if (optionLabel === 'Tùy chọn') {
        this.openDateRangePicker();
      }
    },
  },
  mounted() {
    setTimeout(() => {
      main(window.jQuery);
    });
  }
};
</script>

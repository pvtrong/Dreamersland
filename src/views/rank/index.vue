<template>
  <div>
    <breadcrumb
      :pageTitle="'Ranking'"
      :thumbImage="breadcrumbImage03"
    ></breadcrumb>

    <section
      class="tournament__list-area pb-[120px] pt-[120px] bg-center bg-cover"
    >
      <div class="container">
        <custom-title :title="'Top of dreamers'"></custom-title>
        <div class="text-end">
          <div>
            <el-date-picker
              v-model="value2"
              type="daterange"
              :picker-options="pickerOptions"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
              align="right"
            >
            </el-date-picker>
          </div>
          <div>
            <el-radio-group v-model="radio1">
              <el-radio-button
                class="tg-btn-1"
                label="Theo Điểm"
              ></el-radio-button>
              <el-radio-button
                class="tg-btn-1"
                label="Theo Doanh số"
              ></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div
          class="tournament__wrapper px-20 py-0 xl:px-[60px] xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0"
        >
          <div class="flex flex-wrap mx-[-15px]">
            <tournament-item
              v-for="(tournament, index) in tournaments"
              :key="index"
              :index="index + 1"
              :tournament="tournament"
              :animate="animateText"
              class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-15"
            ></tournament-item>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TournamentItem from '@/views/rank/tournament-item.vue'; // Adjust the path to match your project structure
import Breadcrumb from '@/components/CustomBreadcrumb/index.vue';
import CustomTitle from '@/components/CustomTitle/index.vue';
import breadcrumbImage03 from '@/assets/img/others/breadcrumb_img03.png';
import { getListRanks } from '@/api/rank';

export default {
  components: {
    TournamentItem,
    Breadcrumb,
    breadcrumbImage03,
    CustomTitle,
  },
  data() {
    return {
      isLoading: false,
      backgroundImage: breadcrumbImage03,
      tournamentTitle: 'Active tournament',
      animateText: false, // Set to true for animation
      tournaments: [
        {
          teamName: 'FoxTie Max',
          status: 'Online',
          prize: '$75000',
          time: '10h : 15m',
          thumbImage: 'assets/img/others/tournament_thumb01.png',
          liveLink: 'https://www.twitch.tv/videos/1726788358',
        },
        {
          teamName: 'Hatlax TM.',
          status: 'Online',
          prize: '$85000',
          time: '12h : 10m',
          thumbImage: 'assets/img/others/tournament_thumb02.png',
          liveLink: 'https://www.twitch.tv/videos/1726788358',
        },
        {
          teamName: 'Spartan iv',
          status: 'Online',
          prize: '$45000',
          time: '8h : 45m',
          thumbImage: 'assets/img/others/tournament_thumb03.png',
          liveLink: 'https://www.twitch.tv/videos/1726788358',
        },
      ],
      breadcrumbImage03,
      pickerOptions: {
        shortcuts: [
          {
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
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
  methods: {
    async getData() {
      this.isLoading = true;
      try {
        const { data } = await getListRanks();
        this.tournaments = data;
      } catch (error) {}
      this.isLoading = false;
    },

    exploreMore() {
      // Handle explore more action
    },
  },
};
</script>

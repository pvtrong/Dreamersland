<template>
  <div>
    <breadcrumb
      :pageTitle="'Ranking'"
      :thumbImage="breadcrumbImage03"
    ></breadcrumb>

    <section
      class="tournament__list-area pb-[120px] pt-[120px] bg-center bg-cover"
      :data-background="backgroundImage"
    >
      <div class="container">
        <custom-title :title="'Top of dreamers'"></custom-title>
        <div
          class="tournament__wrapper px-20 py-0 xl:px-[60px] xl:py-0 lg:p-0 md:p-0 sm:p-0 xsm:p-0"
        >
          <div class="flex flex-wrap mx-[-15px]">
            <tournament-item
              v-for="(tournament, index) in tournaments"
              :key="index"
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
import TournamentItem from "@/views/rank/tournament-item.vue"; // Adjust the path to match your project structure
import Breadcrumb from "@/components/CustomBreadcrumb/index.vue";
import CustomTitle from "@/components/CustomTitle/index.vue";
import breadcrumbImage03 from "@/assets/img/others/breadcrumb_img03.png";
export default {
  components: {
    TournamentItem,
    Breadcrumb,
    breadcrumbImage03,
    CustomTitle,
  },
  data() {
    return {
      backgroundImage: breadcrumbImage03,
      tournamentTitle: "Active tournament",
      animateText: false, // Set to true for animation
      tournaments: [
        {
          teamName: "FoxTie Max",
          status: "Online",
          prize: "$75000",
          time: "10h : 15m",
          thumbImage: "assets/img/others/tournament_thumb01.png",
          liveLink: "https://www.twitch.tv/videos/1726788358",
        },
        {
          teamName: "Hatlax TM.",
          status: "Online",
          prize: "$85000",
          time: "12h : 10m",
          thumbImage: "assets/img/others/tournament_thumb02.png",
          liveLink: "https://www.twitch.tv/videos/1726788358",
        },
        {
          teamName: "Spartan iv",
          status: "Online",
          prize: "$45000",
          time: "8h : 45m",
          thumbImage: "assets/img/others/tournament_thumb03.png",
          liveLink: "https://www.twitch.tv/videos/1726788358",
        },
      ],
      breadcrumbImage03,
    };
  },
  methods: {
    exploreMore() {
      // Handle explore more action
    },
  },
};
</script>

<template>
  <div
    class="relative z-[1] mt-0 mb-[25px] mx-0 last:m-0 xsm:bg-[#19222b] wow fadeInUp xsm:w-[80%]"
    data-wow-delay=".2s"
  >
    <div
      class="text-center relative transition-all duration-[0.3s] ease-[ease-out] delay-[0s] mt-0 mx-0 p-[3px] rounded-[10px] border-[3px] border-solid border-[#383c4e] group hover:border-[#45f882]"
    >
      <div
        class="relative z-[1] before:content-[''] before:absolute before:w-full before:h-full before:opacity-100 before:pointer-events-none before:transition-all before:duration-[0.4s] before:ease-[ease-out] before:delay-[0s] before:rounded-md before:left-0 before:bottom-0 after:content-[''] after:absolute after:w-full after:h-0 after:opacity-0 after:pointer-events-none after:transition-all after:duration-[0.4s] after:ease-[ease-out] after:delay-[0s] after:rounded-md after:left-0 after:bottom-0 group-hover:before:opacity-0 group-hover:after:h-full group-hover:after:opacity-80 before:bg-[linear-gradient(0deg,#0e141e_0%,#ffffff00_100%)] after:bg-[linear-gradient(0deg,#45f882_0%,transparent_100%)]"
      >
        <router-link :to="`/players/${player.id || 1}`"
          ><img
            class="border w-[232px] h-[357px] xsm:w-[100%] xsm:h-[auto] xsm:aspect-[232/357] rounded-md border-solid border-[#383c4e]"
            :src="avatar_url || avatar"
            alt="img"
        /></router-link>
      </div>
      <div
        class="streamers__content absolute pointer-events-none z-[1] bottom-7 inset-x-5"
      >
        <h4 class="name text-xl tracking-[1px] m-0">
          {{ player.last_name + ' ' + player.first_name }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import avatarDemo from '@/assets/img/team/streamers01.png';
import { getImgSmall } from '@/utils/index';

export default {
  props: {
    player: {
      type: Object,
    },
  },
  data() {
    return {
      avatar: avatarDemo,
      avatar_url: this.player.avatar_url && getImgSmall(this.player.avatar_url),
    };
  },
};
</script>

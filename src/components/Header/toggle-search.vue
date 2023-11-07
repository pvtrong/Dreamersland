<template>
  <div class="tgmenu__action block lg:mr-10 md:mr-10 sm:hidden xsm:hidden">
    <ul class="list-wrap m-0 p-0 flex items-center ml-2.5">
      <li class="cursor-pointer header-btn relative ml-[25px] pl-[25px] before:content-[''] before:absolute before:-translate-y-2/4 before:w-1.5 before:h-7 before:bg-[#131b22] before:shadow-[inset_0px_3px_7px_0px_rgba(0,0,0,0.61)] before:left-0 before:top-2/4
            lg:before:shadow-[inset_0px_3px_7px_0px_#45f882] lg:before:opacity-10
            md:before:shadow-[inset_0px_3px_7px_0px_#45f882] md:before:opacity-10
            sm:before:shadow-[inset_0px_3px_7px_0px_#45f882] sm:before:opacity-10
            xsm:before:shadow-[inset_0px_3px_7px_0px_#45f882] xsm:before:opacity-10
            ">
        <div @click="handleRedirectLogin" class="tg-border-btn text-[#fff]"><i class="flaticon-edit"></i> ~sing in</div>
      </li>
      <audio ref="audioElementSound">
        <source :src="ClickSound" type="audio/wav" />
      </audio>
      <li @click="playAudio"
        class="side-toggle-icon group relative ml-[25px] flex flex-col min-w-[45px] gap-2.5 cursor-pointer md:hidden">
        <span
          class="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px] group-hover:w-[45px]"></span>
        <span
          class="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[45px] group-hover:w-[45px]"></span>
        <span
          class="block h-[3px] bg-[#fff] transition-all duration-[0.3s] ease-[ease-out] delay-[0s] w-[26px] self-end group-hover:w-[45px]"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import ClickSound from '@/assets/audio/click.wav';
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('users/logout');
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    handleRedirectChangePassword() {
      this.$router.push('/change-password');
    },
    playAudio() {
      this.$refs.audioElementSound.play();
    },
    handleRedirectLogin() {
      this.$router.push('/login');
    },
  },
  data() {
    return {
      ClickSound,
    };
  },
};
</script>

<style lang="scss" scoped></style>

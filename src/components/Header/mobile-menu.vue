<template>
  <div
    :class="
      isShowToggleMobile
        ? 'tgmobile__menu fixed w-[300px] max-w-full h-full z-[99] transition-all duration-[0.3s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] translate-x-[101%] pr-[30px] rounded-none right-[300px] top-0'
        : 'tgmobile__menu fixed w-[300px] max-w-full h-full z-[99] transition-all duration-[0.3s] translate-x-[101%] pr-[30px] rounded-none right-0 top-0'
    "
  >
    <nav
      class="tgmobile__menu-box absolute w-full h-full max-h-full overflow-y-auto overflow-x-hidden z-[5] shadow-[-9px_0_14px_0px_rgba(0,0,0,0.06)] p-0 left-0 top-0 bg-[#0f161b]"
    >
      <div
        @click="handleHideToggle"
        class="close-btn absolute leading-[30px] w-[35px] text-center text-[20px] text-[#45f882] cursor-pointer z-10 transition-all duration-[0.5s] ease-[ease] right-[15px] top-7"
      >
        <i class="flaticon-swords-in-cross-arrangement"></i>
      </div>
      <div class="tgmobile__search pl-[25px] pr-5 pt-0 pb-[25px]"></div>
      <div>
        <menu-component />
      </div>
      <div class="social-links">
        <ul
          class="list-wrap flex relative text-center items-center justify-center flex-wrap gap-3 pt-[30px] pb-5 px-5 m-0"
        >
          <li class="relative block">
            <a
              class="flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882]"
              href="#"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li class="relative block">
            <a
              class="flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882]"
              href="#"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li class="relative block">
            <a
              class="flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882]"
              href="#"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li class="relative block">
            <a
              class="flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882]"
              href="#"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li class="relative block">
            <a
              class="flex items-center justify-center w-10 h-10 relative text-[16px] text-[#fff] transition-all duration-500 ease-[ease] border border-[#22292f] rounded-[3px] border-solid hover:border-[#45f882] hover:text-[#0f161b] hover:bg-[#45f882]"
              href="#"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import MenuComponent from './menu-component.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MobileMenu',
  components: {
    MenuComponent,
  },
  computed: {
    ...mapGetters(['isShowToggleMobile']),
  },
  methods: {
    handleHideToggle() {
      this.$store.dispatch('showToggle/changeShowToggleMobile', false);
    },
  },
};
</script>

<style lang="scss" scoped></style>

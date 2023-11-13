<template>
  <header>
    <div
      id="sticky-header"
      class="!py-4 tg-header__area transparent-header fixed w-full z-[9] h-auto left-0 top-0 transition-all duration-[0.4s] ease-[ease] px-0 lg:py-[25px] md:py-[25px] sm:py-[25px] xsm:py-[25px]"
    >
      <div class="container custom-container">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full basis-full relative px-[15px]">
            <div class="flex itemscenter justify-end">
              <li
                class="cursor-pointer header-btn relative ml-[25px] pl-[25px] xl:hidden xxl:hidden 2xl:hidden marker:hidden"
                v-if="!isLogin"
              >
                <div
                  @click="handleRedirectLogin"
                  class="tg-border-btn text-[#fff] mr-6"
                >
                  <i class="flaticon-edit"></i> ~sign in
                </div>
              </li>

              <audio ref="audioElementSound">
                <source :src="ClickSound" type="audio/wav" />
              </audio>
              <div
                @click="playAudio"
                class="mobile-nav-toggler relative float-right text-[26px] cursor-pointer leading-none text-[#45f882] hidden lg:block md:block sm:block xsm:block border-[#45f882] mt-[3px] px-2.5 py-[5px] border-2 border-solid"
              >
                <i class="fas fa-bars"></i>
              </div>
            </div>
            <div class="tgmenu__wrap">
              <nav
                class="tgmenu__nav flex items-center flex-wrap justify-start lg:justify-between md:justify-between"
              >
                <div
                  class="tgmenu__navbar-wrap tgmenu__main-menu flex grow lg:hidden md:hidden sm:hidden xsm:hidden"
                >
                  <menu-component />
                </div>

                <toggle-search />
              </nav>
            </div>
            <!-- Mobile Menu  -->
            <mobile-menu />
            <div
              class="tgmobile__menu-backdrop fixed w-full h-full z-[2] transition-all duration-700 ease-[ease] opacity-0 invisible right-0 top-0 bg-[rgba(0,0,0,0.5)]"
            ></div>
            <!-- End Mobile Menu -->
          </div>
        </div>
      </div>
    </div>

    <info-company />
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import MenuComponent from './menu-component.vue';
import ToggleSearch from './toggle-search.vue';
import MobileMenu from './mobile-menu.vue';
import InfoCompany from './info-company.vue';
import ClickSound from '@/assets/audio/click.wav';

export default {
  name: 'Headers',
  components: {
    MenuComponent,
    ToggleSearch,
    MobileMenu,
    InfoCompany,
  },
  computed: {
    ...mapGetters(['isLogin']),
  },
  data() {
    return {
      ClickSound,
    };
  },
  methods: {
    handleRedirectLogin() {
      this.$router.push('/login');
    },
    playAudio() {
      console.log('11111');
      this.$refs.audioElementSound.play();
    },
  },
};
</script>

<style lang="scss" scope>
@import './style.scss';
</style>

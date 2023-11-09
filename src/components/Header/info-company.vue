<template>
  <div>
    <!-- offCanvas-area -->
    <div
      class="offCanvas__wrap fixed overflow-y-auto w-[485px] translate-x-full h-full block bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col right-0 top-0">
      <div class="offCanvas__body flex flex-col flex-1">
        <div class="offCanvas__top flex items-center pt-[35px] pb-[25px] px-10 border-b-[#18202a] border-b border-solid">
          <audio ref="audioElementRemove">
            <source :src="RemoveSound" type="audio/wav" />
          </audio>

          <div @click="playRemoveAudio()"
            class="offCanvas__toggle w-[50px] h-[50px] flex items-center justify-center text-[20px] text-[#adb0bc] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ml-auto rounded-[50%] hover:text-[#0f161b] hover:bg-[#45f882]">
            <i class="flaticon-swords-in-cross-arrangement"></i>
          </div>
        </div>
        <div class="offCanvas__content pt-[25px] pb-[50px] px-10">
          <h2 class="title text-3xl tracking-[1px] mt-0 mb-[50px] mx-0">
            Best Seller of Month Ideas for
            <span class="text-[#45f882]">Dreamersland</span>
          </h2>
          <div class="offCanvas__contact mt-0 mb-10 mx-0">
            <h4 class="small-title text-[16px] tracking-[0.5px] font-semibold mt-0 mb-[22px] mx-0">
              CONTACT US
            </h4>
            <ul class="offCanvas__contact-list list-wrap m-0 p-0">
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]">
                <a class="text-[#adb0bc] hover:text-[#45f882]" href="tel:93332225557">+9 333 222 5557</a>
              </li>
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]">
                <a class="text-[#adb0bc] hover:text-[#45f882]" href="mailto:info@webmail.com">info@dreamersland.vn</a>
              </li>
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]">
                Hà Nội
              </li>
            </ul>
          </div>
          <div class="offCanvas__newsletter">
            <h4 class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0">
              Subscribe
            </h4>
            <form action="#" class="offCanvas__newsletter-form relative mt-0 mb-5 mx-0">
              <input type="email" placeholder="Get News & Updates"
                class="block w-full border text-[14px] font-medium transition-all duration-[0.3s] ease-[ease-out] delay-[0s] pl-[22px] pr-20 py-[15px] border-solid border-[#202b36] font-Barlow bg-transparent focus:!ring-[none] focus:!border-[#535d68] focus:border-solid focus:!outline-offset-0 focus:outline-0" />
              <button type="submit"
                class="absolute w-[60px] text-[22px] border-[none] right-0 inset-y-0 bg-transparent before:content-[''] before:absolute before:w-px before:left-0 before:inset-y-1.5 before:bg-[#202b36] group">
                <i class="flaticon-send group-hover:text-[#ffbe18]"></i>
              </button>
            </form>
            <p class="text-[14px] font-medium m-0">
              Subscribe dolor sitamet, consectetur adiping eli. Duis esollici
              tudin augue.
            </p>
          </div>
          <ul
            class="offCanvas__social list-wrap m-0 p-0 flex items-center flex-wrap gap-[10px_28px] mt-[50px] mb-10 mx-0 pt-[30px] pb-0 px-0 border-t-[#202b36] border-t border-solid">
            <li class="leading-none">
              <a class="block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="leading-none">
              <a class="block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li class="leading-none">
              <a class="block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i
                  class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="leading-none">
              <a class="block text-[16px] text-[#fff] hover:text-[#45f882]" href="#"><i class="fab fa-youtube"></i></a>
            </li>
          </ul>
          <div class="offCanvas__newsletter flex gap-[10px]" v-if="isLogin">
            <h4 id="change-password" style="cursor: pointer" @click="handleRedirectChangePassword"
              class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0">
              Đổi mật khẩu
            </h4>
            <h4 id="logout-page" @click="logout" style="cursor: pointer"
              class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0">
              Đăng xuất
            </h4>
          </div>
        </div>
        <div class="offCanvas__copyright mt-auto mb-0 mx-0 px-10 py-[30px] bg-[#090f16]">
          <p class="text-[14px] uppercase font-semibold tracking-[1px] m-0 font-Barlow">
            Copyright © 2023 - By
            <span class="text-[#45f882]">MYKD</span>
          </p>
        </div>
      </div>
    </div>
    <div
      class="offCanvas__overlay fixed w-full h-full z-[99] transition-all duration-700 ease-[ease] opacity-0 invisible cursor-none right-0 top-0 bg-[#111922]">
    </div>
    <!-- offCanvas-area-end -->
  </div>
</template>

<script>
import RemoveSound from '@/assets/audio/remove.wav';
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('users/logout');
      this.$router.push(`/`);
    },
    handleRedirectChangePassword() {
      this.$router.push('/change-password');
    },
    playRemoveAudio() {
      this.$refs.audioElementRemove.play();
    },
  },
  data() {
    return {
      RemoveSound,
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <!-- offCanvas-area -->
    <div
      :class="
        isShowTogglePC
          ? 'fixed overflow-y-hidden w-[485px] translate-x-full h-full  bg-[#0d141b] z-[1020] transition-all duration-[600ms] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] right-[485px] top-0'
          : 'fixed overflow-y-hidden w-[485px] translate-x-full bg-[#0d141b] z-[1020] transition-all duration-[600ms] right-0 top-0'
      "
    >
      <div class="flex flex-col flex-1">
        <div
          class="flex items-center pt-[35px] pb-[25px] px-10 border-b-[#18202a] border-b border-solid"
        >
          <div
            @click="handleHideToggle"
            class="w-[50px] h-[50px] flex items-center justify-center text-[20px] text-[#adb0bc] cursor-pointer transition-all duration-[0.3s] ease-[ease-out] delay-[0s] ml-auto rounded-[50%] hover:text-[#0f161b] hover:bg-[#45f882]"
          >
            <i class="flaticon-swords-in-cross-arrangement"></i>
          </div>
        </div>
        <div class="pt-[25px] pb-[50px] px-10">
          <h2 class="title text-3xl tracking-[1px] mt-0 mb-[50px] mx-0">
            Best Seller of Month Ideas for
            <span class="text-[#45f882]">Dreamersland</span>
          </h2>
          <div class="offCanvas__contact mt-0 mb-10 mx-0">
            <h4
              class="small-title text-[16px] tracking-[0.5px] font-semibold mt-0 mb-[22px] mx-0"
            >
              CONTACT US
            </h4>
            <ul class="offCanvas__contact-list list-wrap m-0 p-0">
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]"
              >
                <a
                  class="text-[#adb0bc] hover:text-[#45f882]"
                  href="tel:93332225557"
                  >+9 333 222 5557</a
                >
              </li>
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]"
              >
                <a
                  class="text-[#adb0bc] hover:text-[#45f882]"
                  href="mailto:info@webmail.com"
                  >info@dreamersland.vn</a
                >
              </li>
              <li
                class="text-[#adb0bc] font-medium relative mt-0 mb-2 mx-0 pl-[23px] before:content-[''] before:absolute before:w-[7px] before:h-[7px] before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:left-0 before:top-[11px] last:m-0 font-Barlow before:bg-[#adb0bc] hover::before:bg-[#45f882]"
              >
                Hà Nội
              </li>
            </ul>
          </div>

          <div class="flex gap-[10px]">
            <h4
              style="cursor: pointer"
              @click="handleRedirectChangePassword"
              class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0"
            >
              Đổi mật khẩu
            </h4>
            <h4
              @click="logout"
              style="cursor: pointer"
              class="small-title text-[16px] tracking-[0.5px] font-semibold text-[#45f882] mt-0 mb-[22px] mx-0"
            >
              Đăng xuất
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div
      @click="handleHideToggle"
      :class="
        !isShowTogglePC
          ? 'fixed w-full h-full z-[99] transition-all duration-700 opacity-0 invisible cursor-none right-0 top-0 bg-[#111922]'
          : 'offCanvas__overlay fixed w-full h-full z-[99] transition-all duration-700 ease-[ease] opacity-0 invisible cursor-none right-0 top-0 bg-[#111922]'
      "
    ></div>
    <!-- offCanvas-area-end -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapGetters(['isShowTogglePC']),
  },
  methods: {
    async logout() {
      await this.$store.dispatch('users/logout');
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      window.location.href = '/login?redirect=${this.$route.fullPath}';
    },
    handleRedirectChangePassword() {
      this.$router.push('/change-password');
      this.handleHideToggle();
    },
    handleHideToggle() {
      this.$store.dispatch('showToggle/changeShowTogglePc', false);
    },
  },
};
</script>

<style lang="scss" scoped></style>

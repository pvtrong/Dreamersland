<template>
  <el-menu-item :index="itemKey"
    class="hover:!border-b-0 !border-b-0 hover:!text-[#46f780] hover:!bg-transparent focus:!bg-transparent focus:!text-[#46f780] text-[15px] font-bold uppercase block leading-none relative tracking-[0.8px] z-[1] font-Barlow"
    @click="redirectPage(pathName)">
    <li
      class="text-[#F3F3F3] h-full menu-item-has-children block relative list-none group lg:group-disabled md:group-disabled sm:group-disabled xsm:group-disabled">
      <a
        class="h-full flex items-center text-[15px] font-bold uppercase text-[#F3F3F3]  leading-none relative tracking-[0.8px] z-[1] font-Barlow before:content-[''] before:absolute before:w-[42px] before:h-px before:-translate-y-2/4 before:rotate-0 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-out] before:delay-[0s] before:mx-auto before:my-0 before:top-2/4 before:inset-x-0 before:bg-[#45f882] group-hover:text-[#45f882]  group-hover:before:opacity-100 group-hover:before:-translate-y-2/4 group-hover:before:rotate-[-40deg]">
        {{ itemName }}
      </a>
    </li>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    itemKey: {
      type: String,
      default: '1',
    },
    itemName: {
      type: String,
      default: '',
    },
    pathName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {};
  },
  methods: {
    redirectPage(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style lang="scss" scoped></style>

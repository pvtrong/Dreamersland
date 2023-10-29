<template>
  <el-menu-item
    :index="itemKey"
    class="hover:!border-b-0 !border-b-0 hover:!text-[#46f780] hover:!bg-transparent focus:!bg-transparent focus:!text-[#46f780] text-[15px] font-bold uppercase block leading-none relative tracking-[0.8px] z-[1] font-Barlow"
    @click="redirectPage(pathName)"
  >
    <li
      class="menu-item-has-children block relative list-none group lg:group-disabled md:group-disabled sm:group-disabled xsm:group-disabled"
    >
      <a> {{ itemName }} </a>
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

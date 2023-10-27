<template>
  <ul class="navigation flex flex-row flex-wrap">
    <el-menu
      :default-active="activeIndex"
      class="bg-transparent !border-b-0"
      mode="horizontal"
      @select="handleSelect"
    >
      <menu-item :pathName="'/'" :itemKey="'1'" :itemName="'Trang Chủ'" />
      <menu-item :pathName="'/users'" :itemKey="'2'" :itemName="'THÔNG TIN GIẢI ĐẤU'" />
      <menu-item :pathName="'/rank'"  :itemKey="'3'" :itemName="'Bảng xếp hạng'" />
      <menu-item :pathName="'/users'" :itemKey="'4'" :itemName="'NGƯỜI CHƠI'" />
      <menu-item :pathName="'/users'" :itemKey="'5'" :itemName="'Trận đấu'" />
      <menu-item :pathName="'/users'" :itemKey="'6'" :itemName="'HALL OF FAME'" />
      <menu-item :pathName="'/users'" :itemKey="'7'" :itemName="'NHIỆM VỤ'" />
    </el-menu>
  </ul>
</template>

<script>
import MenuItem from './menu-item.vue';

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath;
    },
  },
};
</script>

<style lang="scss" scoped></style>

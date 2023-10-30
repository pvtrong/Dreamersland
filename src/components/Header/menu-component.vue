<template>
  <ul class="navigation flex flex-row flex-wrap">
    <el-menu
      :default-active="activeIndex"
      class="bg-transparent !border-b-0"
      mode="horizontal"
      @select="handleSelect"
    >
      <menu-item
        v-for="menu in menuItems"
        :key="menu.itemKey"
        :pathName="menu.pathName"
        :itemKey="menu.itemKey"
        :itemName="menu.itemName"
      />
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
      menuItems: [
        {
          pathName: '/',
          itemKey: '1',
          itemName: 'Trang Chủ',
        },
        {
          pathName: '/info-tournament',
          itemKey: '2',
          itemName: 'THÔNG TIN GIẢI ĐẤU',
        },
        {
          pathName: '/rank',
          itemKey: '3',
          itemName: 'Bảng xếp hạng',
        },
        {
          pathName: '/users',
          itemKey: '4',
          itemName: 'NGƯỜI CHƠI',
        },
        {
          pathName: '/tournament',
          itemKey: '5',
          itemName: 'Trận đấu',
        },
        {
          pathName: '/hall-of-fame',
          itemKey: '6',
          itemName: 'HALL OF FAME',
        },
        {
          pathName: '/tasks',
          itemKey: '7',
          itemName: 'NHIỆM VỤ',
        },
      ],
    };
  },
  created() {
    const namePathKey = this.menuItems.find(
      (item) => item.pathName === this.$router.currentRoute.path
    )?.itemKey;
    this.activeIndex = namePathKey;
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath?.at(0);
    },
  },
};
</script>

<style lang="scss" scoped></style>

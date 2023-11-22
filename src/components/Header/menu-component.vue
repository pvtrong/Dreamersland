<template>
  <ul class="navigation flex flex-row flex-wrap">
    <el-menu :default-active="activeMenuItem" class="bg-transparent !border-b-0" mode="horizontal" @select="handleSelect">
      <menu-item v-for="menu in menuItems" :key="menu.itemKey" :pathName="menu.pathName" :itemKey="menu.itemKey"
        :itemName="menu.itemName" />
    </el-menu>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import MenuItem from './menu-item.vue';

export default {
  components: {
    MenuItem,
  },
  computed: {
    ...mapGetters(['activeMenuItem']),
  },
  data() {
    return {
      // activeIndex: '1',
      menuItems: [
        {
          pathName: '/',
          itemKey: '1',
          itemName: 'Trang Chủ',
        },
        // {
        //   pathName: '/info-tournament',
        //   itemKey: '2',
        //   itemName: 'THÔNG TIN GIẢI ĐẤU',
        // },
        {
          pathName: '/rank',
          itemKey: '3',
          itemName: 'Bảng xếp hạng',
        },
        {
          pathName: '/players',
          itemKey: '4',
          itemName: 'NGƯỜI CHƠI',
        },
        // {
        //   pathName: '/tournament',
        //   itemKey: '5',
        //   itemName: 'Trận đấu',
        // },
        // {
        //   pathName: '/hall-of-fame',
        //   itemKey: '6',
        //   itemName: 'HALL OF FAME',
        // },
        {
          pathName: '/tasks',
          itemKey: '7',
          itemName: 'NHIỆM VỤ',
        },
      ],
    };
  },
  created() {
    const parentPath = this.$router.currentRoute.path.split('/');
    const namePathKey = this.menuItems.find(
      (item) => item.pathName === `/${parentPath?.at(1)}`
    )?.itemKey;

    this.$store
      .dispatch('app/setActiveMenuItem', namePathKey);
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store
        .dispatch('app/setActiveMenuItem', keyPath?.at(0));
    },
  },
};
</script>

<style lang="scss" scoped></style>

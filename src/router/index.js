import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const GUARD = {
  GUEST: 'GUEST',
  AUTH: 'AUTH',
};
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        name: 'Trang chủ',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Trang chủ', icon: 'dashboard', guard: GUARD.GUEST },
      },
      {
        path: '/change-password',
        name: 'Thay đổi mật khẩu',
        component: () => import('@/views/changePassword/index'),
        meta: {
          title: 'Bảng xếp hạng',
          guard: GUARD.AUTH,
        },
      },
      {
        path: '/rank',
        name: 'Bảng xếp hạng',
        component: () => import('@/views/rank/index'),
        meta: {
          title: 'Bảng xếp hạng',
          guard: GUARD.GUEST,
        },
      },
      {
        path: '/players',
        name: 'Danh sách những người chơi',
        component: () => import('@/views/players/index'),
        meta: {
          title: 'Danh sách những người chơi',
          guard: GUARD.GUEST,
        },
      },
      {
        path: '/players/:id',
        name: 'Chi tiết người chơi',
        component: () => import('@/views/players/player-detail/index'),
        meta: {
          title: 'Chi tiết người chơi',
          guard: GUARD.GUEST,
        },
      },
      {
        path: '/tasks',
        name: 'Danh sách nhiệm vụ',
        component: () => import('@/views/tasks/index'),
        meta: {
          title: 'Danh sách nhiệm vụ',
          guard: GUARD.GUEST,
        },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

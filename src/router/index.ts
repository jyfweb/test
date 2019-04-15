/*
 * @Author: jyf
 * @LastEditors: jyf
 * @Date: 2019-04-01 13:55:34
 * @LastEditTime: 2019-04-12 17:11:08
 */
import Vue from 'vue'
import Router from 'vue-router'
import stores from '../vuex/index'
import user_permissions from "../common/util/user_permissions"
const NoPermission = r => require.ensure([], () => r(require('@/views/NoPermission/NoPermissionPanel.vue')));
const Login = r => require.ensure([], () => r(require('@/views/Login.vue')));
const Home = r => require.ensure([], () => r(require('@/views/layout/Home.vue')));
const OpenApiManager = r => require.ensure([], () => r(require('@/views/openapi/Manager.vue')));
const LogisticsManager = r => require.ensure([], () => r(require('@/views/LogisticsManagement/Manager.vue')));
const LogisticsManager2 = r => require.ensure([], () => r(require('@/views/LogisticsManagement/Manager2.vue')));
const userManager = r => require.ensure([], () => r(require('@/views/userManagement/Manager.vue')));
Vue.use(Router)



export const routes = [
  {
    path: "/",
    hidden: true,
    redirect: {
      name: "login"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    hidden: true
  },
  { path: '*', component: Login },

]

export const asyncRouterMap = [
  {
    path: "/OpenApi",
    name: 'OpenApi',
    component: Home,
    leaf: true,
    meta: {
      permissions: ['p_1']
    },
    children: [
      {
        path: '/OpenApi/OpenApiManager',
        component: OpenApiManager,
        name: 'OpenApi',
        meta: {
          title: "OpenApi",
          permissions: ['p_1_1']
        }
      }
    ]
  },
  {
    path: "/Logistics",
    name: 'Logistics',
    component: Home,
    leaf: false,
    meta: {
      permissions: ['p_2']
    },
    children: [
      {
        path: '/Logistics/LogisticsManager',
        component: LogisticsManager,
        name: 'LogisticsManager',
        meta: {
          title: "LogisticsManager",
          permissions: ['p_2_1']
        }
      },
      {
        path: '/Logistics/LogisticsManager2',
        component: LogisticsManager2,
        name: 'LogisticsManager2',
        meta: {
          title: "LogisticsManager2",
          permissions: ['p_2_2']
        }
      }
    ]
  },
  {
    path: "/user",
    name: '用户管理',
    component: Home,
    leaf: true,
    meta: {
      permissions: ['p_3']
    },
    children: [
      {
        path: '/user/userManager',
        component: userManager,
        name: '用户管理',
        meta: {
          title: "用户管理",
          permissions: ['p_3_1']
        }
      }
    ]
  },

  {
    path: "/NoPermission",
    name: 'NoPermission',
    component: Home,
    leaf: true,
    hidden: true,
    meta: {
      permissions: ['p_no']
    },
    children: [
      {
        path: '/NoPermission/page',
        component: NoPermission,
        name: 'NoPermission',
        meta: {
          title: "NoPermission",
          permissions: ['p_page']
        }
      }
    ]
  }
]

const router = new Router({
  routes
})
router.addRoutes(asyncRouterMap);
router.beforeEach((to, from, next) => {

  let jwtToken = sessionStorage.getItem('jwtToken');
  stores.state.jwtToken = jwtToken;
  if (!stores.state.jwtToken && to.path !== '/login') {// 判断是否登录
    next({
      path: '/login',
    });
  } else {
    stores.dispatch('getPermissionList');

    const { permissions } = to.meta;
    if (permissions) {
      // 判断的权限列表
      const hasPermission = user_permissions.includePermission(permissions)
      console.log(hasPermission);

      if (!hasPermission) {
        next({
          path: '/NoPermission/page',
        });
        return;
      }else{
        next()
      }
    }
    
    next()
  }

})
export default router
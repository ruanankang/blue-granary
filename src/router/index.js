import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  // 系统功能
  {
    path: "/",
    component: Layout,
    meta: {
      title: "系统功能",
      icon: "system-functions"
    },
    children: [
      {
        path: "data-collection",
        name: "data-collection",
        component: () => import("@/views/system-functions/data-collection"),
        meta: {
          title: "数据采集"
        }
      },
      {
        path: "data-management",
        name: "data-management",
        component: () => import("@/views/system-functions/data-management"),
        meta: {
          title: "数据管理"
        }
      },
      {
        path: "user-management",
        name: "user-management",
        component: () => import("@/views/system-functions/user-management"),
        meta: {
          title: "用户管理"
        }
      },
      {
        path: "system-config",
        name: "system-config",
        component: () => import("@/views/system-functions/system-config"),
        meta: {
          title: "系统配置"
        }
      },
      {
        path: "instruction",
        name: "instruction",
        component: () => import("@/views/system-functions/instruction"),
        meta: {
          title: "使用说明"
        }
      }
    ]
  },
  // 重定向页面必须放在最后
  {
    path: "*",
    redirect: "/404",
    hidden: true
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

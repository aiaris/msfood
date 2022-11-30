import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/notelist/",
    props: true,
    name: "notelist",
    component: () => import("../views/NoteList.vue"),
    meta: {
      title: "美食天下-笔记列表页",
    },
  },

  {
    path: "/shar",
    props: true,
    name: "shar",
    component: () => import("../views/Shar.vue"),
    meta: {
      title: "美食天下-笔记详情页",
    },
  },
  {
    path: "/yszc",
    name: "yszc",
    component: () => import("../views/Yszc.vue"),
    meta: {
      title: "美食天下-隐私政策页",
      hideHead: true,
      hideFooter: true,
    },
  },
  {
    path: "/yhxy",
    name: "yhxy",
    component: () => import("../views/Yhxy.vue"),
    meta: {
      title: "美食天下-用户协议页",
      hideHead: true,
      hideFooter: true,
    },
  },
  {
    path: "/mobile",
    name: "mobile",
    component: () => import("../views/Mobile.vue"),
    meta: {
      title: "美食天下-客户端下载页",
    },
  },
  {
    path: "/get_pwd/:uid",
    props: true,
    name: "getpwd",
    component: () => import("../views/Getpwd.vue"),
    meta: {
      title: "美食天下-找回密码页",
    },
  },
  {
    path: "/for_get",
    name: "forget",
    component: () => import("../views/Forget.vue"),
    meta: {
      title: "美食天下-找回密码页",
    },
  },
  {
    path: "/menu_search/:mname?",
    props: true,
    name: "/menu_search",
    component: () => import("../views/MenuSearch.vue"),
    meta: { title: "美食天下-菜品搜索页" },
  },
  {
    path: "/center",
    name: "Center",
    component: () => import("../views/Center.vue"),
    meta: {
      hideHeader: true,
      title: "美食天下-个人中心页",
    },
    redirect: "/center/member",
    children: [
      {
        path: "recipe",
        name: "Recipe",
        component: () => import("../views/center/Recipe.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "member",
        name: "Member",
        component: () => import("../views/center/Member.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "myblog",
        name: "Myblog",
        component: () => import("../views/center/Myblog.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "mycollect",
        name: "Mycollecte",
        component: () => import("../views/center/Mycollect.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "myfav",
        name: "Myfav",
        component: () => import("../views/center/Myfav.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "myset",
        name: "Myset",
        component: () => import("../views/center/Myset.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
      {
        path: "create",
        name: "create",
        component: () => import("../views/center/create.vue"),
        meta: {
          hideHeader: true,
          title: "美食天下-个人中心页",
        },
      },
    ],
  },
  {
    path: "/food-detail/:mid",
    name: "fooddetail",
    props: true,
    component: () => import("../views/FoodDetail.vue"),
    meta: {
      title: "美食天下-菜单详情页",
    },
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/MyMenu.vue"),
    meta: {
      title: "美食天下-菜单列表页",
      keepAlive: true,
    },
  },
  {
    path: "*",
    name: "not404",
    component: () => import("../views/Not404.vue"),
    meta: {
      hideHead: true,
      hideFooter: true,
      title: "美食天下-错误页",
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: {
      keepAlive: true,
      hideFooter: true,
      title: "美食天下-注册页",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      keepAlive: true,
      hideFooter: true,
      title: "美食天下-登录页",
    },
  },
  {
    path: "/food",
    name: "food",
    component: () => import("../views/Food.vue"),
    meta: {
      title: "美食天下-食材首页页",
    },
  },
  {
    path: "/foodsort",
    name: "foodsort",
    component: () => import("../views/FoodSort.vue"),
    meta: {
      title: "美食天下-食材分类页",
    },
  },
  {
    path: "/health_search/:httile?",
    props: true,
    name: "health_search",
    component: () => import("../views/HealthSearch.vue"),
    meta: {
      title: "美食天下-健康搜索页",
    },
  },
  {
    path: "/health_detail/:hid",
    props: true,
    name: "health_detail",
    component: () => import("../views/HealthDetail.vue"),
    meta: {
      title: "美食天下-健康详情页",
    },
  },
  {
    path: "/health",
    name: "health",
    component: () => import("../views/Health.vue"),
    meta: {
      keepAlive: true,
      title: "美食天下-健康列表页",
    },
  },
  {
    path: "/",
    name: "home",
    component: Index,
    meta: {
      keepAlive: true,
      title: "美食天下-首页",
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    // Cú pháp bên dưới giúp lazyload component, không được load ngay từ đầu mà phải được gọi
    // webpackChunkName: quy định những file t../views/register.vueạo ở router mẹ
    // Hỗ trợ tốt cho việc debug, lưu ý với trang ít cần debug thì không nhất thiết phải thêm webpackChunkName
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

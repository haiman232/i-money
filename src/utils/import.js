//File này chuyên để import dạng global
//Khi nào cần thì mới gọi tới
//Phải là defineAsyncComponent để chạy đồng bộ
import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}

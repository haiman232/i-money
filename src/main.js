import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponent } from "./utils/import.js";

const app = createApp(App);
registerGlobalComponent(app);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaFlag,
  RiZhihuFill,
  BiInstagram,
  RiYoutubeLine,
  BiLinkedin,
  BiGithub,
} from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill, BiInstagram, RiYoutubeLine, BiLinkedin, BiGithub);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

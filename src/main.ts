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
  IoBulbSharp,
  BiArrowBarDown,
  MdFilecopyOutlined,
  CoHtml5Shield,
  FaCss3Alt,
  CoJavascript,
  CoTypescript,
  CoReact,
  CoVueJs,
} from "oh-vue-icons/icons";

addIcons(
  FaFlag,
  RiZhihuFill,
  BiInstagram,
  RiYoutubeLine,
  BiLinkedin,
  BiGithub,
  IoBulbSharp,
  BiArrowBarDown,
  MdFilecopyOutlined,
  CoHtml5Shield,
  FaCss3Alt,
  CoJavascript,
  CoTypescript,
  CoReact,
  CoVueJs
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");

import DynamicTitle from './components/DynamicTitle.vue'
import { defineClientAppEnhance } from "@vuepress/client";

export default defineClientAppEnhance(({ app}) => {
  app.component('DynamicTitle', DynamicTitle)
});


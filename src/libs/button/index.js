import Button from "./index.vue";
import { App } from "vue";

// 导出Button组件
export { Button };

// 导出Vue插件
export default {
  install(app) {
    app.component(Button.name, Button);
  },
};

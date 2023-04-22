import { h, render } from "vue";
import messageComponent from "./index.vue.js";
const message = (type, content, duration = 3e3) => {
  const onDestroy = () => {
    render(null, document.body);
  };
  const vnode = h(messageComponent, {
    type,
    content,
    duration,
    destroy: onDestroy
  });
  render(vnode, document.body);
};
export {
  message as default
};

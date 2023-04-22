import { h, render } from "vue";
import confirmComponent from "./index.vue.js";
const confirm = (title, content, cancelText = "取消", confirmText = "确定") => {
  return new Promise((resolve, reject) => {
    if (title && !content) {
      content = title;
      title = "";
    }
    const close = () => {
      render(null, document.body);
    };
    const cancelHandler = () => {
      reject(new Error("取消按钮点击"));
    };
    const confirmHandler = () => {
      resolve();
    };
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    });
    render(vnode, document.body);
  });
};
export {
  confirm as default
};

"use strict";
const vue = require("vue");
const index = require("./index.vue.js");
const confirm = (title, content, cancelText = "取消", confirmText = "确定") => {
  return new Promise((resolve, reject) => {
    if (title && !content) {
      content = title;
      title = "";
    }
    const close = () => {
      vue.render(null, document.body);
    };
    const cancelHandler = () => {
      reject(new Error("取消按钮点击"));
    };
    const confirmHandler = () => {
      resolve();
    };
    const vnode = vue.h(index, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    });
    vue.render(vnode, document.body);
  });
};
module.exports = confirm;

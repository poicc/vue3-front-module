"use strict";
const vue = require("vue");
const index = require("./index.vue.js");
const message = (type, content, duration = 3e3) => {
  const onDestroy = () => {
    vue.render(null, document.body);
  };
  const vnode = vue.h(index, {
    type,
    content,
    duration,
    destroy: onDestroy
  });
  vue.render(vnode, document.body);
};
module.exports = message;

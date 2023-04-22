"use strict";
const vue = require("vue");
const _hoisted_1 = { "aria-hidden": "true" };
const _hoisted_2 = ["xlink:href", "fill"];
const _sfc_main = {
  name: "index",
  props: {
    // 显示的 svg
    name: {
      type: String,
      required: true
    },
    // svg图标的颜色
    color: {
      type: String
    },
    // tailwind 指定 svg
    fillClass: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const symbolId = vue.computed(() => `#icon-${props.name}`);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, [
        vue.createElementVNode("use", {
          "xlink:href": vue.unref(symbolId),
          class: vue.normalizeClass(__props.fillClass),
          fill: __props.color
        }, null, 10, _hoisted_2)
      ]);
    };
  }
};
module.exports = _sfc_main;

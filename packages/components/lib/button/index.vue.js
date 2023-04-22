"use strict";
const vue = require("vue");
const index = require("../svg-icon/index.vue.js");
const _hoisted_1 = ["onClick"];
const EMITS_CLICK = "click";
const typeEnum = {
  primary: "text-white  bg-zinc-800 dark:bg-zinc-900  hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700",
  main: "text-white  bg-main dark:bg-zinc-900  hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700",
  info: "text-zinc-800 dark:text-zinc-300  bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700 "
};
const sizeEnum = {
  // 文字按钮
  default: {
    button: "w-8 h-4 text-base",
    icon: ""
  },
  // icon按钮
  "icon-default": {
    button: "w-4 h-4",
    icon: "w-1.5 h-1.5"
  },
  small: {
    button: "w-7 h-3 text-base",
    icon: ""
  },
  "icon-small": {
    button: "w-3 h-3",
    icon: "w-1.5 h-1.5"
  }
};
const _sfc_main = {
  name: "index",
  props: {
    // icon图标
    icon: String,
    // icon颜色
    iconColor: String,
    // icon图标类名
    iconClass: String,
    // 按钮风格
    type: {
      type: String,
      default: "main",
      validator(val) {
        const keys = Object.keys(typeEnum);
        const res = keys.includes(val);
        if (!res) {
          throw new Error(`你的 type 必须是 ${keys.join("、")}中的一个`);
        }
        return res;
      }
    },
    // 大小风格
    size: {
      type: String,
      default: "default",
      validator(val) {
        const keys = Object.keys(sizeEnum).filter((key) => !key.includes("icon"));
        const res = keys.includes(val);
        if (!res) {
          throw new Error(`你的 size 必须是 ${keys.join("、")}中的一个`);
        }
        return res;
      }
    },
    // 按钮点击时 是否需要动画
    isActiveAnim: {
      type: Boolean,
      default: true
    },
    // 加载状态
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: [EMITS_CLICK],
  setup(__props, { emit: emits }) {
    const props = __props;
    const sizeKey = vue.computed(() => {
      return props.icon ? "icon-" + props.size : props.size;
    });
    const onBtnClick = () => {
      if (props.loading)
        return;
      emits(EMITS_CLICK);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["text-sm text-center rounded duration-150 flex justify-center items-center", [
          typeEnum[__props.type],
          sizeEnum[vue.unref(sizeKey)].button,
          {
            "active:scale-105": __props.isActiveAnim
          }
        ]]),
        onClick: vue.withModifiers(onBtnClick, ["stop"])
      }, [
        __props.loading ? (vue.openBlock(), vue.createBlock(index, {
          key: 0,
          name: "loading",
          class: "w-2 h-2 animate-spin mr-1"
        })) : vue.createCommentVNode("", true),
        __props.icon ? (vue.openBlock(), vue.createBlock(index, {
          key: 1,
          name: __props.icon,
          class: vue.normalizeClass(["m-auto", sizeEnum[vue.unref(sizeKey)].icon]),
          color: __props.iconColor,
          fillClass: __props.iconClass
        }, null, 8, ["name", "class", "color", "fillClass"])) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 10, _hoisted_1);
    };
  }
};
module.exports = _sfc_main;

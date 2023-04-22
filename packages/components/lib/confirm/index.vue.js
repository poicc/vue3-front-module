"use strict";
const vue = require("vue");
const index = require("../button/index.vue.js");
require("./index.vue2.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = {
  key: 0,
  class: "w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"
};
const _hoisted_2 = { class: "text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2" };
const _hoisted_3 = { class: "text-base text-zinc-900 dark:text-zinc-200 mb-2" };
const _hoisted_4 = { class: "flex justify-end" };
const _sfc_main = {
  name: "index",
  props: {
    // 标题
    title: {
      type: String
    },
    // 描述
    content: {
      type: String,
      required: true
    },
    // 取消按钮文本
    cancelText: {
      type: String,
      default: "取消"
    },
    // 确定按钮文本
    confirmText: {
      type: String,
      default: "确定"
    },
    // 取消按钮事件
    cancelHandler: {
      type: Function
    },
    // 确定按钮事件
    confirmHandler: {
      type: Function
    },
    // 关闭 confirm 的回调
    close: {
      type: Function
    }
  },
  setup(__props) {
    const props = __props;
    vue.useCssVars((_ctx) => ({
      "4710ffa0": duration
    }));
    const isVisable = vue.ref(false);
    const show = () => {
      isVisable.value = true;
    };
    vue.onMounted(() => {
      show();
    });
    const duration = "0.5s";
    const onCancelClick = () => {
      if (props.cancelHandler) {
        props.cancelHandler();
      }
      close();
    };
    const onConfirmClick = () => {
      if (props.confirmHandler) {
        props.confirmHandler();
      }
      close();
    };
    const close = () => {
      isVisable.value = false;
      setTimeout(() => {
        if (props.close) {
          props.close();
        }
      }, parseInt(duration.replace("0.", "").replace("s", "") * 100));
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            isVisable.value ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              onClick: close,
              class: "w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
            })) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }),
        vue.createVNode(vue.Transition, { name: "up" }, {
          default: vue.withCtx(() => [
            isVisable.value ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(__props.title), 1),
              vue.createElementVNode("div", _hoisted_3, vue.toDisplayString(__props.content), 1),
              vue.createElementVNode("div", _hoisted_4, [
                vue.createVNode(index, {
                  type: "info",
                  class: "mr-2",
                  onClick: onCancelClick
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(index, {
                  type: "primary",
                  onClick: onConfirmClick
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : vue.createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const confirmComponent = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-4f465e3e"]]);
module.exports = confirmComponent;

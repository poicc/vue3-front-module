"use strict";
const vue = require("vue");
const index$1 = require("../button/index.vue.js");
const index = require("../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js");
require("./index.vue2.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = {
  key: 0,
  class: "max-w-[80%] max-h-[80%] overflow-auto fixed top-[10%] left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:min-w-[35%]"
};
const _hoisted_2 = {
  key: 0,
  class: "text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2"
};
const _hoisted_3 = { class: "text-base text-zinc-900 dark:text-zinc-200 mb-2" };
const _hoisted_4 = {
  key: 1,
  class: "flex justify-end"
};
const _sfc_main = {
  name: "index",
  props: {
    // 控制开关
    modelValue: {
      type: Boolean,
      required: true
    },
    // 标题
    title: {
      type: String
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
    // 取消按钮点击事件
    cancelHandler: {
      type: Function
    },
    // 确定按钮点击事件
    confirmHandler: {
      type: Function
    },
    // 关闭的回调
    close: {
      type: Function
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const isVisable = index.useVModel(props);
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
      if (props.close) {
        props.close();
      }
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(vue.Transition, { name: "fade" }, {
          default: vue.withCtx(() => [
            vue.unref(isVisable) ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              onClick: close,
              class: "w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
            })) : vue.createCommentVNode("", true)
          ]),
          _: 1
        }),
        vue.createVNode(vue.Transition, { name: "up" }, {
          default: vue.withCtx(() => [
            vue.unref(isVisable) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              __props.title ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, vue.toDisplayString(__props.title), 1)) : vue.createCommentVNode("", true),
              vue.createElementVNode("div", _hoisted_3, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              __props.cancelHandler || __props.confirmHandler ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                vue.createVNode(index$1, {
                  type: "info",
                  class: "mr-2",
                  onClick: onCancelClick
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }),
                vue.createVNode(index$1, {
                  type: "primary",
                  onClick: onConfirmClick
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                })
              ])) : vue.createCommentVNode("", true)
            ])) : vue.createCommentVNode("", true)
          ]),
          _: 3
        })
      ]);
    };
  }
};
const PoiDialog = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-b2cff74e"]]);
module.exports = PoiDialog;

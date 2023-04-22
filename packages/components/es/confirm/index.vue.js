import { useCssVars, ref, onMounted, openBlock, createElementBlock, createVNode, Transition, withCtx, createCommentVNode, createElementVNode, toDisplayString, createTextVNode } from "vue";
import _sfc_main$1 from "../button/index.vue.js";
import "./index.vue2.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
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
    useCssVars((_ctx) => ({
      "4710ffa0": duration
    }));
    const isVisable = ref(false);
    const show = () => {
      isVisable.value = true;
    };
    onMounted(() => {
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
      return openBlock(), createElementBlock("div", null, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            isVisable.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              onClick: close,
              class: "w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "up" }, {
          default: withCtx(() => [
            isVisable.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createElementVNode("div", _hoisted_2, toDisplayString(__props.title), 1),
              createElementVNode("div", _hoisted_3, toDisplayString(__props.content), 1),
              createElementVNode("div", _hoisted_4, [
                createVNode(_sfc_main$1, {
                  type: "info",
                  class: "mr-2",
                  onClick: onCancelClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  type: "primary",
                  onClick: onConfirmClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const confirmComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f465e3e"]]);
export {
  confirmComponent as default
};

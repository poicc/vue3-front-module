"use strict";
const vue = require("vue");
const index = require("../svg-icon/index.vue.js");
require("./index.vue2.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const SUCCESS = "success";
const WARN = "warn";
const ERROR = "error";
const typeEnum = [SUCCESS, WARN, ERROR];
const _sfc_main = {
  name: "index",
  props: {
    /**
     * 消息类型
     */
    type: {
      type: String,
      required: true,
      validator(val) {
        const result = typeEnum.includes(val);
        if (!result) {
          throw new Error(`你的 type 必须是 ${typeEnum.join(" ")} 中的一个`);
        }
        return result;
      }
    },
    /**
     * 描述文本
     */
    content: {
      type: String,
      required: true
    },
    // 展示时长
    duration: {
      type: Number
    },
    // 关闭的回调
    destory: {
      type: Function
    }
  },
  setup(__props) {
    const props = __props;
    vue.useCssVars((_ctx) => ({
      "8348f7de": animDuration
    }));
    const styles = {
      // 警告
      warn: {
        icon: "warn",
        fillClass: "fill-warn-300",
        textClass: "text-warn-300",
        containerClass: "bg-warn-100 border-warn-200  hover:shadow-lg hover:shadow-warn-100"
      },
      // 错误
      error: {
        icon: "error",
        fillClass: "fill-error-300",
        textClass: "text-error-300",
        containerClass: "bg-error-100 border-error-200  hover:shadow-lg hover:shadow-error-100"
      },
      // 成功
      success: {
        icon: "success",
        fillClass: "fill-success-300",
        textClass: "text-success-300",
        containerClass: "bg-success-100 border-success-200  hover:shadow-lg hover:shadow-success-100"
      }
    };
    const isVisable = vue.ref(false);
    const animDuration = "0.5s";
    vue.onMounted(() => {
      isVisable.value = true;
      setTimeout(() => {
        isVisable.value = false;
        setTimeout(() => {
          if (props.destory) {
            props.destory();
          }
        }, parseInt(animDuration.replace("0.", "").replace("s", "") * 100));
      }, props.duration);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, { name: "down" }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            class: vue.normalizeClass(["min-w-[420px] fixed top-[20px] left-[50%] translate-x-[-50%] z-50 flex items-center px-3 py-1.5 rounded-sm border cursor-pointer", styles[__props.type].containerClass])
          }, [
            vue.createVNode(index, {
              name: styles[__props.type].icon,
              fillClass: styles[__props.type].fillClass,
              class: "h-1.5 w-1.5 mr-1.5"
            }, null, 8, ["name", "fillClass"]),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(["text-sm", styles[__props.type].textClass])
            }, vue.toDisplayString(__props.content), 3)
          ], 2), [
            [vue.vShow, isVisable.value]
          ])
        ]),
        _: 1
      });
    };
  }
};
const messageComponent = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-9ad5f24e"]]);
module.exports = messageComponent;

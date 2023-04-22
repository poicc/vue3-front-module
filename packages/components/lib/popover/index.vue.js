"use strict";
const vue = require("vue");
require("./index.vue2.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const DALEY_TIME = 100;
const PROP_TOP_LEFT = "top-left";
const PROP_TOP_RIGHT = "top-right";
const PROP_BOTTOM_LEFT = "bottom-left";
const PROP_BOTTOM_RIGHT = "bottom-right";
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
];
const _sfc_main = {
  name: "index",
  props: {
    // 控制气泡弹出位置
    placement: {
      type: String,
      default: PROP_BOTTOM_LEFT,
      validator(val) {
        const res = placementEnum.includes(val);
        if (!res) {
          throw new Error(
            `你的 placement 必须上 ${placementEnum.join("、")}中的一个`
          );
        }
        return res;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const isVisable = vue.ref(false);
    let timeout;
    const onMouseenter = () => {
      isVisable.value = true;
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    const onMouseleave = () => {
      timeout = setTimeout(() => {
        isVisable.value = false;
        timeout = null;
      }, DALEY_TIME);
    };
    const referenceTarget = vue.ref(null);
    const contentTarget = vue.ref(null);
    const useElementSize = (target) => {
      if (!target)
        return {};
      return {
        width: target.offsetWidth,
        height: target.offsetHeight
      };
    };
    const contentStyle = vue.ref({
      top: 0,
      left: 0
    });
    vue.watch(isVisable, (val) => {
      if (!val)
        return;
      vue.nextTick(() => {
        switch (props.placement) {
          case PROP_TOP_LEFT:
            contentStyle.value.top = 0;
            contentStyle.value.left = -useElementSize(contentTarget.value).width + "px";
            break;
          case PROP_TOP_RIGHT:
            contentStyle.value.top = 0;
            contentStyle.value.left = useElementSize(referenceTarget.value).width + "px";
            break;
          case PROP_BOTTOM_LEFT:
            contentStyle.value.top = useElementSize(referenceTarget.value).height + "px";
            contentStyle.value.left = -useElementSize(contentTarget.value).width + "px";
            break;
          case PROP_BOTTOM_RIGHT:
            contentStyle.value.top = useElementSize(referenceTarget.value).height + "px";
            contentStyle.value.left = useElementSize(referenceTarget.value).width + "px";
            break;
        }
        console.log(contentStyle.value);
      });
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "relative",
        onMouseenter,
        onMouseleave
      }, [
        vue.createElementVNode("div", {
          ref_key: "referenceTarget",
          ref: referenceTarget
        }, [
          vue.renderSlot(_ctx.$slots, "reference", {}, void 0, true)
        ], 512),
        vue.createVNode(vue.Transition, { name: "slide" }, {
          default: vue.withCtx(() => [
            vue.withDirectives(vue.createElementVNode("div", {
              ref_key: "contentTarget",
              ref: contentTarget,
              class: "absolute p-1 z-20 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-md",
              style: vue.normalizeStyle(contentStyle.value)
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 4), [
              [vue.vShow, isVisable.value]
            ])
          ]),
          _: 3
        })
      ], 32);
    };
  }
};
const PoiPopover = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-c80cfe97"]]);
module.exports = PoiPopover;

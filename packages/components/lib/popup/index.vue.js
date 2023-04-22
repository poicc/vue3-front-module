"use strict";
const vue = require("vue");
const index = require("../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js");
require("./index.vue2.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _sfc_main = {
  name: "index",
  props: {
    modelValue: {
      required: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const isVisable = index.useVModel(props);
    const isLocked = index.useScrollLock(document.body);
    vue.watch(
      () => isVisable,
      (val) => {
        isLocked.value = !val;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
          vue.createVNode(vue.Transition, { name: "fade" }, {
            default: vue.withCtx(() => [
              vue.unref(isVisable) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0",
                onClick: _cache[0] || (_cache[0] = ($event) => isVisable.value = false)
              })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, { name: "popup-down-up" }, {
            default: vue.withCtx(() => [
              vue.unref(isVisable) ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({ key: 0 }, _ctx.$attrs, { class: "w-screen bg-white dark:bg-zinc-900 z-50 fixed bottom-0" }), [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ], 16)) : vue.createCommentVNode("", true)
            ]),
            _: 3
          })
        ]))
      ]);
    };
  }
};
const PoiPopup = /* @__PURE__ */ _pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-664117ef"]]);
module.exports = PoiPopup;

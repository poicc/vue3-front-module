import { watch, openBlock, createElementBlock, createBlock, Teleport, createVNode, Transition, withCtx, unref, createCommentVNode, mergeProps, renderSlot } from "vue";
import { useVModel, useScrollLock } from "../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js";
import "./index.vue2.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
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
    const isVisable = useVModel(props);
    const isLocked = useScrollLock(document.body);
    watch(
      () => isVisable,
      (val) => {
        isLocked.value = !val;
      },
      {
        immediate: true
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              unref(isVisable) ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0",
                onClick: _cache[0] || (_cache[0] = ($event) => isVisable.value = false)
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(Transition, { name: "popup-down-up" }, {
            default: withCtx(() => [
              unref(isVisable) ? (openBlock(), createElementBlock("div", mergeProps({ key: 0 }, _ctx.$attrs, { class: "w-screen bg-white dark:bg-zinc-900 z-50 fixed bottom-0" }), [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ], 16)) : createCommentVNode("", true)
            ]),
            _: 3
          })
        ]))
      ]);
    };
  }
};
const PoiPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-664117ef"]]);
export {
  PoiPopup as default
};

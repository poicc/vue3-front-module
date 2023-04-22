"use strict";
const vue = require("vue");
const index$1 = require("../svg-icon/index.vue.js");
const index = require("../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js");
const _hoisted_1 = {
  key: 0,
  class: "text-center text-base text-zinc-400"
};
const _sfc_main = {
  name: "index",
  props: {
    // 是否处于加载状态
    modelValue: {
      type: Boolean,
      required: true
    },
    // 数据是否全部加载完成
    isFinished: {
      type: Boolean,
      required: false
    }
  },
  emits: ["onLoad", "update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = index.useVModel(props);
    const loadingTarget = vue.ref(null);
    const targetIsIntersection = vue.ref(false);
    index.useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
      targetIsIntersection.value = isIntersecting;
      emitLoad();
    });
    const emitLoad = () => {
      if (targetIsIntersection.value && !loading.value && !props.isFinished) {
        loading.value = true;
        emits("onLoad");
      }
    };
    vue.watch(loading, () => {
      setTimeout(() => {
        emitLoad();
      }, 100);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createElementVNode("div", {
          ref_key: "loadingTarget",
          ref: loadingTarget,
          class: "h-6 py-4"
        }, [
          vue.withDirectives(vue.createVNode(index$1, {
            class: "w-4 h-4 mx-auto animate-spin",
            name: "infinite-load"
          }, null, 512), [
            [vue.vShow, vue.unref(loading)]
          ]),
          __props.isFinished ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_1, " 已经没有更多数据了！ ")) : vue.createCommentVNode("", true)
        ], 512)
      ]);
    };
  }
};
module.exports = _sfc_main;

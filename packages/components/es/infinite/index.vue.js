import { ref, watch, openBlock, createElementBlock, renderSlot, createElementVNode, withDirectives, createVNode, vShow, unref, createCommentVNode } from "vue";
import _sfc_main$1 from "../svg-icon/index.vue.js";
import { useVModel, useIntersectionObserver } from "../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js";
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
    const loading = useVModel(props);
    const loadingTarget = ref(null);
    const targetIsIntersection = ref(false);
    useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
      targetIsIntersection.value = isIntersecting;
      emitLoad();
    });
    const emitLoad = () => {
      if (targetIsIntersection.value && !loading.value && !props.isFinished) {
        loading.value = true;
        emits("onLoad");
      }
    };
    watch(loading, () => {
      setTimeout(() => {
        emitLoad();
      }, 100);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("div", {
          ref_key: "loadingTarget",
          ref: loadingTarget,
          class: "h-6 py-4"
        }, [
          withDirectives(createVNode(_sfc_main$1, {
            class: "w-4 h-4 mx-auto animate-spin",
            name: "infinite-load"
          }, null, 512), [
            [vShow, unref(loading)]
          ]),
          __props.isFinished ? (openBlock(), createElementBlock("p", _hoisted_1, " 已经没有更多数据了！ ")) : createCommentVNode("", true)
        ], 512)
      ]);
    };
  }
};
export {
  _sfc_main as default
};

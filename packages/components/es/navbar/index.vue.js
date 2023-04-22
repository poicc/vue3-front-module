import { openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, createVNode } from "vue";
import { useRouter } from "../node_modules/.pnpm/registry.npmmirror.com_vue-router@4.1.6/node_modules/vue-router/dist/vue-router.js";
import _sfc_main$1 from "../svg-icon/index.vue.js";
const _hoisted_1 = { class: "h-full flex items-center justify-center m-auto font-bold text-base text-zinc-900 dark:text-zinc-200" };
const _sfc_main = {
  name: "index",
  props: {
    // 左边按钮的点击
    clickLeft: Function,
    // 右边按钮的点击
    clickRight: Function,
    // 是否吸顶
    sticky: Boolean
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const onClickLeft = () => {
      if (props.clickLeft) {
        props.clickLeft();
        return;
      }
      router.back();
    };
    const onClickRight = () => {
      if (props.clickRight) {
        props.clickRight();
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["w-full h-5 border-b flex items-center z-10 bg-white dark:bg-zinc-800 border-b-zinc-200 dark:border-b-zinc-700", [__props.sticky ? "sticky top-0 left-0" : "relative"]])
      }, [
        createElementVNode("div", {
          class: "h-full w-5 absolute left-0 flex items-center justify-center",
          onClick: onClickLeft
        }, [
          renderSlot(_ctx.$slots, "left", {}, () => [
            createVNode(_sfc_main$1, {
              name: "back",
              class: "w-2 h-2",
              fillClass: "fill-zinc-900 dark:fill-zinc-200"
            })
          ])
        ]),
        createElementVNode("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createElementVNode("div", {
          class: "h-full w-5 absolute right-0 flex items-center justify-center",
          onClick: onClickRight
        }, [
          renderSlot(_ctx.$slots, "right")
        ])
      ], 2);
    };
  }
};
export {
  _sfc_main as default
};

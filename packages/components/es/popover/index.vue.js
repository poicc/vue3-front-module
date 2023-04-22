import { ref, watch, nextTick, openBlock, createElementBlock, createElementVNode, renderSlot, createVNode, Transition, withCtx, withDirectives, normalizeStyle, vShow } from "vue";
import "./index.vue2.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
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
    const isVisable = ref(false);
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
    const referenceTarget = ref(null);
    const contentTarget = ref(null);
    const useElementSize = (target) => {
      if (!target)
        return {};
      return {
        width: target.offsetWidth,
        height: target.offsetHeight
      };
    };
    const contentStyle = ref({
      top: 0,
      left: 0
    });
    watch(isVisable, (val) => {
      if (!val)
        return;
      nextTick(() => {
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
      return openBlock(), createElementBlock("div", {
        class: "relative",
        onMouseenter,
        onMouseleave
      }, [
        createElementVNode("div", {
          ref_key: "referenceTarget",
          ref: referenceTarget
        }, [
          renderSlot(_ctx.$slots, "reference", {}, void 0, true)
        ], 512),
        createVNode(Transition, { name: "slide" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              ref_key: "contentTarget",
              ref: contentTarget,
              class: "absolute p-1 z-20 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-md",
              style: normalizeStyle(contentStyle.value)
            }, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 4), [
              [vShow, isVisable.value]
            ])
          ]),
          _: 3
        })
      ], 32);
    };
  }
};
const PoiPopover = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c80cfe97"]]);
export {
  PoiPopover as default
};

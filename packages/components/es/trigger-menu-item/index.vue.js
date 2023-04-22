import { openBlock, createElementBlock, createVNode, createElementVNode, normalizeClass, renderSlot } from "vue";
import _sfc_main$1 from "../svg-icon/index.vue.js";
import { useRouter } from "../node_modules/.pnpm/registry.npmmirror.com_vue-router@4.1.6/node_modules/vue-router/dist/vue-router.js";
const _sfc_main = {
  name: "index",
  props: {
    icon: {
      type: String,
      required: true
    },
    iconClass: {
      type: String
    },
    textClass: {
      type: String,
      default: "text-zinc-900"
    },
    to: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const onItemClick = () => {
      if (!props.to) {
        return;
      }
      router.push(props.to);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "w-5 flex flex-col items-center justify-center mx-0.5",
        onClick: onItemClick
      }, [
        createVNode(_sfc_main$1, {
          name: __props.icon,
          fillClas: __props.iconClass,
          class: "w-2 h-2"
        }, null, 8, ["name", "fillClas"]),
        createElementVNode("p", {
          class: normalizeClass(["text-sm mt-0.5", __props.textClass])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]);
    };
  }
};
export {
  _sfc_main as default
};

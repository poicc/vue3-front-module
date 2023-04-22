"use strict";
const vue = require("vue");
const index = require("../svg-icon/index.vue.js");
const vueRouter = require("../node_modules/.pnpm/registry.npmmirror.com_vue-router@4.1.6/node_modules/vue-router/dist/vue-router.js");
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
    const router = vueRouter.useRouter();
    const onItemClick = () => {
      if (!props.to) {
        return;
      }
      router.push(props.to);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "w-5 flex flex-col items-center justify-center mx-0.5",
        onClick: onItemClick
      }, [
        vue.createVNode(index, {
          name: __props.icon,
          fillClas: __props.iconClass,
          class: "w-2 h-2"
        }, null, 8, ["name", "fillClas"]),
        vue.createElementVNode("p", {
          class: vue.normalizeClass(["text-sm mt-0.5", __props.textClass])
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ], 2)
      ]);
    };
  }
};
module.exports = _sfc_main;

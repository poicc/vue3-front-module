import { computed, openBlock, createElementBlock, createElementVNode, unref, normalizeClass } from "vue";
const _hoisted_1 = { "aria-hidden": "true" };
const _hoisted_2 = ["xlink:href", "fill"];
const _sfc_main = {
  name: "index",
  props: {
    // 显示的 svg
    name: {
      type: String,
      required: true
    },
    // svg图标的颜色
    color: {
      type: String
    },
    // tailwind 指定 svg
    fillClass: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const symbolId = computed(() => `#icon-${props.name}`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1, [
        createElementVNode("use", {
          "xlink:href": unref(symbolId),
          class: normalizeClass(__props.fillClass),
          fill: __props.color
        }, null, 10, _hoisted_2)
      ]);
    };
  }
};
export {
  _sfc_main as default
};

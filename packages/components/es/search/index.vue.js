import { watch, ref, openBlock, createElementBlock, createElementVNode, createVNode, withDirectives, isRef, withKeys, vModelText, unref, vShow, Transition, withCtx, renderSlot, createCommentVNode, pushScopeId, popScopeId } from "vue";
import { useVModel, onClickOutside } from "../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js";
import _sfc_main$1 from "../svg-icon/index.vue.js";
import _sfc_main$2 from "../button/index.vue.js";
import "./index.vue2.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _withScopeId = (n) => (pushScopeId("data-v-04ba1bc7"), n = n(), popScopeId(), n);
const _hoisted_1 = ["onKeyup"];
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "opacity-0 h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100" }, null, -1));
const _hoisted_3 = {
  key: 0,
  class: "max-h-[368px] w-full text-base overflow-auto bg-white dark:bg-zinc-800 absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 dark:border-zinc-600 duration-200 hover:shadow-2xl scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
};
const EMIT_UPDATE_MODELVALUE = "update:modelValue";
const EMIT_SEARCH = "search";
const EMIT_CLEAR = "clear";
const EMIT_INPUT = "input";
const EMIT_FOCUS = "focus";
const EMIT_BLUR = "blur";
const __default__ = {
  name: "search-com"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    modelValue: {
      required: true,
      type: String
    }
  },
  emits: [
    EMIT_UPDATE_MODELVALUE,
    EMIT_SEARCH,
    EMIT_CLEAR,
    EMIT_INPUT,
    EMIT_FOCUS,
    EMIT_BLUR
  ],
  setup(__props, { emit: emits }) {
    const props = __props;
    const inputValue = useVModel(props);
    watch(inputValue, (val) => {
      emits(EMIT_INPUT, val);
    });
    const onClearClick = () => {
      inputValue.value = "";
      emits(EMIT_CLEAR, "");
    };
    const onSearchHandler = () => {
      emits(EMIT_SEARCH, inputValue.value);
    };
    const isFocus = ref(false);
    const containerTarget = ref(null);
    const onFocusHandler = () => {
      isFocus.value = true;
      emits(EMIT_FOCUS);
    };
    const onBlurHandler = () => {
      emits(EMIT_BLUR);
    };
    onClickOutside(containerTarget, () => {
      isFocus.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "group relative p-0.5 rounded-xl border-white dark:border-zinc-200 duration-500 hover:bg-red-100/40",
        ref_key: "containerTarget",
        ref: containerTarget
      }, [
        createElementVNode("div", null, [
          createVNode(_sfc_main$1, {
            class: "w-1.5 h-1.5 absolute translate-y-[-50%] top-[50%] left-2",
            name: "search",
            color: "#707070"
          }),
          withDirectives(createElementVNode("input", {
            class: "block w-full h-[44px] pl-4 outline-0 bg-zinc-100 dark:bg-zinc-800 caret-zinc-400 rounded-xl text-sm text-zinc-900 dark:text-zinc-200 tracking-wide duration-500 font-semibold border border-zinc-100 dark:border-zinc-700 focus:border-red-300 group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:border-zinc-200 dark:group-hover:border-zinc-700",
            placeholder: "搜索",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(inputValue) ? inputValue.value = $event : null),
            onKeyup: withKeys(onSearchHandler, ["enter"]),
            onFocus: onFocusHandler,
            onBlur: onBlurHandler
          }, null, 40, _hoisted_1), [
            [vModelText, unref(inputValue)]
          ]),
          withDirectives(createVNode(_sfc_main$1, {
            onClick: onClearClick,
            name: "input-delete",
            class: "h-1.5 w-1.5 absolute translate-y-[-50%] top-[50%] right-9 cursor-pointer duration-500"
          }, null, 512), [
            [vShow, unref(inputValue)]
          ]),
          _hoisted_2,
          createVNode(_sfc_main$2, {
            onClick: onSearchHandler,
            class: "opacity-0 absolute translate-y-[-50%] top-[50%] right-1 rounded-full duration-500 group-hover:opacity-100",
            icon: "search",
            iconColor: "#fff"
          })
        ]),
        createVNode(Transition, { name: "slide" }, {
          default: withCtx(() => [
            _ctx.$slots.dropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "dropdown", {}, void 0, true)
            ], 512)), [
              [vShow, isFocus.value]
            ]) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 512);
    };
  }
});
const PoiSearch = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04ba1bc7"]]);
export {
  PoiSearch as default
};

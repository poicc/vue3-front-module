"use strict";
const vue = require("vue");
const index = require("../node_modules/.pnpm/registry.npmmirror.com_@vueuse_core@9.13.0/node_modules/@vueuse/core/index.js");
const _hoisted_1 = { class: "relative" };
const _hoisted_2 = ["maxlength"];
const _hoisted_3 = ["maxlength"];
const TYPE_TEXT = "text";
const TYPE_TEXTAREA = "textarea";
const _sfc_main = {
  name: "index",
  props: {
    modelValue: {
      required: true,
      type: String
    },
    type: {
      type: String,
      default: TYPE_TEXT,
      validator(value) {
        const arr = [TYPE_TEXT, TYPE_TEXTAREA];
        const result = arr.includes(value);
        if (!result) {
          throw new Error(
            `type 的值必须在可选范围内 [${arr.join("、")}]`
          );
        }
        return result;
      }
    },
    max: {
      type: [String, Number]
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const text = index.useVModel(props);
    const currentNumber = vue.computed(() => {
      var _a;
      return (_a = text.value) == null ? void 0 : _a.length;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        __props.type === TYPE_TEXT ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          class: "border-gray-200 dark:border-zinc-600 dark:bg-zinc-800 duration-100 dark:text-zinc-400 border-[1px] outline-0 py-0.5 px-1 text-sm rounded-sm focus:border-blue-400 w-full",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(text) ? text.value = $event : null),
          maxlength: __props.max
        }, null, 8, _hoisted_2)), [
          [vue.vModelText, vue.unref(text)]
        ]) : vue.createCommentVNode("", true),
        __props.type === TYPE_TEXTAREA ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(text) ? text.value = $event : null),
          maxlength: __props.max,
          rows: "5",
          class: "border-gray-200 dark:border-zinc-600 dark:bg-zinc-800 duration-100 dark:text-zinc-400 border-[1px] outline-0 py-0.5 px-1 text-sm rounded-sm focus:border-blue-400 w-full"
        }, null, 8, _hoisted_3)), [
          [vue.vModelText, vue.unref(text)]
        ]) : vue.createCommentVNode("", true),
        __props.max ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 2,
          class: vue.normalizeClass(["absolute right-1 bottom-0.5 text-zinc-400 text-xs", { "text-red-700": vue.unref(currentNumber) === parseInt(__props.max) }])
        }, vue.toDisplayString(vue.unref(currentNumber)) + " / " + vue.toDisplayString(__props.max), 3)) : vue.createCommentVNode("", true)
      ]);
    };
  }
};
module.exports = _sfc_main;

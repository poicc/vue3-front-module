"use strict";
const vue = require("vue");
require("./utils.js");
const dayjs_min = require("../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/dayjs.min.js");
const _hoisted_1 = { class: "text-sm" };
const EMITS_FINISH = "finish";
const EMITS_CHANGE = "change";
const INTERVAL_COUNT = 1e3;
const _sfc_main = {
  name: "index",
  props: {
    // 毫秒时间 - 时间戳
    time: {
      type: Number,
      required: true
    },
    // 遵循 dayjs fromat 标准
    format: {
      type: String,
      default: "HH:mm:ss"
    }
  },
  emits: [EMITS_FINISH, EMITS_CHANGE],
  setup(__props, { emit: emits }) {
    const props = __props;
    const duration = vue.ref(0);
    let interval;
    const start = () => {
      close();
      interval = setInterval(() => {
        durationFn();
      }, INTERVAL_COUNT);
    };
    const durationFn = () => {
      duration.value -= INTERVAL_COUNT;
      emits(EMITS_CHANGE);
      if (duration.value <= 0) {
        duration.value = 0;
        emits(EMITS_FINISH);
        close();
      }
    };
    const close = () => {
      if (interval) {
        clearInterval(interval);
      }
    };
    vue.watch(
      () => props.time,
      (val) => {
        duration.value = val;
        start();
      },
      { immediate: true }
    );
    vue.onUnmounted(() => {
      close();
    });
    const showTime = vue.computed(() => {
      return dayjs_min.duration(duration.value).format(props.format);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("p", _hoisted_1, vue.toDisplayString(vue.unref(showTime)), 1)
        ])
      ]);
    };
  }
};
module.exports = _sfc_main;

import { ref, watch, onUnmounted, computed, openBlock, createElementBlock, renderSlot, createElementVNode, toDisplayString, unref } from "vue";
import "./utils.js";
import dayjs from "../_virtual/dayjs.min.js";
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
    const duration = ref(0);
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
    watch(
      () => props.time,
      (val) => {
        duration.value = val;
        start();
      },
      { immediate: true }
    );
    onUnmounted(() => {
      close();
    });
    const showTime = computed(() => {
      return dayjs.duration(duration.value).format(props.format);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createElementVNode("p", _hoisted_1, toDisplayString(unref(showTime)), 1)
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};

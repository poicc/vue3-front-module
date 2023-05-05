import dayjs from "../_virtual/dayjs.min.js";
import "../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/locale/zh-cn.js";
import duration from "../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/plugin/duration.js";
dayjs.locale("zh");
dayjs.extend(duration);
export {
  dayjs as default
};

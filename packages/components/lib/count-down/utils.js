"use strict";
const dayjs_min = require("../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/dayjs.min.js");
require("../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/locale/zh-cn.js");
const duration = require("../node_modules/.pnpm/registry.npmmirror.com_dayjs@1.11.7/node_modules/dayjs/plugin/duration.js");
dayjs_min.locale("zh");
dayjs_min.extend(duration);
module.exports = dayjs_min;

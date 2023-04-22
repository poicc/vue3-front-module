"use strict";
const vue = require("vue");
const util = require("./util.js");
const _hoisted_1 = { key: 1 };
const _sfc_main = {
  name: "index",
  props: {
    // 数据源
    data: {
      type: Array,
      required: true
    },
    // 唯一标识key
    nodeKey: {
      type: String
    },
    // 列数
    column: {
      type: Number,
      default: 2
    },
    // 列间距
    columnSpacing: {
      default: 20,
      type: Number
    },
    // 行间距
    rowSpacing: {
      default: 20,
      type: Number
    },
    // 是否需要进行图片预读取
    picturePreReading: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const containerHeight = vue.ref(0);
    const columnHeightObj = vue.ref({});
    const useColumnHeightObj = () => {
      columnHeightObj.value = {};
      for (let i = 0; i < props.column; i++) {
        columnHeightObj.value[i] = 0;
      }
    };
    const containerTarget = vue.ref(null);
    const containerWidth = vue.ref(0);
    const containerLeft = vue.ref(0);
    const useContainerWidth = () => {
      const { paddingLeft, paddingRight } = getComputedStyle(
        containerTarget.value,
        null
      );
      containerLeft.value = parseFloat(paddingLeft);
      containerWidth.value = containerTarget.value.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
    };
    const columnWidth = vue.ref(0);
    const columnSpacingTotal = vue.computed(() => {
      return (props.column - 1) * props.columnSpacing;
    });
    const useColumnWidth = () => {
      useContainerWidth();
      columnWidth.value = (containerWidth.value - columnSpacingTotal.value) / props.column;
    };
    vue.onMounted(() => {
      useColumnWidth();
    });
    let itemHeights = [];
    const waitImgComplate = () => {
      itemHeights = [];
      let itemElements = [...document.getElementsByClassName("m-waterfall-item")];
      const imgElements = util.getImgElements(itemElements);
      const allImgs = util.getAllImg(imgElements);
      onCompleteImgs(allImgs).then(() => {
        itemElements.forEach((el) => {
          itemHeights.push(el.offsetHeight);
        });
        useItemLocation();
      });
    };
    const useItemHeight = () => {
      itemHeights = [];
      let itemElements = [...document.getElementsByClassName("m-waterfall-item")];
      itemElements.forEach((el) => {
        itemHeights.push(el.offsetHeight);
      });
      useItemLocation();
    };
    const useItemLocation = () => {
      props.data.forEach((item, index) => {
        if (item._style) {
          return;
        }
        item._style = {};
        item._style.left = getItemLeft();
        item._style.top = getItemTop();
        increasingHeight(index);
      });
      containerHeight.value = util.getMaxHeight(columnHeightObj.value);
    };
    const getItemLeft = () => {
      const column = util.getMinHeightColumn(columnHeightObj.value);
      return column * (columnWidth.value + props.columnSpacing) + containerLeft.value;
    };
    const getItemTop = () => {
      return util.getMinHeight(columnHeightObj.value);
    };
    const increasingHeight = (index) => {
      const minHeightColumn = util.getMinHeightColumn(columnHeightObj.value);
      columnHeightObj.value[minHeightColumn] += itemHeights[index] + props.rowSpacing;
    };
    vue.watch(
      () => props.data,
      (newVal) => {
        vue.nextTick(() => {
          const resetColumnHeight = newVal.every((item) => !item._style);
          if (resetColumnHeight) {
            useColumnHeightObj();
          }
          if (props.picturePreReading) {
            waitImgComplate();
          } else {
            useItemHeight();
          }
        });
      },
      {
        deep: true,
        immediate: true
      }
    );
    vue.onUnmounted(() => {
      props.data.forEach((item) => {
        delete item._style;
      });
    });
    const reset = () => {
      setTimeout(() => {
        useColumnWidth();
        props.data.forEach((item) => {
          item._style = null;
        });
      }, 100);
    };
    vue.watch(
      () => props.column,
      () => {
        if (props.picturePreReading) {
          columnWidth.value = 0;
          vue.nextTick(reset);
        } else {
          reset();
        }
      }
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "relative",
        ref_key: "containerTarget",
        ref: containerTarget,
        style: vue.normalizeStyle({
          height: containerHeight.value + "px"
          // 因为当前为 relative 布局，所以需要主动指定高度
        })
      }, [
        columnWidth.value && __props.data.length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(__props.data, (item, index) => {
          var _a, _b;
          return vue.openBlock(), vue.createElementBlock("div", {
            key: __props.nodeKey ? item[__props.nodeKey] : index,
            class: "m-waterfall-item absolute duration-300",
            style: vue.normalizeStyle({
              width: columnWidth.value + "px",
              left: ((_a = item._style) == null ? void 0 : _a.left) + "px",
              top: ((_b = item._style) == null ? void 0 : _b.top) + "px"
            })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {
              item,
              width: columnWidth.value,
              index
            })
          ], 4);
        }), 128)) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, "加载中..."))
      ], 4);
    };
  }
};
module.exports = _sfc_main;

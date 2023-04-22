import { ref, computed, onMounted, watch, nextTick, onUnmounted, openBlock, createElementBlock, normalizeStyle, Fragment, renderList, renderSlot } from "vue";
import { getImgElements, getAllImg, getMaxHeight, getMinHeightColumn, getMinHeight } from "./util.js";
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
    const containerHeight = ref(0);
    const columnHeightObj = ref({});
    const useColumnHeightObj = () => {
      columnHeightObj.value = {};
      for (let i = 0; i < props.column; i++) {
        columnHeightObj.value[i] = 0;
      }
    };
    const containerTarget = ref(null);
    const containerWidth = ref(0);
    const containerLeft = ref(0);
    const useContainerWidth = () => {
      const { paddingLeft, paddingRight } = getComputedStyle(
        containerTarget.value,
        null
      );
      containerLeft.value = parseFloat(paddingLeft);
      containerWidth.value = containerTarget.value.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
    };
    const columnWidth = ref(0);
    const columnSpacingTotal = computed(() => {
      return (props.column - 1) * props.columnSpacing;
    });
    const useColumnWidth = () => {
      useContainerWidth();
      columnWidth.value = (containerWidth.value - columnSpacingTotal.value) / props.column;
    };
    onMounted(() => {
      useColumnWidth();
    });
    let itemHeights = [];
    const waitImgComplate = () => {
      itemHeights = [];
      let itemElements = [...document.getElementsByClassName("m-waterfall-item")];
      const imgElements = getImgElements(itemElements);
      const allImgs = getAllImg(imgElements);
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
      containerHeight.value = getMaxHeight(columnHeightObj.value);
    };
    const getItemLeft = () => {
      const column = getMinHeightColumn(columnHeightObj.value);
      return column * (columnWidth.value + props.columnSpacing) + containerLeft.value;
    };
    const getItemTop = () => {
      return getMinHeight(columnHeightObj.value);
    };
    const increasingHeight = (index) => {
      const minHeightColumn = getMinHeightColumn(columnHeightObj.value);
      columnHeightObj.value[minHeightColumn] += itemHeights[index] + props.rowSpacing;
    };
    watch(
      () => props.data,
      (newVal) => {
        nextTick(() => {
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
    onUnmounted(() => {
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
    watch(
      () => props.column,
      () => {
        if (props.picturePreReading) {
          columnWidth.value = 0;
          nextTick(reset);
        } else {
          reset();
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "relative",
        ref_key: "containerTarget",
        ref: containerTarget,
        style: normalizeStyle({
          height: containerHeight.value + "px"
          // 因为当前为 relative 布局，所以需要主动指定高度
        })
      }, [
        columnWidth.value && __props.data.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.data, (item, index) => {
          var _a, _b;
          return openBlock(), createElementBlock("div", {
            key: __props.nodeKey ? item[__props.nodeKey] : index,
            class: "m-waterfall-item absolute duration-300",
            style: normalizeStyle({
              width: columnWidth.value + "px",
              left: ((_a = item._style) == null ? void 0 : _a.left) + "px",
              top: ((_b = item._style) == null ? void 0 : _b.top) + "px"
            })
          }, [
            renderSlot(_ctx.$slots, "default", {
              item,
              width: columnWidth.value,
              index
            })
          ], 4);
        }), 128)) : (openBlock(), createElementBlock("div", _hoisted_1, "加载中..."))
      ], 4);
    };
  }
};
export {
  _sfc_main as default
};

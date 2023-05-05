# 瀑布流Waterfall

`waterfall`是一个简单的瀑布流组件，通过计算每一列的高度和位置来实现自适应布局。

## 基本用法

:::demo
```vue
<template>
  <PoiWaterfull :data="items" :column="2" :columnSpacing="20" :rowSpacing="20">
    <template #default="{ item, width }">
      <div>
        <img :src="item.src" :style="{ width: width + 'px' }">
      </div>
    </template>
  </PoiWaterfull>
</template>

<script>

const items = [
  { src: 'https://picsum.photos/400/300' },
  { src: 'https://picsum.photos/500/500' },
  // ...
]

export default {
  data() {
    return {
      items,
    }
  },
}
</script>
```
:::

## Example

:::demo
```vue
<template>
  <PoiWaterfull
    ref="waterfall"
    :data="items"
    :column="2"
    :columnSpacing="20"
    :rowSpacing="20"
    :picturePreReading="true"
  >
    <template #default="{ item, width }">
      <div>
        <img :src="item.src" :style="{ width: width + 'px' }">
      </div>
    </template>
  </PoiWaterfull>
</template>

<script>
import { ref, onMounted } from 'vue'

const items = [
  { src: 'https://picsum.photos/400/300' },
  { src: 'https://picsum.photos/500/500' },
  // ...
]

export default {
  data() {
    return {
      items,
    }
  },
  mounted() {
    this.$refs.waterfall.calculateSize() // 重新计算并更新每列的高度和位置
  },
}
</script>
```
:::


## Props

| Prop                 | Type      | Default | Description                                                                                                                                                                                      |
| --------------------| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `data`               | `Array`   |         | 数据源数组                                                                                                                                                                                      |
| `nodeKey`            | `String`  |         | 数据项的唯一标识，用于优化渲染                                                                                                                                             |
| `column`             | `Number`  | `2`     | 列数                                                                                                                                                                                             |
| `columnSpacing`      | `Number`  | `20`    | 列之间的间距（单位：像素）                                                                                                                                                                      |
| `rowSpacing`         | `Number`  | `20`    | 行之间的间距（单位：像素）                                                                                                                                                                      |
| `picturePreReading`  | `Boolean` | `true`  | 是否开启图片预读取，启用后可以更快地计算出布局                                                                                                                                              |

## Slots

| Slot     | Prop         | Description              |
| -------- | ------------| ------------------------ |
| `default`| `item`      | 数据项                   |
|          | `width`     | 根据列宽计算的宽度       |
|          | `index`     | 数据项索引               |

## Methods

| Method          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `calculateSize` | 强制重新计算并更新每列的高度和位置，可供外部手动调用 |



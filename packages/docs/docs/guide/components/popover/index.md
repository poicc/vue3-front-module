# 弹出框Popover


## 示例

:::demo

```html
<template>
  <PoiPopover placement="top-right">
    <template v-slot:reference>
      <button>Hover me</button>
    </template>
    <div>Lorem.</div>
  </PoiPopover>
</template>

```

:::

## Props

| 属性名    | 类型   | 默认值       | 描述                                      |
| --------- | ------ | ------------ | ----------------------------------------- |
| placement | string | `"top-left"` | 设置气泡弹出的位置，可选值包括 `"top-left"`、`"top-right"`、`"bottom-left"`、`"bottom-right"` |
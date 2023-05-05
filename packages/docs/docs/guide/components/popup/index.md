# Popup组件

Popup组件可以用来实现一个弹出层，通常用于模态框、菜单、下拉框等场景中。



## 示例

:::demo

```html
<template>
  <div>
    <button @click="isVisable = true">弹出 Popup</button>
    <PoiPopup v-model="isVisable">
      <div style="padding: 16px;">
        <h2>标题</h2>
        <p>这是一段弹出层的内容</p>
        <button @click="isVisable = false">关闭</button>
      </div>
    </PoiPopup>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isVisable: false,
    }
  },
}
</script>
```

:::

## Props

| 属性名      | 类型    | 默认值 | 描述            |
| ----------- | ------- | ------ | --------------- |
| modelValue | boolean | `false`   | 控制弹出层的显示 |

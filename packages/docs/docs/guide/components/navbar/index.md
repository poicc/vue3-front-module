# Navbar 导航栏

:::demo 使用 `<Navbar>` 可以快速创建一个导航栏组件。

```vue
<template>
  <div>
    <PoiNavbar>导航栏</PoiNavbar>
  </div>
</template>

```

:::

## Props

| 属性   | 说明       | 类型     | 默认值 |
|--------|------------|----------|--------|
| sticky | 是否吸顶   | boolean  | false  |
| left   | 左侧内容   | slot     |        |
| right  | 右侧内容   | slot     |        |

## Events

| 事件名     | 说明             | 返回值类型 |
|------------|-----------------|-----------|
| clickLeft  | 左侧按钮点击时 | -         |
| clickRight | 右侧按钮点击时 | -         |
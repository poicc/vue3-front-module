# 倒计时组件

通过本组件，你可以实现一个动态的倒计时。本组件支持自定义格式。

## 基本用法

在你的模板中引入本组件：

:::demo
```vue
<template>
  <div>
    <PoiCountDown :time="3600000" />
  </div>
</template>

```
:::

## 自定义格式

你可以通过 `format` 属性来自定义显示倒计时的格式。本组件遵循 Day.js 的格式规范。

:::demo
```vue
<template>
  <div>
    <PoiCountDown :time="86400000" format="D 天 H 时 m 分 s 秒" />
    <PoiCountDown :time="86400000" format="HH:mm:ss" />
  </div>
</template>
```
:::

## 倒计时结束事件

你可以通过监听 `finish` 事件，来在倒计时结束时执行一些操作。

:::demo
```vue
<template>
  <div>
    <PoiCountDown :time="3600000" @finish="handleFinish" />
  </div>
</template>

```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|---- |--------|----|------|
| time | 倒计时的时间，单位为毫秒 | _number_ | `0` |
| format | 倒计时的格式，遵循 Day.js 的格式规范 | _string_ | `'HH:mm:ss'` |

### Events

| 事件名 | 说明 | 回调函数参数 |
|-------|--------|-------------|
| change | 每次倒计时变化时触发 | `{ time: number }` |
| finish | 倒计时结束时触发 | - |


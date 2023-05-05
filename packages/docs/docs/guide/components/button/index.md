# Button 按钮
常用操作按钮

## 基础使用

:::demo 

```vue
<template>
 <div style="display:flex;">
  <PoiButton>主要按钮</PoiButton>
 </div>
</template>
```
:::

## 不同尺寸

:::demo

```vue
<template>
 <div style="display:flex;">
  <PoiButton size="small">小号按钮</PoiButton>
  <PoiButton style="margin-left:10px">默认大小</PoiButton>
 </div>
</template>
```
:::

## 带图标的按钮

:::demo
```vue
<template>
 <div style="display:flex;">
  <PoiButton icon="search" iconColor='white'></PoiButton>
  <PoiButton icon="heart" iconColor='white' style='margin-left:10px'></PoiButton>
 </div>
</template>
```
:::

## 加载状态

:::demo
```vue
<template>
 <div style="display:flex;">
  <PoiButton loading>加载...</PoiButton>
 </div>
</template>
```
:::

## API

| 参数         | 说明                              | 类型            | 可选值                                | 默认值  |
| ------------ | --------------------------------- | --------------- | ------------------------------------- | ------- |
| type         | 类型风格                          | String          | primary/main/info                     | main    |
| size         | 大小尺寸                          | String          | default/small/icon-default/icon-small | default |
| icon         | 带图标按钮                        | String          | -                                     | -       |
| iconColor    | 图标颜色                          | String          | -                                     | -       |
| iconClass    | 图标类型                          | String          | -                                     | -       |
| isActiveAnim | 点击按钮是否带动画                | Boolean         | true/false                            | true    |
| loading      | 是否显示加载状态                  | Boolean         | true/false                            | false   |
| click        | 点击按钮，触发事件（仅支持 vue3） | Function(event) | -                                     | -       |

## Slot

| 名称 | 说明            |
| ---- | --------------- |
| -    | 按钮文本或 html |

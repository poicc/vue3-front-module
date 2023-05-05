# trigger-menu

`trigger-menu`是一个简单的下拉菜单组件，提供了一个触发按钮，点击按钮可以展开菜单。

## 基本用法

:::demo
```vue
<template>
  <PoiTriggerMenu>
    <template #trigger>
      <button class="px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white">
        点击打开菜单
      </button>
    </template>
    <PoiTriggerMenuItem>
      <a href="#">菜单项一</a>
    </PoiTriggerMenuItem>
    <PoiTriggerMenuItem>
      <a href="#">菜单项二</a>
    </PoiTriggerMenuItem>
    <PoiTriggerMenuItem>
      <a href="#">菜单项三</a>
    </PoiTriggerMenuItem>
  </PoiTriggerMenu>
</template>

```
:::

## 使用示例

:::demo
```vue
<template>
  <PoiTriggerMenu>
    <template #trigger>
      <button class="px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white">
        点击打开菜单
      </button>
    </template>
    <PoiTriggerMenuItem to="/">
      <span>
        <i class="fas fa-home"></i>
        首页
      </span>
    </PoiTriggerMenuItem>
    <PoiTriggerMenuItem to="/user">
      <span>
        <i class="fas fa-user"></i>
        个人中心
      </span>
    </PoiTriggerMenuItem>
    <PoiTriggerMenuItem :icon="'fas fa-cog'" textClass="text-gray-600">
      设置
    </PoiTriggerMenuItem>
    <PoiTriggerMenuItem :icon="'fas fa-sign-out-alt'" textClass="text-red-600">
      退出登录
    </PoiTriggerMenuItem>
  </PoiTriggerMenu>
</template>

```
:::

## Props

| Prop    | Type   | Default | Description        |
| ------- | ------ | ------- | ------------------ |
| `value` | `bool` | `false` | 是否展开菜单       |
| `align` | `enum` | `left`  | 菜单对齐方式，可选值：`left`、`center`、`right` |

## Events

| Event           | Description                   |
| --------------- | ----------------------------- |
| `update:value`  | 展开状态变化时触发           |
| `menu:open`     | 菜单打开时触发               |
| `menu:close`    | 菜单关闭时触发               |
| `menu:keydown`  | 菜单内按键事件，需支持键盘导航 |
| `menu:selected` | 选择菜单项时触发             |

## Slots

| Slot        | Prop  | Description                        |
| ----------- | ----- | ---------------------------------- |
| `default`   |       | 菜单项，需要使用`trigger-menu-item` |
| `trigger`   |       | 触发按钮                           |
| `menu`      |       | 菜单内容，自定义样式时需要使用     |
| `menu-item` | index | 菜单项，需要使用`trigger-menu-item` |

## trigger-menu-item

`trigger-menu-item`是`trigger-menu`的菜单项组件，需要作为`trigger-menu`的子组件使用。

## Props

| Prop         | Type     | Default       | Description  |
| ------------ | -------- | ------------- | ------------ |
| `icon`       | `string` |               | 图标名       |
| `iconClass`  | `string` |               | 图标样式类名 |
| `textClass`  | `string` | `text-black`  | 文本样式类名 |
| `to`         | `string` | `undefined`   | 跳转链接     |


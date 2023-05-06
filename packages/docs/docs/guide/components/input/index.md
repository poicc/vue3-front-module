# Input

提供了文本输入和文本域两种形式。并且能够限制最大输入字符数。

## 基础用法

默认形式为文本输入框，通过 `v-model` 即可双向绑定输入框内容：

:::demo
```vue
<template>
    <PoiInput v-model="value" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>
```
:::

当然，你也可以指定 `type` 的属性为 `textarea`，即可调用文本块的形式。

:::demo
```vue
<template>
    <PoiInput v-model="value" type="textarea" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>
```
:::

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue | 组件值 | string | - | - |
| type | 内容形式 | string | `text`、`textarea` | `text` |
| max | 最大输入字符数 | string,number | - | - |

## 事件

| 事件名称 | 说明    | 回调参数 |
| -------- | ------- | -------- |
| update:modelValue | 内容修改时触发 | 组件值 |


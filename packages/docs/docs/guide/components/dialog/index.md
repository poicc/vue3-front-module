# Dialog 对话框
对话框

## 基本用法

:::demo
```vue
<template>
  <div>
    <button class="p-2 rounded-md bg-zinc-400" @click="dialogVisible = true">
      显示对话框
    </button>
    <PoiDialog
      :model-value="dialogVisible"
      title="这是一个对话框"
      :confirm-handler="confirm"
      :cancel-handler="cancel"
    >
      您确定要继续操作吗？
    </PoiDialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const dialogVisible = ref(false)

    const confirm = () => {
      console.log('确定')
      dialogVisible.value = true
    }

    const cancel = () => {
      console.log('取消')
      dialogVisible.value = false
    }

    return {
      dialogVisible,
      confirm,
      cancel
    }
  }
}
</script>
``` 
:::

## API

| 参数             | 类型       | 说明                           | 可选值 | 默认值 |
| ---------------- | ---------- | ------------------------------ | ------ | ------ |
| modelValue       | `Boolean`  | 控制显示对话框                | -      | false  |
| title            | `String`   | 对话框标题                     | -      | -      |
| cancelText       | `String`   | 取消按钮文本                  | -      | `取消` |
| confirmText      | `String`   | 确定按钮文本                  | -      | `确定` |
| cancelHandler    | `Function` | 取消按钮点击事件              | -      | -      |
| confirmHandler   | `Function` | 确定按钮点击事件              | -      | -      |
| close            | `Function` | 关闭对话框的回调函数           | -      | -      |

## Slot

| 名称  | 说明       |
| ----- | ---------- |
| -     | 对话框内容 |
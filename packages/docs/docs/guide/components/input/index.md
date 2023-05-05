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


## 源代码

```vue
<template>
    <div class="relative">
        <input
            v-if="type === TYPE_TEXT"
            class="border-gray-200 dark:border-zinc-600 dark:bg-zinc-800 duration-100 dark:text-zinc-400 border-[1px] outline-0 py-0.5 px-1 text-sm rounded-sm focus:border-blue-400 w-full"
            type="text"
            v-model="text"
            :maxlength="max"
        />

        <textarea
            v-if="type === TYPE_TEXTAREA"
            v-model="text"
            :maxlength="max"
            rows="5"
            class="border-gray-200 dark:border-zinc-600 dark:bg-zinc-800 duration-100 dark:text-zinc-400 border-[1px] outline-0 py-0.5 px-1 text-sm rounded-sm focus:border-blue-400 w-full"
        ></textarea>

        <span
            v-if="max"
            class="absolute right-1 bottom-0.5 text-zinc-400 text-xs"
            :class="{ 'text-red-700': currentNumber === parseInt(max) }"
            >{{ currentNumber }} / {{ max }}</span
        >
    </div>
</template>

<script>
// 单行
const TYPE_TEXT = 'text';
// 多行
const TYPE_TEXTAREA = 'textarea';

export default {
    props: {
        // 组件值
        modelValue: {
            required: true,
            type: String,
        },
        // 内容形式
        type: {
            type: String,
            default: TYPE_TEXT,
            validator(value) {
                const arr = [TYPE_TEXT, TYPE_TEXTAREA];
                const result = arr.includes(value);
                if (!result) {
                    throw new Error(
                        `type 的值必须在可选范围内 [${arr.join('、')}]`,
                    );
                }
                return result;
            },
        },
        // 最大输入字符数
        max: {
            type: [String, Number],
        },
    },

    emits: ['update:modelValue'],

    setup(props, { emit }) {
        // 输入的字符
        const text = computed({
            get() {
                return props.modelValue;
            },
            set(value) {
                emit('update:modelValue', value);
            },
        });

        // 输入的字符数
        const currentNumber = computed(() => {
            return text.value?.length;
        });

        return {
            text,
            currentNumber,
            max: Number(props.max),
            type: props.type,

            TYPE_TEXT,
            TYPE_TEXTAREA,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>
```

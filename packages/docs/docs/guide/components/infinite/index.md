---
title: 无限滚动组件 Infinite
---

## Infinite 无限滚动组件

:::demo 使用方法

```vue
<template>
  <div>
    <PoiInfinite
      :modelValue="loading"
      :isFinished="isFinished"
      @onLoad="handleLoad"
      v-for="item in list"
      :key="item"
    >
      <div class="m-4 p-4 bg-gray-300 rounded-lg shadow-lg">
        <p>加载的内容</p>
      </div>
    </PoiInfinite>
  </div>
</template>

<script>

export default {

  data() {
    return {
      loading: false,
      isFinished: false,
      list: []
    };
  },
  created() {
    // 模拟数据请求
    this.getList(1, 5);
  },
  methods: {
    // 模拟异步请求
    getList(pageNo, pageSize) {
      this.loading = true;
      setTimeout(() => {
        const totalPage = 5;
        const currentPage = pageNo;
        const list = Array.from({ length: pageSize }, (v, i) => {
          const id = (currentPage - 1) * pageSize + i + 1;
          return `Item ${id}`;
        });
        this.loading = false;
        this.list.push(...list);
        if (currentPage >= totalPage) {
          this.isFinished = true;
        }
      }, 1500);
    },

    handleLoad() {
      const totalPage = 5;
      const currentPage = this.list.length / 5 + 1;
      if (currentPage <= totalPage) {
        this.getList(currentPage, 5);
      } else {
        this.isFinished = true;
      }
    }
  }
};
</script>
```

:::


## API

### Props

| 参数       | 类型    | 说明                   | 默认值 |
| ---------- | ------- | ---------------------- | ------ |
| modelValue | Boolean | 是否处于加载状态       | false  |
| isFinished | Boolean | 数据是否全部加载完成   | false  |
| onLoad     | Function| 加载列表触发的事件     | -      |

### Events

| 事件名称        | 说明                | 回调参数    |
| --------------- | ------------------- | ----------- |
| update:modelValue | 加载
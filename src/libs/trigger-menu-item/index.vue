<template>
  <div
    class="w-5 flex flex-col items-center justify-center mx-0.5"
    @click="onItemClick"
  >
    <poi-svg-icon :name="icon" :fillClas="iconClass" class="w-2 h-2">
    </poi-svg-icon>
    <p class="text-sm mt-0.5" :class="textClass">
      <slot />
    </p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  iconClass: {
    type: String
  },
  textClass: {
    type: String,
    default: 'text-zinc-900'
  },
  to: {
    type: String
  }
})

const router = useRouter()
const onItemClick = () => {
  if (!props.to) {
    return
  }
  router.push(props.to)
}
</script>

<style lang="scss" scoped></style>

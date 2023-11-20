<script setup lang="ts">
// SVG 图标配置组件 CSDN文章：https://blog.csdn.net/qq_61402485/article/details/128679915?
import { computed } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: 'CurrentColor'
  }
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className
  } else {
    return 'svg-icon'
  }
})
</script>
<template>
  <svg :class="svgClass" aria-hidden="true" :fill="iconColor">
    <use :xlink:href="iconName" />
  </svg>
<!--  svg 图标默认宽高，根据个人使用情况自行调整-->
</template>
<style scoped>
.svg-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  overflow: hidden;
}
</style>

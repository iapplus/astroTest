<template>
  <span 
    class="vue-underline"
    :style="underlineStyle"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <slot />
  </span>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#0094dd'
  },
  thickness: {
    type: String,
    default: '2px'
  },
  offset: {
    type: String,
    default: '4px'
  },
  hoverColor: {
    type: String,
    default: '#00d4ff'
  },
  animated: {
    type: Boolean,
    default: false
  }
})

const isHovered = ref(false)

const underlineStyle = computed(() => {
  const color = isHovered.value ? props.hoverColor : props.color
  
  if (props.animated) {
    return {
      background: `linear-gradient(${color}, ${color})`,
      backgroundSize: isHovered.value ? '100% 100%' : '0% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left bottom',
      transition: 'background-size 0.3s ease',
      paddingBottom: props.offset,
      textDecoration: 'none'
    }
  }
  
  return {
    textDecoration: 'underline',
    textDecorationColor: color,
    textDecorationThickness: props.thickness,
    textUnderlineOffset: props.offset,
    transition: 'text-decoration-color 0.3s ease'
  }
})

const handleHover = (hovered) => {
  isHovered.value = hovered
}
</script>

<style scoped>
.vue-underline {
  cursor: pointer;
}
</style>

<template>
  <div class="interactive-card" @click="toggleCard">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <span class="toggle-icon">{{ isExpanded ? '−' : '+' }}</span>
    </div>
    <transition name="slide">
      <div v-show="isExpanded" class="card-content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  initialExpanded: {
    type: Boolean,
    default: false
  }
})

const isExpanded = ref(props.initialExpanded)

const toggleCard = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.interactive-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.interactive-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.toggle-icon {
  font-size: 24px;
  font-weight: bold;
  color: #0094dd;
}

.card-content {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>

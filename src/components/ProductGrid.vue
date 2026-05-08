<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Product {
  name: string
  image: string
  link?: string
}

interface ProductData {
  products: Product[]
}

interface Props {
  data: Record<string, ProductData>
}

const props = defineProps<Props>()

const currentLocale = ref('')

onMounted(() => {
  document.body.setAttribute('data-homepage', 'true')
  const path = window.location.pathname
  const segments = path.split('/').filter(Boolean)
  const locale = segments[0]
  const supportedLocales = ['ja', 'de', 'es', 'fr', 'it']
  currentLocale.value = supportedLocales.includes(locale) ? locale : ''
})

const currentData = computed(() => {
  return props.data[currentLocale.value] || props.data['']
})
</script>

<template>
  <div class="page-wrapper">
    <div class="product-grid">
      <template v-for="product in currentData?.products" :key="product.name">
        <a
          v-if="product.link"
          :href="product.link"
          class="product-card-link"
        >
          <div class="product-card">
            <div class="product-icon">
              <img :src="product.image" :alt="product.name" />
            </div>
            <p class="product-name">{{ product.name }}</p>
          </div>
        </a>
        <div v-else class="product-card">
          <div class="product-icon">
            <img :src="product.image" :alt="product.name" />
          </div>
          <p class="product-name">{{ product.name }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.product-card {
  padding: 60px 40px 40px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0094dd, #00d4ff);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  box-shadow: 0 12px 40px rgba(0, 148, 221, 0.15);
  transform: translateY(-8px);
  border-color: #0094dd;
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-icon {
  width: 160px;
  height: 160px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-icon {
  transform: scale(1.1);
}

.product-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
}

.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card-link:hover .product-card {
  box-shadow: 0 12px 40px rgba(0, 148, 221, 0.15);
  transform: translateY(-8px);
  border-color: #0094dd;
}

.product-card-link:hover .product-card::before {
  transform: scaleX(1);
}

.product-card-link:hover .product-icon {
  transform: scale(1.1);
}

.product-name {
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
  letter-spacing: 0.3px;
  transition: color 0.3s ease;
}

.product-card:hover .product-name {
  color: #0094dd;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .page-wrapper {
    padding: 60px 24px;
  }

  .product-card {
    padding: 48px 32px 32px;
  }

  .product-icon {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }

  .product-name {
    font-size: 18px;
  }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .page-wrapper {
    padding: 40px 16px;
  }

  .product-card {
    padding: 40px 24px 24px;
  }

  .product-icon {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }

  .product-name {
    font-size: 16px;
  }
}
</style>
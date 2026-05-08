<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Product {
  name: string
  description?: string
  image: string
  link?: string
  category?: string
}

interface ProductData {
  title: string
  subtitle: string
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

const categories = computed(() => {
  const cats = new Set<string>()
  currentData.value?.products?.forEach(p => {
    if (p.category) cats.add(p.category)
  })
  return Array.from(cats)
})
</script>

<template>
  <div class="homepage">
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-circle hero-circle-1"></div>
        <div class="hero-circle hero-circle-2"></div>
        <div class="hero-circle hero-circle-3"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{{ currentData?.title }}</h1>
        <p class="hero-subtitle">{{ currentData?.subtitle }}</p>
        <div class="hero-line"></div>
      </div>
    </section>

    <div class="page-wrapper">
      <div v-if="categories.length" class="category-tags">
        <span
          v-for="cat in categories"
          :key="cat"
          class="category-tag"
        >
          {{ cat }}
        </span>
      </div>

      <div class="product-grid">
        <template v-for="product in currentData?.products" :key="product.name">
          <a
            v-if="product.link"
            :href="product.link"
            class="product-card-link"
          >
            <div class="product-card">
              <div class="product-icon-wrapper">
                <div class="product-icon">
                  <img :src="product.image" :alt="product.name" />
                </div>
                <div class="product-icon-glow"></div>
              </div>
              <div class="product-content">
                <span v-if="product.category" class="product-category">{{ product.category }}</span>
                <h3 class="product-name">{{ product.name }}</h3>
                <p v-if="product.description" class="product-desc">{{ product.description }}</p>
              </div>
              <div class="product-arrow">→</div>
            </div>
          </a>
          <div v-else class="product-card">
            <div class="product-icon-wrapper">
              <div class="product-icon">
                <img :src="product.image" :alt="product.name" />
              </div>
              <div class="product-icon-glow"></div>
            </div>
            <div class="product-content">
              <span v-if="product.category" class="product-category">{{ product.category }}</span>
              <h3 class="product-name">{{ product.name }}</h3>
              <p v-if="product.description" class="product-desc">{{ product.description }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homepage {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2f6 50%, #f0f4f8 100%);
}

.hero {
  position: relative;
  padding: 80px 40px 60px;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}

.hero-circle-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 148, 221, 0.08) 0%, transparent 70%);
  top: -100px;
  left: -100px;
  animation: float 20s ease-in-out infinite;
}

.hero-circle-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%);
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  animation: float 15s ease-in-out infinite reverse;
}

.hero-circle-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 148, 221, 0.05) 0%, transparent 70%);
  bottom: -50px;
  left: 30%;
  animation: float 18s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 72px;
  font-weight: 700;
  letter-spacing: 12px;
  color: #1a1a2e;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #1a1a2e 0%, #0094dd 50%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 4px;
  color: #666;
  margin: 0 0 24px;
  text-transform: uppercase;
}

.hero-line {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #0094dd, transparent);
  margin: 0 auto;
  border-radius: 2px;
}

.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px 80px;
}

.category-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.category-tag {
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 148, 221, 0.2);
  border-radius: 24px;
  font-size: 13px;
  font-weight: 500;
  color: #0094dd;
  letter-spacing: 0.5px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.product-card {
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0094dd, #00d4ff);
  transform: scaleX(0);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 148, 221, 0.12);
}

.product-card:hover::before {
  transform: scaleX(1);
}

.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card-link:hover .product-name {
  color: #0094dd;
}

.product-card-link:hover .product-arrow {
  opacity: 1;
  transform: translateX(0);
}

.product-icon-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
}

.product-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.product-icon img {
  width: 90%;
  height: 90%;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  transition: transform 0.4s ease;
}

.product-card:hover .product-icon img {
  transform: scale(1.08);
}

.product-icon-glow {
  position: absolute;
  inset: 20%;
  background: radial-gradient(circle, rgba(0, 148, 221, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
}

.product-content {
  text-align: center;
}

.product-category {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #0094dd;
  margin-bottom: 12px;
  padding: 4px 12px;
  background: rgba(0, 148, 221, 0.08);
  border-radius: 12px;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 8px;
  transition: color 0.3s ease;
}

.product-desc {
  font-size: 13px;
  color: #888;
  margin: 0;
  line-height: 1.5;
}

.product-arrow {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateX(-10px) translateY(-50%);
  font-size: 20px;
  color: #0094dd;
  opacity: 0;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .hero {
    padding: 60px 24px 40px;
  }

  .hero-title {
    font-size: 48px;
    letter-spacing: 8px;
  }

  .page-wrapper {
    padding: 0 24px 60px;
  }
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero {
    padding: 40px 16px 32px;
  }

  .hero-title {
    font-size: 36px;
    letter-spacing: 6px;
  }

  .hero-subtitle {
    font-size: 14px;
    letter-spacing: 2px;
  }

  .page-wrapper {
    padding: 0 16px 40px;
  }

  .product-card {
    padding: 24px;
  }

  .product-icon-wrapper {
    width: 100px;
    height: 100px;
  }
}
</style>
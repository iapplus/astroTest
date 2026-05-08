<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Article {
  title: string
  slug: string
}

interface Category {
  id: string
  label: string
  icon: string
}

interface LocaleData {
  categories: Category[]
  articles: Record<string, Article[]>
  noArticles?: string
}

interface Props {
  data: Record<string, LocaleData>
  basePath?: string
}

const props = withDefaults(defineProps<Props>(), {
  basePath: ''
})

const currentLocale = ref('')
const activeCategory = ref('')

onMounted(() => {
  const path = window.location.pathname
  const segments = path.split('/').filter(Boolean)
  const locale = segments[0]
  const supportedLocales = ['ja', 'de', 'es', 'fr', 'it']
  currentLocale.value = supportedLocales.includes(locale) ? locale : ''

  const params = new URLSearchParams(window.location.search)
  const t = props.data[currentLocale.value] || props.data['']
  activeCategory.value = params.get('category') || t?.categories[0]?.id || ''
})

const currentData = computed(() => {
  return props.data[currentLocale.value] || props.data['']
})

const categories = computed(() => currentData.value?.categories || [])
const articles = computed(() => currentData.value?.articles || {})
const noArticlesText = computed(() => currentData.value?.noArticles || 'No articles yet')

const fullBasePath = computed(() => {
  return currentLocale.value ? '/' + currentLocale.value : ''
})

const navigateTo = (categoryId: string) => {
  activeCategory.value = categoryId
  const url = `${fullBasePath.value}${props.basePath}?category=${encodeURIComponent(categoryId)}`
  window.history.pushState({}, '', url)
}
</script>

<template>
  <div class="category-page-wrapper">
    <div class="category-nav">
      <a
        v-for="cat in categories"
        :key="cat.id"
        :href="`${fullBasePath}${basePath}?category=${encodeURIComponent(cat.id)}`"
        class="category-item"
        :class="{ active: activeCategory === cat.id }"
        @click.prevent="navigateTo(cat.id)"
      >
        <div class="category-icon">{{ cat.icon }}</div>
        <div class="category-label">{{ cat.label }}</div>
      </a>
    </div>

    <div
      v-for="cat in categories"
      :key="cat.id"
      class="articles-content"
      :class="{ active: activeCategory === cat.id }"
    >
      <div class="articles-section">
        <div class="articles-title">{{ cat.label }}</div>
        <ul v-if="articles[cat.id]?.length" class="articles-list">
          <li v-for="article in articles[cat.id]" :key="article.slug" class="article-item">
            <a :href="`${fullBasePath}/${article.slug}`" class="article-link">
              {{ article.title }}
            </a>
          </li>
        </ul>
        <div v-else class="no-articles">{{ noArticlesText }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}

.category-nav {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.category-item {
  padding: 16px 32px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #fff;
  text-align: center;
  min-width: 140px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.category-item:hover {
  border-color: #0094dd;
  color: #0094dd;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 148, 221, 0.15);
}

.category-item.active {
  border-color: #0094dd;
  border-width: 3px;
  color: #0094dd;
  background: linear-gradient(135deg, rgba(0, 148, 221, 0.05), rgba(0, 212, 255, 0.05));
}

.category-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.category-label {
  font-size: 14px;
  font-weight: 500;
}

.articles-section {
  background: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.articles-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #222;
  text-align: center;
}

.articles-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.article-item {
  border-bottom: 1px solid #f0f0f0;
}

.article-item:last-child {
  border-bottom: none;
}

.article-link {
  display: block;
  padding: 16px 24px;
  color: #222;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
  text-align: left;
  border-radius: 8px;
}

.article-link:hover {
  color: #0094dd;
  background: rgba(0, 148, 221, 0.05);
}

.no-articles {
  color: #999;
  text-align: center;
  padding: 40px 0;
}

.articles-content {
  display: none;
}

.articles-content.active {
  display: block;
}

@media (max-width: 768px) {
  .category-page-wrapper {
    padding: 40px 16px;
  }

  .category-nav {
    gap: 12px;
    margin-bottom: 32px;
  }

  .category-item {
    padding: 14px 20px;
    min-width: 100px;
    flex: 1;
    min-width: calc(50% - 6px);
  }

  .category-icon {
    font-size: 28px;
    margin-bottom: 6px;
  }

  .category-label {
    font-size: 13px;
  }

  .articles-section {
    padding: 24px 16px;
  }

  .articles-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .article-link {
    padding: 14px 16px;
    font-size: 15px;
  }
}
</style>
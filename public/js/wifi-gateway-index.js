document.body.setAttribute('data-homepage', 'true');

function getCurrentLocale() {
  var path = window.location.pathname;
  var segments = path.split('/').filter(function(s) { return s; });
  var locale = segments[0];
  
  if (['ja', 'de', 'es', 'fr', 'it'].indexOf(locale) !== -1) {
    return locale;
  }
  return '';
}

function getTranslations(locale) {
  var translations = {
    '': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: 'Features', icon: '✨' },
        { id: 'How To Install', label: 'How To Install', icon: '🔧' },
        { id: 'Installation Requirements', label: 'Installation Requirements', icon: '📋' },
        { id: 'Troubleshooting', label: 'Troubleshooting', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'How to connect Wi-Fi Gateway', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: 'Troubleshooting connection issues', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'Wireless Connectivity', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'Remote Control', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'Step-by-Step Installation', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Wi-Fi Requirements', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'LED Indicators', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: 'No articles yet',
    },
    'ja': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: '機能', icon: '✨' },
        { id: 'How To Install', label: '設置方法', icon: '🔧' },
        { id: 'Installation Requirements', label: '設置要件', icon: '📋' },
        { id: 'Troubleshooting', label: 'トラブルシューティング', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'Wi-Fiゲートウェイの接続方法', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: '接続の問題のトラブルシューティング', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'ワイヤレス接続', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'リモートコントロール', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'ステップバイステップ設置', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Wi-Fi要件', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'LEDインジケーター', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: '記事がありません',
    },
    'de': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: 'Funktionen', icon: '✨' },
        { id: 'How To Install', label: 'Installation', icon: '🔧' },
        { id: 'Installation Requirements', label: 'Anforderungen', icon: '📋' },
        { id: 'Troubleshooting', label: 'Fehlerbehebung', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'Wie man das Wi-Fi-Gateway verbindet', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: 'Fehlerbehebung bei Verbindungsproblemen', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'Drahtlose Verbindung', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'Fernsteuerung', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'Schritt-für-Schritt-Installation', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Wi-Fi-Anforderungen', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'LED-Anzeigen', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: 'Noch keine Artikel',
    },
    'es': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: 'Características', icon: '✨' },
        { id: 'How To Install', label: 'Cómo instalar', icon: '🔧' },
        { id: 'Installation Requirements', label: 'Requisitos de instalación', icon: '📋' },
        { id: 'Troubleshooting', label: 'Solución de problemas', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'Cómo conectar la puerta de enlace Wi-Fi', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: 'Solución de problemas de conexión', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'Conectividad inalámbrica', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'Control remoto', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'Instalación paso a paso', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Requisitos de Wi-Fi', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'Indicadores LED', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: 'Aún no hay artículos',
    },
    'fr': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: 'Caractéristiques', icon: '✨' },
        { id: 'How To Install', label: 'Comment installer', icon: '🔧' },
        { id: 'Installation Requirements', label: 'Exigences d\'installation', icon: '📋' },
        { id: 'Troubleshooting', label: 'Dépannage', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'Comment connecter la passerelle Wi-Fi', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: 'Dépannage des problèmes de connexion', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'Connectivité sans fil', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'Télécommande', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'Installation étape par étape', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Exigences Wi-Fi', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'Indicateurs LED', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: 'Pas encore d\'articles',
    },
    'it': {
      categories: [
        { id: 'FAQ', label: 'FAQ', icon: '❓' },
        { id: 'Features', label: 'Caratteristiche', icon: '✨' },
        { id: 'How To Install', label: 'Come installare', icon: '🔧' },
        { id: 'Installation Requirements', label: 'Requisiti di installazione', icon: '📋' },
        { id: 'Troubleshooting', label: 'Risoluzione dei problemi', icon: '🔍' },
      ],
      articles: {
        'FAQ': [
          { title: 'Come connettere il gateway Wi-Fi', slug: 'wifi-gateway/faq/how-to-connect/' },
          { title: 'Risoluzione dei problemi di connessione', slug: 'wifi-gateway/faq/troubleshooting-connection/' },
        ],
        'Features': [
          { title: 'Connettività wireless', slug: 'wifi-gateway/features/wireless-connectivity/' },
          { title: 'Controllo remoto', slug: 'wifi-gateway/features/remote-control/' },
        ],
        'How To Install': [
          { title: 'Installazione passo passo', slug: 'wifi-gateway/how-to-install/step-by-step/' },
        ],
        'Installation Requirements': [
          { title: 'Requisiti Wi-Fi', slug: 'wifi-gateway/installation-requirements/wifi-requirements/' },
        ],
        'Troubleshooting': [
          { title: 'Indicatori LED', slug: 'wifi-gateway/troubleshooting/led-indicators/' },
        ],
      },
      noArticles: 'Nessun articolo ancora',
    },
  };
  
  return translations[locale] || translations[''];
}

function getInitialCategory() {
  var params = new URLSearchParams(window.location.search);
  return params.get('category') || 'FAQ';
}

function renderPage() {
  var locale = getCurrentLocale();
  var t = getTranslations(locale);
  var categories = t.categories;
  var categoryArticles = t.articles;
  var initialCategory = getInitialCategory();
  var pageWrapper = document.getElementById('page-wrapper');
  
  var basePath = locale ? '/' + locale : '';
  
  var html = '<div class="category-nav">';
  
  categories.forEach(function(category) {
    var isActive = initialCategory === category.id;
    var activeClass = isActive ? ' active' : '';
    html += '<a href="' + basePath + '/wifi-gateway/?category=' + encodeURIComponent(category.id) + '" class="category-item' + activeClass + '" data-category="' + category.id + '">';
    html += '<div class="category-icon">' + category.icon + '</div>';
    html += '<div class="category-label">' + category.label + '</div>';
    html += '</a>';
  });
  
  html += '</div>';
  
  categories.forEach(function(category) {
    var docs = categoryArticles[category.id] || [];
    var isActive = initialCategory === category.id;
    var activeClass = isActive ? ' active' : '';
    
    html += '<div class="articles-content' + activeClass + '" data-category="' + category.id + '">';
    html += '<div class="articles-section">';
    html += '<div class="articles-title">' + category.label + '</div>';
    
    if (docs.length > 0) {
      html += '<ul class="articles-list">';
      docs.forEach(function(doc) {
        html += '<li class="article-item">';
        html += '<a href="' + basePath + '/' + doc.slug + '" class="article-link">' + doc.title + '</a>';
        html += '</li>';
      });
      html += '</ul>';
    } else {
      html += '<div class="no-articles">' + t.noArticles + '</div>';
    }
    
    html += '</div>';
    html += '</div>';
  });
  
  pageWrapper.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderPage);

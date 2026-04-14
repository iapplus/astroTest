document.body.setAttribute('data-homepage', 'true');

var categories = [
  { id: 'FAQ', label: 'FAQ', icon: '❓' },
  { id: 'Features', label: 'Features', icon: '✨' },
  { id: 'How To Install', label: 'How To Install', icon: '🔧' },
  { id: 'Installation Requirements', label: 'Installation Requirements', icon: '📋' },
  { id: 'Troubleshooting', label: 'Troubleshooting', icon: '🔍' },
];

var categoryArticles = {
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
};

function getInitialCategory() {
  var params = new URLSearchParams(window.location.search);
  return params.get('category') || 'FAQ';
}

function renderPage() {
  var initialCategory = getInitialCategory();
  var pageWrapper = document.getElementById('page-wrapper');
  
  var html = '<div class="category-nav">';
  
  categories.forEach(function(category) {
    var isActive = initialCategory === category.id;
    var activeClass = isActive ? ' active' : '';
    html += '<a href="/wifi-gateway/?category=' + encodeURIComponent(category.id) + '" class="category-item' + activeClass + '" data-category="' + category.id + '">';
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
        html += '<a href="/' + doc.slug + '" class="article-link">' + doc.title + '</a>';
        html += '</li>';
      });
      html += '</ul>';
    } else {
      html += '<div class="no-articles">暂无文章</div>';
    }
    
    html += '</div>';
    html += '</div>';
  });
  
  pageWrapper.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderPage);

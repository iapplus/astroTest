document.addEventListener('DOMContentLoaded', function() {
  var categoryItems = document.querySelectorAll('.category-item');
  var articlesContents = document.querySelectorAll('.articles-content');

  function switchCategory(categoryId) {
    categoryItems.forEach(function(item) {
      item.classList.remove('active');
      if (item.dataset.category === categoryId) {
        item.classList.add('active');
      }
    });

    articlesContents.forEach(function(content) {
      content.classList.remove('active');
      if (content.dataset.category === categoryId) {
        content.classList.add('active');
      }
    });

    var url = new URL(window.location.href);
    url.searchParams.set('category', categoryId);
    window.history.replaceState({}, '', url);
  }

  categoryItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var categoryId = item.dataset.category;
      switchCategory(categoryId);
    });
  });
});

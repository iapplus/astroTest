document.body.setAttribute('data-homepage', 'true');

document.addEventListener('DOMContentLoaded', function() {
  function hideSidebars() {
    var sidebars = document.querySelectorAll('aside, nav[aria-label], .sidebar, .left-sidebar, .right-sidebar');
    for (var i = 0; i < sidebars.length; i++) {
      sidebars[i].style.display = 'none';
    }
    var mains = document.querySelectorAll('main');
    for (var i = 0; i < mains.length; i++) {
      mains[i].style.gridTemplateColumns = '1fr';
    }
  }
  hideSidebars();
  setTimeout(hideSidebars, 100);
  setTimeout(hideSidebars, 500);
});

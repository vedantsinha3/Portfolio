const navToggle = document.getElementById('nav-toggle');
const siteNav   = document.getElementById('site-nav');

navToggle.addEventListener('click', function() {
  siteNav.classList.toggle('open');
  navToggle.classList.toggle('open');
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    setTimeout(() => {
      if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        navToggle.classList.remove('open');
      }
    }, 100);
  });
});

(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  const navLinks = document.querySelectorAll('.nav-list a');

  // モバイルメニュー開閉
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('is-open');
      navToggle.setAttribute('aria-label',
        navList.classList.contains('is-open') ? 'メニューを閉じる' : 'メニューを開く'
      );
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('is-open');
      });
    });
  }

  // スムーススクロール（アンカーリンク用）
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

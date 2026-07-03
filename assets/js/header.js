/**
 * Vareon Infotech — Site Header Component
 */
(function () {
  'use strict';

  const LOGO_PATH = 'images/image_bdd980b2_(1).png';

  function getBasePath() {
    const depth = document.querySelector('meta[name="page-depth"]');
    return depth ? depth.content : '';
  }

  function resolveAsset(path) {
    const base = getBasePath();
    return base ? base + '/' + path : path;
  }

  function isActive(href) {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    if (href === 'index.html' && (current === '' || current === 'index.html')) return true;
    if (href !== 'index.html' && current === href) return true;
    return false;
  }

  function buildHeader() {
    const base = getBasePath();
    const pfx  = base ? base + '/' : '';

    const pages = [
      { label: 'Home',     href: pfx + 'index.html' },
      { label: 'About',    href: pfx + 'about.html' },
      {
        label: 'Services',
        href: pfx + 'services.html',
        dropdown: [
          {
            label: 'Chatbot Solutions',
            href: pfx + 'chatbot-solutions.html',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>'
          }
        ]
      },
      { label: 'Contact',  href: pfx + 'contact.html' }
    ];

    const navItems = pages.map(page => {
      const active = isActive(page.href.split('/').pop());
      if (page.dropdown) {
        const ddLinks = page.dropdown.map(d => `
          <a href="${d.href}" class="dropdown-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18">${d.icon}</svg>
            ${d.label}
          </a>`).join('');
        return `
          <li class="nav-item" role="none">
            <a href="${page.href}" class="nav-link${active ? ' active' : ''}" role="menuitem" aria-haspopup="true" aria-expanded="false">
              ${page.label}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="14" height="14" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
            <div class="nav-dropdown" role="menu">${ddLinks}</div>
          </li>`;
      }
      return `
        <li class="nav-item" role="none">
          <a href="${page.href}" class="nav-link${active ? ' active' : ''}" role="menuitem">${page.label}</a>
        </li>`;
    }).join('');

    const html = `
<header class="site-header" id="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="${pfx}index.html" class="site-logo" aria-label="Vareon Infotech Home">
        <img src="${resolveAsset(LOGO_PATH)}" alt="Vareon Infotech Logo" width="48" height="48" loading="eager">
        <div class="logo-text">
          <span class="logo-name">Vareon Infotech</span>
          <span class="logo-tagline">AI Chatbot Solutions</span>
        </div>
      </a>

      <nav aria-label="Main navigation">
        <ul class="site-nav" id="site-nav" role="menubar">
          ${navItems}
        </ul>
      </nav>

      <a href="${pfx}contact.html" class="btn btn-primary header-cta" aria-label="Get Free Consultation">
        Get Free Consultation
      </a>

      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

    const placeholder = document.getElementById('header-placeholder') || document.getElementById('header');
    if (placeholder) {
      placeholder.outerHTML = html;
    } else {
      document.body.insertAdjacentHTML('afterbegin', html);
    }

    initHeaderBehavior();
  }

  function initHeaderBehavior() {
    const header = document.getElementById('site-header');
    const toggle = document.getElementById('nav-toggle');
    const nav    = document.getElementById('site-nav');

    if (!header || !toggle || !nav) return;

    // Scroll handler
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Mobile menu toggle
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('mobile-open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Mobile dropdown toggles
    nav.querySelectorAll('.nav-item').forEach(item => {
      const link = item.querySelector('.nav-link[aria-haspopup]');
      if (!link) return;
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('mobile-dd-open');
          link.setAttribute('aria-expanded', String(item.classList.contains('mobile-dd-open')));
        }
      });
    });

    // Close mobile menu when a link is clicked
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function () {
        nav.classList.remove('mobile-open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        nav.classList.remove('mobile-open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Resize cleanup
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        nav.classList.remove('mobile-open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildHeader);
  } else {
    buildHeader();
  }
})();

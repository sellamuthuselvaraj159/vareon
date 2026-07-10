/**
 * Vareon Infotech — Site Footer Component
 */
(function () {
  'use strict';

  const LOGO_PATH = 'images/vareon-technologies-logo.png';

  function getBasePath() {
    const depth = document.querySelector('meta[name="page-depth"]');
    return depth ? depth.content : '';
  }

  function resolveAsset(path) {
    const base = getBasePath();
    return base ? base + '/' + path : path;
  }

  function buildFooter() {
    const base = getBasePath();
    const pfx = base ? base + '/' : '';
    const year = new Date().getFullYear();

    const html = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="${pfx || '/'}" aria-label="Vareon Infotech Home">
          <img src="${resolveAsset(LOGO_PATH)}" alt="Vareon Infotech" width="52" height="52" loading="lazy">
        </a>
        <p>Designing, developing and deploying intelligent AI Chatbots powered by OpenAI and Google Cloud to help businesses automate, grow, and deliver exceptional customer experiences.</p>
        <div class="footer-social" aria-label="Social media links">
          <a href="#" class="social-link" aria-label="LinkedIn" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Twitter / X" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-link" aria-label="Facebook" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@Vareon_tech" class="social-link" aria-label="YouTube" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <p class="footer-col-title">Company</p>
        <ul class="footer-links">
          <li><a href="${pfx || '/'}">Home</a></li>
          <li><a href="${pfx}about">About Us</a></li>
          <li><a href="${pfx}services">Services</a></li>
          <li><a href="${pfx}chatbot-solutions">Chatbot Solutions</a></li>
          <li><a href="${pfx}contact">Contact Us</a></li>
        </ul>
      </div>

      <!-- Solutions -->
      <div>
        <p class="footer-col-title">Solutions</p>
        <ul class="footer-links">
          <li><a href="${pfx}chatbot-solutions#ai-customer-support">AI Customer Support</a></li>
          <li><a href="${pfx}chatbot-solutions#healthcare-chatbots">Healthcare Chatbots</a></li>
          <li><a href="${pfx}chatbot-solutions#whatsapp-chatbots">WhatsApp Chatbots</a></li>
          <li><a href="${pfx}chatbot-solutions#lead-generation">Lead Generation</a></li>
          <li><a href="${pfx}chatbot-solutions#appointment-booking">Appointment Booking</a></li>
          <li><a href="${pfx}chatbot-solutions#rag">RAG Chatbots</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <p class="footer-col-title">Contact</p>
        <ul class="footer-links">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:info@vareontechnologies.com">info@vareontechnologies.com</a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.47-.47a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <a href="tel:+919342185985">+91 93421 85985</a>
          </li>
        <!-- <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            Mon–Fri, 9 AM – 6 PM EST
          </li> -->
        </ul>
      </div>

    </div><!-- /footer-grid -->

    <div class="footer-bottom">
      <p>&copy; ${year} Vareon Technologies. All rights reserved.</p>
      <nav class="footer-bottom-links" aria-label="Legal navigation">
        <a href="${pfx}privacy-policy">Privacy Policy</a>
        <a href="${pfx}disclaimer">Disclaimer</a>
        <a href="${pfx}sitemap.xml" rel="nofollow">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
<!-- Chat Widget -->
<div id="vareon-chat-widget"></div>

`;

    const placeholder = document.getElementById('footer-placeholder') || document.getElementById('footer');
    if (placeholder) {
      placeholder.outerHTML = html;
    } else {
      document.body.insertAdjacentHTML('beforeend', html);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildFooter);
  } else {
    buildFooter();
  }
})();

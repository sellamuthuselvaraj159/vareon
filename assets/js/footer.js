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
          <a href="https://www.instagram.com/vareon_tech/" class="social-link instagram-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       viewBox="0 0 16 16"
       fill="currentColor"
       aria-hidden="true">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
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

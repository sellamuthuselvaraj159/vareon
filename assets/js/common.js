/**
 * Vareon Infotech — Common Utilities
 * Handles: scroll animations, FAQ accordion, contact form, counter animations
 */
(function () {
  'use strict';

  /* ---- Intersection Observer: fade-in animations ---- */
  function initFadeIn() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  /* ---- Animated stat counters ---- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
    const suffix = el.dataset.suffix || el.textContent.replace(/[0-9.]/g, '');
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ---- Animated stat bars (healthcare section) ---- */
  function initStatBars() {
    const bars = document.querySelectorAll('.health-stat-bar[data-width]');
    if (!bars.length) return;

    if (!('IntersectionObserver' in window)) {
      bars.forEach(b => { b.style.width = b.dataset.width; });
      return;
    }
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    bars.forEach(b => {
      b.style.width = '0%';
      observer.observe(b);
    });
  }

  /* ---- FAQ Accordion ---- */
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item   = btn.closest('.faq-item');
        const answer = item.querySelector('.faq-answer');
        const isOpen = btn.classList.contains('open');

        // Close all others in same list
        const parent = item.parentElement;
        parent.querySelectorAll('.faq-item').forEach(function (other) {
          const otherBtn    = other.querySelector('.faq-question');
          const otherAnswer = other.querySelector('.faq-answer');
          otherBtn.classList.remove('open');
          otherAnswer.classList.remove('open');
          otherBtn.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          btn.classList.add('open');
          answer.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const id     = anchor.getAttribute('href').slice(1);
        const target = id ? document.getElementById(id) : null;
        if (target) {
          e.preventDefault();
          const headerH = document.getElementById('site-header')
            ? document.getElementById('site-header').offsetHeight
            : 72;
          const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ---- Contact Form Validation & Submission ---- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fields = {
      name:    { required: true,  minLen: 2, label: 'Name' },
      email:   { required: true,  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, label: 'Email address' },
      phone:   { required: false, pattern: /^[+]?[\d\s\-().]{7,20}$/, label: 'Phone number' },
      company: { required: false, label: 'Company' },
      message: { required: true,  minLen: 10, label: 'Message' }
    };

    function showError(fieldName, msg) {
      const el  = form.querySelector(`[name="${fieldName}"]`);
      const err = form.querySelector(`#err-${fieldName}`);
      if (el) el.classList.add('error');
      if (err) { err.textContent = msg; err.classList.add('show'); }
    }

    function clearError(fieldName) {
      const el  = form.querySelector(`[name="${fieldName}"]`);
      const err = form.querySelector(`#err-${fieldName}`);
      if (el) el.classList.remove('error');
      if (err) err.classList.remove('show');
    }

    function validateField(fieldName) {
      const rule  = fields[fieldName];
      const input = form.querySelector(`[name="${fieldName}"]`);
      if (!rule || !input) return true;
      const val = input.value.trim();

      if (rule.required && !val) {
        showError(fieldName, `${rule.label} is required.`);
        return false;
      }
      if (val && rule.minLen && val.length < rule.minLen) {
        showError(fieldName, `${rule.label} must be at least ${rule.minLen} characters.`);
        return false;
      }
      if (val && rule.pattern && !rule.pattern.test(val)) {
        showError(fieldName, `Please enter a valid ${rule.label.toLowerCase()}.`);
        return false;
      }
      clearError(fieldName);
      return true;
    }

    // Inline validation on blur
    Object.keys(fields).forEach(function (name) {
      const input = form.querySelector(`[name="${name}"]`);
      if (input) {
        input.addEventListener('blur', function () { validateField(name); });
        input.addEventListener('input', function () {
          if (input.classList.contains('error')) validateField(name);
        });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      Object.keys(fields).forEach(function (name) {
        if (!validateField(name)) valid = false;
      });

      if (!valid) return;

      const btn = form.querySelector('[type="submit"]');
      const msg = form.querySelector('.form-message');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        btn.disabled = false;
        btn.textContent = 'Send Message';
        if (data.success) {
          form.reset();
          if (msg) {
            msg.className = 'form-message success show';
            msg.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Thank you! Your message has been sent successfully.`;
            setTimeout(function () { msg.className = 'form-message'; }, 8000);
          }
        } else {
          if (msg) {
            msg.className = 'form-message error show';
            msg.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Unable to send your message. Please try again.`;
            setTimeout(function () { msg.className = 'form-message'; }, 8000);
          }
        }
      })
      .catch(function (error) {
        btn.disabled = false;
        btn.textContent = 'Send Message';
        if (msg) {
          msg.className = 'form-message error show';
          msg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Unable to send your message. Please try again.`;
          setTimeout(function () { msg.className = 'form-message'; }, 8000);
        }
      });
    });
  }

  /* ---- Chatbot typing demo animation (hero) ---- */
  function initChatDemo() {
    const typing = document.querySelector('.chat-typing');
    if (!typing) return;

    const responses = [
      'I can help schedule your appointment. What date works best for you?',
      'Your account balance is $2,450. Is there anything else I can help with?',
      'I\'ve found 3 matching properties in your area. Shall I send the details?',
      'Your order #4821 will arrive tomorrow between 2 PM and 5 PM.'
    ];

    let index = 0;
    setInterval(function () {
      index = (index + 1) % responses.length;
      const bubble = typing.previousElementSibling;
      if (bubble && bubble.classList.contains('bot')) {
        bubble.style.opacity = '0';
        setTimeout(function () {
          bubble.textContent = responses[index];
          bubble.style.opacity = '1';
        }, 300);
      }
    }, 4000);
  }

  /* ---- Init on DOM ready ---- */
  function init() {
    initFadeIn();
    initCounters();
    initStatBars();
    initFAQ();
    initSmoothScroll();
    initContactForm();
    initChatDemo();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

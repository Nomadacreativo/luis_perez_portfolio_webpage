/* ==========================================================================
   LUIS PÉREZ · INOX ONE - JAVASCRIPT LOGIC
   Dominio: luisperez.pro
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 0. FALLBACK SEGURO DE IMÁGENES (SIN INLINE ONERROR PARA CUMPLIR CSP)
  document.querySelectorAll('.brand-logo-img, .footer-brand-title img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
    });
  });

  // 1. FILTRADO DE PROYECTOS DESTACADOS
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.animation = 'none';
            void card.offsetWidth;
            card.style.animation = 'fadeInCard 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 2. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  const faqToggles = document.querySelectorAll('.faq-toggle-btn');

  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq-card-item');
      if (!card) return;
      const body = card.querySelector('.faq-body-content');
      const isExpanded = card.classList.contains('active');

      // Cerrar otros acordeones
      document.querySelectorAll('.faq-card-item').forEach(c => {
        c.classList.remove('active');
        const toggle = c.querySelector('.faq-toggle-btn');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        const b = c.querySelector('.faq-body-content');
        if (b) b.style.maxHeight = null;
      });

      // Abrir el seleccionado si no estaba abierto
      if (!isExpanded && body) {
        card.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  window.addEventListener('resize', () => {
    const activeFaqBody = document.querySelector('.faq-card-item.active .faq-body-content');
    if (activeFaqBody) {
      activeFaqBody.style.maxHeight = activeFaqBody.scrollHeight + 'px';
    }
  });

  // 4. NAVEGACIÓN MÓVIL (HAMBURGER & DRAWER)
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (mobileToggle && mobileDrawer) {
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.classList.add('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
    }
  }

  function closeMobileNav() {
    if (mobileToggle && mobileDrawer) {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.classList.remove('is-open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }
  }

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    document.addEventListener('click', (e) => {
      if (mobileDrawer.classList.contains('is-open') && !mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        closeMobileNav();
      }
    });
  }

  // 5. MODAL DE CONTACTO / COTIZACIÓN (SI EXISTE)
  const modal = document.getElementById('contactModal');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');

  if (modal) {
    function openModal() {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    openModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    }));

    closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
      }
    });
  }

  // 6. SCROLL SUAVE PARA LINKS INTERNOS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        try {
          const rawId = targetId.startsWith('#') ? targetId.slice(1) : targetId;
          const targetElement = document.getElementById(rawId) || document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // Selector no estándar o inválido manejado de forma segura
        }
      }
    });
  });
});

/* ==========================================================================
   LUIS PÉREZ · INOX ONE - JAVASCRIPT LOGIC
   Dominio: luisperez.pro
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SELECTOR DE PLANES (MENSUAL vs ANUAL -20%)
  const btnMonthly = document.getElementById('billingMonthly');
  const btnAnnual = document.getElementById('billingAnnual');
  const priceBasic = document.getElementById('priceBasic');
  const pricePlus = document.getElementById('pricePlus');
  const cycleBasic = document.getElementById('cycleBasic');
  const cyclePlus = document.getElementById('cyclePlus');

  const pricingData = {
    monthly: {
      basic: '6,500',
      plus: '8,500',
      cycle: 'MXN / mes'
    },
    annual: {
      basic: '5,200',
      plus: '6,800',
      cycle: 'MXN / mes (-20% anual)'
    }
  };

  if (btnMonthly && btnAnnual && priceBasic && pricePlus) {
    btnMonthly.addEventListener('click', () => {
      btnMonthly.classList.add('active');
      btnAnnual.classList.remove('active');
      
      priceBasic.textContent = pricingData.monthly.basic;
      pricePlus.textContent = pricingData.monthly.plus;
      if (cycleBasic) cycleBasic.textContent = pricingData.monthly.cycle;
      if (cyclePlus) cyclePlus.textContent = pricingData.monthly.cycle;
    });

    btnAnnual.addEventListener('click', () => {
      btnAnnual.classList.add('active');
      btnMonthly.classList.remove('active');

      priceBasic.textContent = pricingData.annual.basic;
      pricePlus.textContent = pricingData.annual.plus;
      if (cycleBasic) cycleBasic.textContent = pricingData.annual.cycle;
      if (cyclePlus) cyclePlus.textContent = pricingData.annual.cycle;
    });
  }

  // 2. FILTRADO DE PROYECTOS DESTACADOS
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            card.style.animation = 'fadeInCard 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  const faqToggles = document.querySelectorAll('.faq-toggle-btn');

  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq-card-item');
      const body = card.querySelector('.faq-body-content');
      const isExpanded = card.classList.contains('active');

      // Cerrar otros acordeones
      document.querySelectorAll('.faq-card-item').forEach(c => {
        c.classList.remove('active');
        const b = c.querySelector('.faq-body-content');
        if (b) b.style.maxHeight = null;
      });

      // Abrir el seleccionado si no estaba abierto
      if (!isExpanded && body) {
        card.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
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
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

// Logic umum/global. Logic per fitur dipisah ke file sendiri (auth.js, dashboard.js, dst).

// Toggle menu navigasi mobile
(function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Filter kategori kelas populer di homepage
(function initCourseFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.course-card');
  const emptyState = document.getElementById('course-empty');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      buttons.forEach((btn) => {
        const isActive = btn === button;
        btn.setAttribute('aria-pressed', String(isActive));
        btn.classList.toggle('bg-navy', isActive);
        btn.classList.toggle('border-navy', isActive);
        btn.classList.toggle('text-white', isActive);
        btn.classList.toggle('border-gray-100', !isActive);
        btn.classList.toggle('text-gray-600', !isActive);
      });

      let visibleCount = 0;
      cards.forEach((card) => {
        const matches = filter === 'semua' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
        if (matches) visibleCount += 1;
      });

      if (emptyState) emptyState.classList.toggle('hidden', visibleCount > 0);
    });
  });
})();

// Pencarian kelas sederhana (client-side, cocokkan judul kartu)
(function initCourseSearch() {
  const inputs = [document.getElementById('search-input'), document.getElementById('search-input-mobile')];
  const cards = document.querySelectorAll('.course-card');
  const emptyState = document.getElementById('course-empty');

  inputs.forEach((input) => {
    if (!input) return;
    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('kelas-populer')?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      let visibleCount = 0;
      cards.forEach((card) => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() ?? '';
        const matches = query === '' || title.includes(query);
        card.classList.toggle('hidden', !matches);
        if (matches) visibleCount += 1;
      });
      if (emptyState) emptyState.classList.toggle('hidden', visibleCount > 0);
    });
  });
})();

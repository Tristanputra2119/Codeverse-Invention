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

// Render homepage catalog from shared course data.
(function renderHomepageCourses() {
  const grid = document.getElementById('homepage-course-grid');
  const filterContainer = document.getElementById('homepage-course-filters');
  if (!grid || !filterContainer || typeof COURSES_DATA === 'undefined') return;

  const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const categories = [...new Set(Object.values(COURSES_DATA).map((course) => course.category))];

  filterContainer.innerHTML = [
    ['semua', 'Semua'],
    ...categories.map((category) => [slugify(category), category]),
  ].map(([filter, label]) => `
    <button type="button" data-filter="${filter}"
      class="filter-btn rounded-full border ${filter === 'semua' ? 'border-navy bg-navy text-white' : 'border-gray-100 text-gray-600'} px-4 py-2 text-xs font-semibold"
      aria-pressed="${filter === 'semua'}">${label}</button>
  `).join('');

  grid.innerHTML = Object.entries(COURSES_DATA).map(([id, course]) => `
    <article data-category="${slugify(course.category)}" data-aos="fade-up"
      class="course-card flex flex-col overflow-hidden rounded-xl border border-[#d2c5ad] bg-white">
      <div class="aspect-video overflow-hidden bg-[#eae7e7]">
        <img src="${course.image}" alt="${course.title}" class="h-full w-full object-cover" loading="lazy" />
      </div>
      <div class="flex flex-1 flex-col gap-2 p-4">
        <p class="text-xs font-semibold text-[#765a00]">${course.category}</p>
        <h3 class="text-base font-bold leading-snug text-[#1c1b1b]">${course.title}</h3>
        <p class="flex flex-wrap gap-3 text-xs text-[#575e71]"><span>${course.duration}</span><span>${course.videos}</span></p>
        <a href="pages/course-detail.html?id=${id}"
          class="mt-auto block rounded-lg bg-primary py-2 text-center text-sm font-bold text-[#251a00] transition hover:bg-primary-hover">Lihat
          Detail</a>
      </div>
    </article>
  `).join('');
})();

// Combine active category and text query so either control preserves the other.
(function initCourseFilterSearch() {
  const buttons = [...document.querySelectorAll('.filter-btn')];
  const cards = [...document.querySelectorAll('.course-card')];
  const inputs = [document.getElementById('search-input'), document.getElementById('search-input-mobile')].filter(Boolean);
  const emptyState = document.getElementById('homepage-course-empty') || document.getElementById('course-empty');
  if (!cards.length) return;

  let activeFilter = buttons.find((button) => button.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'semua';
  let query = '';

  function updateResults() {
    let visibleCount = 0;
    cards.forEach((card) => {
      const matchesFilter = activeFilter === 'semua' || card.dataset.category === activeFilter;
      const matchesQuery = !query || card.textContent.toLowerCase().includes(query);
      const visible = matchesFilter && matchesQuery;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.textContent = query ? 'Kelas yang kamu cari belum ditemukan.' : 'Belum ada kelas untuk filter ini.';
      emptyState.classList.toggle('hidden', visibleCount > 0);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      buttons.forEach((currentButton) => {
        const isActive = currentButton === button;
        currentButton.setAttribute('aria-pressed', String(isActive));
        currentButton.classList.toggle('bg-navy', isActive);
        currentButton.classList.toggle('border-navy', isActive);
        currentButton.classList.toggle('text-white', isActive);
        currentButton.classList.toggle('border-gray-100', !isActive);
        currentButton.classList.toggle('text-gray-600', !isActive);
      });
      updateResults();
    });
  });

  inputs.forEach((input) => {
    const form = input.closest('form');
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      document.getElementById('kelas-populer')?.scrollIntoView({ behavior: 'smooth' });
    });

    input.addEventListener('input', () => {
      query = input.value.trim().toLowerCase();
      inputs.forEach((otherInput) => {
        if (otherInput !== input) otherInput.value = input.value;
      });
      updateResults();
    });
  });

  updateResults();
})();

// Mengisi halaman Detail Kelas secara dinamis berdasarkan ?id= di URL,
// datanya diambil dari js/courses-data.js (satu sumber data untuk semua halaman).

(function renderCourseDetail() {
  if (typeof COURSES_DATA === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');
  const fallbackId = Object.keys(COURSES_DATA)[0];
  const course = COURSES_DATA[requestedId] || COURSES_DATA[fallbackId];
  if (!course) return;

  document.title = `${course.title} — Codeverse`;
  document.getElementById('breadcrumb-title').textContent = course.title;
  document.getElementById('course-badge').textContent = course.category;
  document.getElementById('course-title').textContent = course.title;
  document.getElementById('course-description').textContent = course.description;
  document.getElementById('course-duration').textContent = course.duration;
  document.getElementById('course-participants').textContent = course.participants;
  document.getElementById('course-videos').textContent = course.videos;
  document.getElementById('course-videos-2').textContent = course.videos.split(' ')[0];
  document.getElementById('course-rating').textContent = course.rating;
  document.getElementById('course-icon').src = course.image;
  document.getElementById('course-icon').alt = course.title;
  document.getElementById('course-full-description').textContent = course.fullDescription;

  const curriculumEl = document.getElementById('course-curriculum');
  curriculumEl.innerHTML = '';
  course.curriculum.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 text-sm';
    li.innerHTML = `
      <span class="flex items-center gap-2 text-gray-900">
        <span class="${item.done ? 'text-primary-hover' : 'text-gray-400'}" aria-hidden="true">${item.done ? '✓' : '🔒'}</span>
        ${index + 1}. ${item.title}
      </span>
      <span class="text-xs text-gray-600">${item.duration}</span>
    `;
    curriculumEl.appendChild(li);
  });

  const reviewsEl = document.getElementById('course-reviews');
  reviewsEl.innerHTML = '';
  course.reviews.forEach((review) => {
    const figure = document.createElement('figure');
    figure.className = 'rounded-xl border border-gray-100 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.08)]';
    figure.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white" aria-hidden="true">${review.initials}</span>
        <figcaption class="text-sm font-semibold text-gray-900">${review.name}</figcaption>
      </div>
      <p class="mt-2 text-primary" aria-label="Rating 5 dari 5 bintang">★★★★★</p>
      <blockquote class="mt-1 text-sm text-gray-600">"${review.text}"</blockquote>
    `;
    reviewsEl.appendChild(figure);
  });
})();

// Mengisi halaman Detail Bootcamp secara dinamis berdasarkan ?id= di URL,
// datanya diambil dari js/bootcamps-data.js.

function formatRupiah(amount) {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

(function renderBootcampDetail() {
  if (typeof BOOTCAMPS_DATA === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get('id');
  const fallbackId = Object.keys(BOOTCAMPS_DATA)[0];
  const id = BOOTCAMPS_DATA[requestedId] ? requestedId : fallbackId;
  const bootcamp = BOOTCAMPS_DATA[id];
  if (!bootcamp) return;

  document.title = `${bootcamp.title} — Codeverse`;
  document.getElementById('breadcrumb-title').textContent = bootcamp.title;
  document.getElementById('bootcamp-badge').textContent = bootcamp.category;
  document.getElementById('bootcamp-title').textContent = bootcamp.title;
  document.getElementById('bootcamp-description').textContent = bootcamp.description;
  document.getElementById('bootcamp-startdate').textContent = `Mulai ${bootcamp.startDate}`;
  document.getElementById('bootcamp-duration').textContent = bootcamp.duration;
  document.getElementById('bootcamp-groupsize').textContent = bootcamp.groupSize;
  document.getElementById('bootcamp-icon').src = bootcamp.image;
  document.getElementById('bootcamp-icon').alt = bootcamp.title;
  document.getElementById('bootcamp-full-description').textContent = bootcamp.fullDescription;
  document.getElementById('bootcamp-price').textContent = formatRupiah(bootcamp.price);
  document.getElementById('bootcamp-original-price').textContent = formatRupiah(bootcamp.originalPrice);
  document.getElementById('bootcamp-cta').href = `payment.html?id=${id}`;

  document.getElementById('mentor-initial').textContent = bootcamp.mentor.name.charAt(0).toUpperCase();
  document.getElementById('mentor-name').textContent = bootcamp.mentor.name;
  document.getElementById('mentor-role').textContent = bootcamp.mentor.role;

  const scheduleEl = document.getElementById('bootcamp-schedule');
  scheduleEl.innerHTML = '';
  bootcamp.schedule.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between rounded-lg border border-gray-100 px-4 py-3 text-sm';
    li.innerHTML = `
      <span class="flex items-center gap-2 text-gray-900">
        <span class="text-primary-hover" aria-hidden="true">📌</span>
        ${index + 1}. ${item.title}
      </span>
      <span class="text-xs text-gray-600">${item.duration}</span>
    `;
    scheduleEl.appendChild(li);
  });

  const reviewsEl = document.getElementById('bootcamp-reviews');
  reviewsEl.innerHTML = '';
  bootcamp.reviews.forEach((review) => {
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

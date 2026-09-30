// Logic khusus halaman Payment (mock, tidak ada transaksi sungguhan).
// Ringkasan pesanan diisi dari js/bootcamps-data.js berdasarkan ?id= di URL.

function formatRupiah(amount) {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

(function renderOrderSummary() {
  if (typeof BOOTCAMPS_DATA === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const hasRequestedId = params.has('id');
  const requestedId = params.get('id');
  const fallbackId = Object.keys(BOOTCAMPS_DATA)[0];
  const bootcamp = hasRequestedId ? BOOTCAMPS_DATA[requestedId] : BOOTCAMPS_DATA[fallbackId];
  if (!bootcamp) {
    window.location.replace(`404.html?resource=payment&id=${encodeURIComponent(requestedId || '')}`);
    return;
  }

  document.title = `Pembayaran ${bootcamp.title} — EduVerse`;
  document.getElementById('order-icon').src = bootcamp.image;
  document.getElementById('order-icon').alt = bootcamp.title;
  document.getElementById('order-title').textContent = bootcamp.title;
  document.getElementById('order-startdate').textContent = `Mulai ${bootcamp.startDate}`;
  document.getElementById('order-original-price').textContent = formatRupiah(bootcamp.originalPrice);
  document.getElementById('order-discount').textContent = `-${formatRupiah(bootcamp.originalPrice - bootcamp.price)}`;
  document.getElementById('order-total').textContent = formatRupiah(bootcamp.price);
  document.getElementById('modal-order-title').textContent = bootcamp.title;
})();

(function initPaymentForm() {
  const form = document.getElementById('payment-form');
  const modal = document.getElementById('thank-you-modal');
  if (!form || !modal) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
})();

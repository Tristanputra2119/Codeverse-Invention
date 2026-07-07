// Fitur Authentication (mock). Ini adalah demo statis untuk lomba INVENTION 2026 —
// data akun disimpan di localStorage browser saja, TIDAK terhubung ke server/backend sungguhan.

function getStoredUser() {
  const raw = localStorage.getItem('codeverse_user');
  return raw ? JSON.parse(raw) : null;
}

function setSession(email) {
  localStorage.setItem('codeverse_session', email);
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showAuthError(message) {
  const el = document.getElementById('auth-error');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
}

function hideAuthError() {
  const el = document.getElementById('auth-error');
  if (!el) return;
  el.classList.add('hidden');
  el.textContent = '';
}

function setActiveTab(tab) {
  const tabDaftar = document.getElementById('tab-daftar');
  const tabMasuk = document.getElementById('tab-masuk');
  const panelDaftar = document.getElementById('panel-daftar');
  const panelMasuk = document.getElementById('panel-masuk');
  if (!tabDaftar || !tabMasuk || !panelDaftar || !panelMasuk) return;

  const isDaftar = tab === 'daftar';
  tabDaftar.setAttribute('aria-selected', String(isDaftar));
  tabMasuk.setAttribute('aria-selected', String(!isDaftar));
  tabDaftar.classList.toggle('bg-navy', isDaftar);
  tabDaftar.classList.toggle('text-white', isDaftar);
  tabDaftar.classList.toggle('text-gray-600', !isDaftar);
  tabMasuk.classList.toggle('bg-navy', !isDaftar);
  tabMasuk.classList.toggle('text-white', !isDaftar);
  tabMasuk.classList.toggle('text-gray-600', isDaftar);
  panelDaftar.classList.toggle('hidden', !isDaftar);
  panelMasuk.classList.toggle('hidden', isDaftar);
  hideAuthError();
}

(function initAuthPage() {
  const tabDaftar = document.getElementById('tab-daftar');
  const tabMasuk = document.getElementById('tab-masuk');
  if (!tabDaftar || !tabMasuk) return;

  tabDaftar.addEventListener('click', () => setActiveTab('daftar'));
  tabMasuk.addEventListener('click', () => setActiveTab('masuk'));
  document.querySelectorAll('[data-switch-to]').forEach((btn) => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.switchTo));
  });

  if (window.location.hash === '#masuk') {
    setActiveTab('masuk');
  }

  const formDaftar = document.getElementById('panel-daftar');
  formDaftar.addEventListener('submit', (event) => {
    event.preventDefault();
    hideAuthError();

    const nama = document.getElementById('daftar-nama').value.trim();
    const email = document.getElementById('daftar-email').value.trim();
    const sandi = document.getElementById('daftar-sandi').value;
    const konfirmasi = document.getElementById('daftar-konfirmasi').value;
    const setuju = document.getElementById('daftar-setuju').checked;

    if (!nama || !email || !sandi || !konfirmasi) {
      showAuthError('Semua kolom wajib diisi.');
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      showAuthError('Format email tidak valid.');
      return;
    }
    if (sandi.length < 8) {
      showAuthError('Kata sandi minimal 8 karakter.');
      return;
    }
    if (sandi !== konfirmasi) {
      showAuthError('Konfirmasi kata sandi tidak sama.');
      return;
    }
    if (!setuju) {
      showAuthError('Kamu harus menyetujui Syarat & Ketentuan terlebih dahulu.');
      return;
    }

    localStorage.setItem('codeverse_user', JSON.stringify({ nama, email, sandi }));
    setSession(email);
    window.location.href = 'dashboard.html';
  });

  const formMasuk = document.getElementById('panel-masuk');
  formMasuk.addEventListener('submit', (event) => {
    event.preventDefault();
    hideAuthError();

    const email = document.getElementById('masuk-email').value.trim();
    const sandi = document.getElementById('masuk-sandi').value;

    if (!email || !sandi) {
      showAuthError('Email dan kata sandi wajib diisi.');
      return;
    }

    const user = getStoredUser();
    if (!user) {
      showAuthError('Akun belum terdaftar. Silakan daftar terlebih dahulu.');
      setActiveTab('daftar');
      return;
    }
    if (user.email !== email || user.sandi !== sandi) {
      showAuthError('Email atau kata sandi salah.');
      return;
    }

    setSession(email);
    window.location.href = 'dashboard.html';
  });
})();

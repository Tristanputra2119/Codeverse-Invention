// Fitur Authentication (mock). Ini adalah demo statis untuk lomba INVENTION 2026 —
// data akun disimpan di localStorage browser saja, TIDAK terhubung ke server/backend sungguhan.

function getStoredUser() {
  const raw = localStorage.getItem('codeverse_user');
  return raw ? JSON.parse(raw) : null;
}

function setSession(email) {
  localStorage.setItem('codeverse_session', email);
}

function getPostAuthRedirect() {
  const rawTarget = sessionStorage.getItem('eduverse_return_to');
  sessionStorage.removeItem('eduverse_return_to');
  if (!rawTarget) return 'dashboard.html';

  const privatePages = new Set(['dashboard.html', 'courses.html', 'bootcamps.html', 'certificates.html', 'payment.html']);
  try {
    const target = new URL(rawTarget, window.location.href);
    const page = target.pathname.split('/').pop();
    if (target.origin !== window.location.origin || target.pathname !== `/pages/${page}` || !privatePages.has(page)) {
      return 'dashboard.html';
    }
    return `${page}${target.search}${target.hash}`;
  } catch {
    return 'dashboard.html';
  }
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
  tabDaftar.classList.toggle('hidden', isDaftar);
  tabMasuk.classList.toggle('hidden', !isDaftar);
  panelDaftar.classList.toggle('hidden', !isDaftar);
  panelMasuk.classList.toggle('hidden', isDaftar);
  hideAuthError();
}

function initPasswordToggles() {
  document.querySelectorAll('[data-toggle-password]').forEach((btn) => {
    const input = document.getElementById(btn.dataset.togglePassword);
    if (!input) return;
    btn.addEventListener('click', () => {
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
    });
  });
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
  initPasswordToggles();

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

    if (!nama || !email || !sandi) {
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

    localStorage.setItem('codeverse_user', JSON.stringify({ nama, email, sandi }));
    setSession(email);
    window.location.href = getPostAuthRedirect();
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
    window.location.href = getPostAuthRedirect();
  });
})();

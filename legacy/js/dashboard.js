// Logic khusus halaman Dashboard: identitas pengguna, logout, dan widget Customer Service (chatbot mock).

(function initUserIdentity() {
  const raw = localStorage.getItem('codeverse_user');
  const user = raw ? JSON.parse(raw) : null;
  const nama = user?.nama?.trim() || 'Pengguna';
  const initial = nama.charAt(0).toUpperCase();

  document.querySelectorAll('#navbar-user-initial, #sidebar-user-initial').forEach((el) => {
    el.textContent = initial;
  });
  document.querySelectorAll('#navbar-user-name, #sidebar-user-name').forEach((el) => {
    el.textContent = nama;
  });
  const heading = document.getElementById('welcome-heading');
  if (heading) heading.textContent = `Halo, ${nama}!`;
})();

(function initLogout() {
  const btn = document.getElementById('logout-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    localStorage.removeItem('codeverse_session');
    window.location.href = '../index.html';
  });
})();

(function initForumNavigation() {
  const btn = document.getElementById('btn-forum');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.location.href = 'discussion.html';
  });
})();

(function initCustomerServiceWidget() {
  const toggleBtn = document.getElementById('btn-service');
  const closeBtn = document.getElementById('cs-close');
  const clearBtn = document.getElementById('cs-clear');
  const widget = document.getElementById('cs-widget');
  const messages = document.getElementById('cs-messages');
  const form = document.getElementById('cs-form');
  const input = document.getElementById('cs-input');
  if (!toggleBtn || !widget) return;

  function openWidget() {
    widget.classList.remove('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
    input?.focus();
  }
  function closeWidget() {
    widget.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', () => {
    widget.classList.contains('hidden') ? openWidget() : closeWidget();
  });
  closeBtn?.addEventListener('click', closeWidget);
  clearBtn?.addEventListener('click', () => {
    messages.innerHTML = '';
  });

  function addBotMessage(text) {
    const el = document.createElement('div');
    el.className = 'flex items-start gap-2';
    el.innerHTML = `
      <p class="rounded-lg bg-gray-50 px-3 py-2 text-xs text-gray-900"></p>`;
    el.querySelector('p').textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function addUserMessage(text) {
    const el = document.createElement('div');
    el.className = 'flex items-start justify-end gap-2';
    el.innerHTML = `<p class="rounded-lg bg-navy px-3 py-2 text-xs text-white"></p>`;
    el.querySelector('p').textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  document.querySelectorAll('.cs-faq').forEach((btn) => {
    btn.addEventListener('click', () => {
      addUserMessage(btn.textContent.trim());
      addBotMessage(btn.dataset.answer);
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addUserMessage(text);
    input.value = '';
    setTimeout(() => {
      addBotMessage('Terima kasih atas pertanyaannya! Tim kami akan segera membantu. Sambil menunggu, coba lihat FAQ di atas ya.');
    }, 400);
  });
})();

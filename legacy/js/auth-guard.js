// Lindungi halaman yang membutuhkan sesi login.
(function requireAuthentication() {
  if (localStorage.getItem('codeverse_session')) return;

  const currentPage = `${window.location.pathname.split('/').pop()}${window.location.search}`;
  sessionStorage.setItem('eduverse_return_to', currentPage);
  window.location.replace('signup.html');
})();

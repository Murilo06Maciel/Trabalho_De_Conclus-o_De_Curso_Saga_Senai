document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contato');
  const msgSucesso = document.getElementById('msg-sucesso');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      msgSucesso.classList.remove('d-none');
      setTimeout(() => {
        msgSucesso.classList.add('d-none');
        form.reset();
      }, 3000);
    });
  }

  // Rolagem suave para seções
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const menu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  const openPolicyBtn = document.getElementById('policy');
  const openTermsBtn = document.getElementById('terms');
  const closeModalBtn = document.getElementById('close-modal');
  const modal = document.getElementById('modal');
  const policy = document.getElementById('policy-text');
  const term = document.getElementById('term-text');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    menu.classList.toggle('is-hidden');
  };

  const openPolicy = () => {
    modal.classList.add('is-modal-open');
    policy.classList.remove('is-none');
  };
  const openTerm = () => {
    modal.classList.add('is-modal-open');
    term.classList.remove('is-none');
    body.setAttribute('style', 'overflow: hidden');
  };

  const closeModal = () => {
    modal.classList.remove('is-modal-open');
    policy.classList.add('is-none');
    term.classList.add('is-none');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  openPolicyBtn.addEventListener('click', openPolicy);
  openTermsBtn.addEventListener('click', openTerm);
  closeModalBtn.addEventListener('click', closeModal);
})();

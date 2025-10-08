const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('showing');
});

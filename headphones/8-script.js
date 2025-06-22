const hamburger = document.querySelector('.holberton_school-icon-menu');
  const navLinks = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
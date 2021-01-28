const navBtn = document.querySelector('.navbar__toggle');
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const scrollLinks = document.querySelectorAll('.scroll-link');

// copyright year
const year = new Date().getFullYear();
document.getElementById('time').innerHTML = year;

// navbar scrolling box-shadow
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 90) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
// navbar-toggle
navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('toggle-burger');
  sidebar.classList.toggle('toggle-sidebar');
});

// smooth scrolling
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    sidebar.classList.remove('toggle-sidebar');
    navBtn.classList.remove('toggle-burger');

    const id = e.target.getAttribute('href').slice(1);
    const elem = document.getElementById(id);
    const position = elem.offsetTop - 62;

    window.scroll({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});

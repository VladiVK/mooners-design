const navBtn = document.querySelector('.navbar__toggle');
const sidebar = document.querySelector('.sidebar');

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('toggle-burger');
  sidebar.classList.toggle('toggle-sidebar');
});

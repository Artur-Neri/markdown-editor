const hamburguer = document.querySelector('#hamburguer');
const sidebar = document.querySelector('.sidebar');
const controls = document.querySelector('.header-controls');

hamburguer.onclick = handleSideBar;

function handleSideBar() {
  sidebar.classList.toggle('hide');
  controls.classList.toggle('hide');
}
// Create a MediaQueryList object


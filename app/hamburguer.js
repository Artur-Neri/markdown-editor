const hamburguer = document.querySelector('#hamburguer');
const sidebar = document.querySelector('.sidebar');
const controls = document.querySelector('.header-controls');

hamburguer.onclick = handleSideBar;

function handleSideBar() {
  let vw = document.documentElement.clientWidth;
  sidebar.classList.toggle('hide');
  controls.classList.toggle('hide');
  changeHamburguerImage(vw);
}

function changeHamburguerImage(vw) {
  if (vw < 468) {
    if (sidebar.classList.contains('hide')){
      hamburguer.style.backgroundImage = "url('./assets/hamburguer-mobile.png')";
      console.log('mobile - closed');
    } else {
      hamburguer.style.backgroundImage = "url('./assets/hamburguer-mobile-open.png')";
    }
  } else {
    if (sidebar.classList.contains('hide')){
      hamburguer.style.backgroundImage = "url('./assets/hamburguer.png')";
      console.log('dekstop - closed');
    } else {
      hamburguer.style.backgroundImage = "url('./assets/hamburguer-open.png')";
    }
  }
}


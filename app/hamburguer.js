const hamburguer = document.querySelector('#hamburguer');
const sidebar = document.querySelector('.sidebar');
const controls = document.querySelector('.header-controls');


// IMAGES

const hamburguer_open_desktop = '../assets/hamburguer-open.png';
const hamburguer_closed_desktop = '../assets/hamburguer.png';

const hamburguer_open_mobile = '../assets/hamburguer-mobile-open.png';
const hamburguer_closed_mobile = '../assets/hamburguer-mobile.png';

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
      hamburguer.style.backgroundImage = "url('../assets/hamburguer-mobile.png')";
      console.log('mobile - closed');
    } else {
      hamburguer.style.backgroundImage = "url('../assets/hamburguer-mobile-open.png')";
    }
  } else {
    if (sidebar.classList.contains('hide')){
      hamburguer.style.backgroundImage = "url('../assets/hamburguer.png')";
      console.log('dekstop - closed');
    } else {
      hamburguer.style.backgroundImage = "url('../assets/hamburguer-open.png')";
    }
  }
}


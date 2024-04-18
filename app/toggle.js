const toggle = document.querySelector('#check');
const lightIcon = document.querySelector('#light-icon');
const darkIcon = document.querySelector('#dark-icon');

toggle.onchange = handleLightDark;

function handleLightDark(){
    if (toggle.checked){
        darkIcon.style.fill = '#5A6069';
        lightIcon.style.fill = '#fff';
    } else {
        darkIcon.style.fill = '#fff';
        lightIcon.style.fill = '#5A6069';
    }
}
const menu = document.getElementById('menu');
const menu_icon = document.getElementById('menu-icon');
const menu_burger = document.getElementById('menu-burger');
const menu_close = document.getElementById('menu-close');

(function () {
    menu_icon.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu()
    })
})()

function toggleMenu() {
    if (menu_icon.classList.toggle('open')) {
        menu_burger.style.display = 'none';
        menu_close.style.display = 'block';
    } else {
        menu_burger.style.display = 'block';
        menu_close.style.display = 'none';
    }
    menu.classList.toggle('open');
}
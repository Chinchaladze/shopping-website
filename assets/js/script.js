const MenuButton = document.querySelector('.navbar_toggle');
const CloseButton = document.querySelector('.navbar_close');
const Menu = document.querySelector('.navbar_menu');

MenuButton.addEventListener('click', () => {
    Menu.classList.toggle('active');
});
CloseButton.addEventListener('click', () => {
        Menu.classList.remove('active');
});
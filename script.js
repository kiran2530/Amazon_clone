let MenuIcon = document.getElementById('menu-Icon');
let menuList = document.getElementById('menu-list');

MenuIcon.onclick = () => {
    menuList.classList.toggle('active');
    MenuIcon.classList.toggle('fa-xmark');
}
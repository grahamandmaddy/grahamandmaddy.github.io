let menuButton = document.getElementById('menuButton');
let navBar = document.getElementById('navBarFull');
let mainContainer = document.getElementById('mainContainer');
let mainDiv = document.getElementById('mainDiv');
let navCloseButton = document.getElementById('navCloseButton');

menuButton.addEventListener('click', () => {
    showMenu();
})

navCloseButton.addEventListener('click', () => {
    hideMenu();
})

function showMenu () {
    //navBar.style.display = 'grid';
    navBar.style.backgroundColor = 'var(--main-rust)';
    menuButton.style.display= 'none';
    navBar.style.animation = 'slideIn 1s';
    navBar.style.top = '0px';
}

function hideMenu() {
    navBar.style.animation = 'slideOut 1s';
    menuButton.style.display = 'block';
    navBar.style.top = '-500px';
}
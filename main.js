let navBar = document.getElementById('navBarFull');
let mainContainer = document.getElementById('mainContainer');
let mainDiv = document.getElementById('mainDiv');
const navMenu = document.querySelector("#navMenu");


function showMenu () {
    navBar.style.backgroundColor = 'var(--main-rust)';
    navBar.style.animation = 'slideIn 1s';
    navBar.style.top = '0px';
}

function hideMenu() {
    navBar.style.animation = 'slideOut 1s';
    navBar.style.top = '-500px';
}

navMenu.addEventListener("click", () => {
    if (navMenu.className == "inactive") {
        navMenu.className= "active";
        showMenu();
    } else {
        navMenu.className = "inactive";
        hideMenu();
    }
})
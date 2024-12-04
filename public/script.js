//Header

//Side-bar

function toggleMenu() {
    const hamburgerMenu = document.querySelector('.page__nav__list-hamburger');
    const fixedIcon = document.querySelector('.page__nav--menu-icon.close-icon');
    hamburgerMenu.style.right = hamburgerMenu.style.right === '0px' ? '-100%' : '0';
    fixedIcon.classList.toggle('active');
}
function closeMenuOnClick() {
    const hamburgerMenu = document.querySelector('.page__nav__list-hamburger');
    const fixedIcon = document.querySelector('.page__nav--menu-icon.close-icon');
    hamburgerMenu.style.right = '-100%';
    fixedIcon.classList.remove('active');
}
document.querySelectorAll('.page__nav__list-hamburger a').forEach(link => {
    link.addEventListener('click', closeMenuOnClick);
});

//Color

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('activeLi')) {
        link.style.color = '#FE8C01';
    }
});
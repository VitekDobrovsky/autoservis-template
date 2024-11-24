//Header

function toggleMenu() {
    const hamburgerMenu = document.querySelector('.page__nav__list-hamburger');
    hamburgerMenu.style.right = hamburgerMenu.style.right === '0px' ? '-100%' : '0';
    const fixedIcon = document.querySelector('.page__nav--menu-icon.close-icon');
    fixedIcon.classList.toggle('active');

}

const headerLinks = document.querySelectorAll('header a');
headerLinks.forEach(link => {
    if (link.classList.contains('active')) {
        link.style.color = '#84cc16'; // Lime-500 barva
    }
});

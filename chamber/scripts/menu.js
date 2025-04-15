const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

function hamburgerMenu() {
        hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
}

hamburgerMenu();
const menuHamburger = document.querySelector(".menuhamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
});


const switchThemeBtn = document.querySelector('.switch')
let toggleTheme = parseInt(localStorage.getItem('toggleTheme')) || 0;
var icon = document.getElementById('theme')

function setTheme() {
    if (toggleTheme === 1) {
        document.documentElement.style.setProperty('--navbar', '#121212CC');
        document.documentElement.style.setProperty('--text', '#FFFFFE');
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--btext', '#53545F');
        document.documentElement.style.setProperty('--footer', '#16161A');
        icon.src = `${window.location.origin}/image/logo/soleil.png`;
        theme.style.transform = 'rotate(360deg)';
    } else {
        document.documentElement.style.setProperty('--navbar', '#F8F9FACC');
        document.documentElement.style.setProperty('--text', '#0F0E17');
        document.documentElement.style.setProperty('--background', '#F8F9FA');
        document.documentElement.style.setProperty('--btext', '#D7D8E2');
        document.documentElement.style.setProperty('--footer', '#EAEAF3');
        icon.src = `${window.location.origin}/image/logo/lune.png`;
        theme.style.transform = 'rotate(0deg)';
    }
}

setTheme();
switchThemeBtn.addEventListener('click', () => {
    toggleTheme = toggleTheme == 1 ? 0 : 1;
    localStorage.setItem('toggleTheme', toggleTheme);
    setTheme();
});

let header = document.querySelector("nav");
let lastScrollValue = 0;

document.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    if (lastScrollValue < top) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollValue = top;
});
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
        document.querySelector('.background').classList.remove('light');
        document.querySelector('.background').classList.add('dark');
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--btext', '#53545F');
        document.documentElement.style.setProperty('--footer', '#16161A');
        icon.src = "../image/logo/soleil.png";
        theme.style.transform = 'rotate(360deg)';

    } else {
        document.documentElement.style.setProperty('--navbar', '#F8F9FACC');
        document.documentElement.style.setProperty('--text', '#0F0E17');
        document.querySelector('.background').classList.remove('dark');
        document.querySelector('.background').classList.add('light');
        document.documentElement.style.setProperty('--background', '#F8F9FA');
        document.documentElement.style.setProperty('--btext', '#D7D8E2');
        document.documentElement.style.setProperty('--footer', '#EAEAF3');
        icon.src = "../image/logo/lune.png";
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

const descriptionbtn = document.querySelector(".description-btn")
const description = document.querySelector(".description")

descriptionbtn.addEventListener('click', () => {
    description.classList.toggle('mobile')
});

const videobtn = document.querySelector(".paireprincipale")
const video = document.querySelector(".video")
const videobtnout = document.querySelector(".videobtn")

videobtn.addEventListener('click', () => {
    video.classList.toggle('show')
});
videobtnout.addEventListener('click', () => {
    video.classList.toggle('show')
});
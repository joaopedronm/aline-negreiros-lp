// MENU MOBILE

let menu = document.querySelector('#menu-icon')
let navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navList.classList.remove('open')
}

// SCROLL REVEAL

ScrollReveal().reveal('#home', {
    origin: 'right',
    duration: 2000,
    // distance: '20%'
})

ScrollReveal().reveal('#about', {
    origin: 'left',
    duration: 2000,
    // distance: '20%'
})

ScrollReveal().reveal('#services', {
    origin: 'left',
    duration: 2000,
    // distance: '20%'
})

ScrollReveal().reveal('#reviews', {
    origin: 'left',
    duration: 2000,
    // distance: '20%'
})

ScrollReveal().reveal('#ebooks', {
    origin: 'left',
    duration: 2000,
    // distance: '20%'
})

ScrollReveal().reveal('#contact', {
    origin: 'left',
    duration: 2000,
    // distance: '20%'
})


const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-item a');

function scrollActive() {
    const scrollY = window.pageYOffset;

    let activeFound = false; // Flag to track if an active link is found

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 450;
        const sectionId = current.getAttribute('id');

        const navLink = document.querySelector('.nav-item a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLink.classList.add('active');
            }
            activeFound = true; // Set the flag to true when an active link is found
        } else {
            if (navLink) {
                navLink.classList.remove('active');
            }
        }
    });

    // If no active link is found, activate the 'inicio' link
    const inicioLink = document.querySelector('.inicio a');
    if (!activeFound && inicioLink) {
        inicioLink.classList.add('active');
    } else if (inicioLink) {
        inicioLink.classList.remove('active');
    }
}

navLinks.forEach(link => link.classList.remove('active'));

window.addEventListener('scroll', scrollActive);
scrollActive();




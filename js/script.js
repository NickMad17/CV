/* -------------------- Taggle icon navbar ------------------------- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* -------------------- Scroll sections active linck ------------------------- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* -------------------- Sticky header ------------------------- */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* -------------------- Remove toggle icon and navbar when cklick navbar linck (scroll)------------------------- */

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

/* -------------------- Scroll reveal------------------------- */

ScrollReveal({ 
//  reset: true
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home__content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home__img, .services__container, .portfolio__box, .contact__form', { origin: 'bottom' });
ScrollReveal().reveal('.home__content h1, .about__img', { origin: 'left' });
ScrollReveal().reveal('.home__content p, .about__content', { origin: 'right' });

/* -------------------- Type js ------------------------- */

const typed = new Typed('.multiple-text', {
    strings: ['Frontend develuper', 'Beatmaker', 'Microcontroller Programmer'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

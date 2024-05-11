function renderLouder() {
    let louder = document.querySelector('.loader-container');
    window.addEventListener('load', function(){
        louder.classList.add('display-none');
    })
}
renderLouder();
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
    //reset: true
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, x, .heading, .about__img, .about__content', { origin: 'top' });
ScrollReveal().reveal('.home__img, .home__content, .about__content, .services__container, .portfolio__box, .contact__form', { origin: 'bottom' });

/* -------------------- Type js ------------------------- */

const typed = new Typed('.multiple-text', {
    strings: ['Frontend develuper', 'Beatmaker', 'Arduino develuper'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

/* -------------------- Sand massage ------------------------- */

const TOKEN = "6178052086:AAGw-0HnN46-6dM_SKssZhIUxZpW-FR_oAM";
const CHAT_ID ="-1001789340734";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById("success");
const successMessage = document.getElementById("contactHead");



document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();

    let massage = `<b>Новая заявка</b> \n\n`;
    massage += `<b>Имя: </b> ${ this.name.value  } \n`;
    massage += `<b>Фамилия: </b> ${ this.firstName.value  }\n`;
    massage += `<b>Номер телефона: </b> ${ this.mobil.value  }\n`;
    massage += `<b>Почта или мессенждер: </b> ${ this.email.value  }\n`;
    massage += `${ this.text.value ? `<b>Сообщение: ${this.text.value}</b> ` : '' }\n`;


    axios.post(URL_API, {
        chat_id : CHAT_ID,
        parse_mode: 'html',
        text: massage
    })
    .then((res) =>{
        this.name.value = "";
        this.firstName.value = "";
        this.email.value = "";
        this.mobil.value = "";
        this.text.value = "";
        success.innerText = "Отправленно";
        successMessage.innerText = "Спасибо, я свяжусь с вами";
        success.style.background = "rgb(50, 219, 50)";
        success.style.animation = "rotate-center 0.6s ease-in-out both";
        successMessage.style.color = "rgb(50, 219, 50)";
        successMessage.style.animation = "focus-in-contract-bck 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";


    })

    .catch((err) =>{
        console.log(err);
    })

    .finally(() =>{
        console.log("end");
    })

});

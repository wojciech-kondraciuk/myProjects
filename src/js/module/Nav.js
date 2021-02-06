const $ = txt => document.querySelector(`${txt}`);
const $all = txt => document.querySelectorAll(`${txt}`);
const menuBTN = $('.menu-btn');
const navContainer = $('.nav_container');
const closebtn = $('.closebtn');
const mobileWidtch = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

/* run scroll */
const scrollTo = (el) => {
    try {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: el.offsetTop - (mobileWidtch < 1024 ? 40 : 80),
        });
    } catch (e) {
        return e;
    }

    return el;
};

/* click any menu position */
$all('.nav_item').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const secName = item.children[0].className;

        scrollTo(document.getElementById(secName));

        const active = $('.active');

        if (active) {
            active.classList.remove('active');
        }

        e.currentTarget.children[0].classList.add('active');

        if (menuBTN) {
            menuBTN.checked = false;
            navContainer.style.width = '0%';
        }
    });
});

/* add active class if scroll page */
window.addEventListener('scroll', () => {
    $all('.section').forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');


        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
            $(`.${sectionId}`).classList.add('active');
        } else {
            $(`.${sectionId}`).classList.remove('active');
        }
    });
});

/* mobile menu animation */
menuBTN.addEventListener('click', () => {
    if (navContainer.style.width === '50%') {
        navContainer.style.width = '0%';
    } else {
        navContainer.style.width = '50%';
    }
});

closebtn.addEventListener('click', () => {
    navContainer.style.width = '0%';
    menuBTN.checked = false;
});

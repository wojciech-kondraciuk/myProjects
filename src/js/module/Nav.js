const menu_btn = document.querySelector('.menu-btn');
const nav_container = document.querySelector('.nav_container');
const closebtn = document.querySelector('.closebtn');


const $ = txt => document.querySelector(`${txt}`);
const $all = txt => document.querySelectorAll(`${txt}`);

//run scroll
scrollTo = (el) => {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: el.offsetTop
    });
}

//click any menu position
document.querySelectorAll('.nav_item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        let secName = item.children[0].className;
        scrollTo(document.getElementById(secName));

        const active = document.querySelector('.active');

        if (active) {
            active.classList.remove('active');
        }

        e.currentTarget.children[0].classList.add('active');

        if (menu_btn) {
            menu_btn.checked = false;
            nav_container.style.width = "0%"
        }

    })
});

//add active class if scroll page
window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.${sectionId}`).classList.add("active");
        } else {
            document.querySelector(`.${sectionId}`).classList.remove("active");
        }

    });
});

//mobile menu animation
menu_btn.addEventListener('click', () => {
    nav_container.style.width === '50%' ? nav_container.style.width = "0%" : nav_container.style.width = "50%";
});

closebtn.addEventListener('click', () => {
    nav_container.style.width = "0%";
    menu_btn.checked = false;
});
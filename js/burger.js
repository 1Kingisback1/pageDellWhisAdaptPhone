let menu = document.querySelector('.nav__link'),
    menu__btn = document.querySelector('.nav__icon'),
    main = document.querySelector('#main'),
    body = document.body;

if (menu && menu__btn) {
    menu__btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menu__btn.classList.toggle('active');
        body.classList.toggle('lock');
        main.classList.toggle('night');
    });
    
}
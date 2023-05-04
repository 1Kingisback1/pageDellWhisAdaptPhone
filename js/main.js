// popupMenu

let profileMenu = document.querySelector('.profile-menu'),
    profileBtn = document.querySelector('.profileBtn');

profileBtn.addEventListener("click", () => {
    profileMenu.classList.toggle('show');
    profileBtn.classList.toggle('showMenu');

    if(profileMenu.classList.contains('show')) {
        profileMenu.style.opacity = '1';
        profileMenu.style.transition = 'opacity .2s linear';
    } else {
        profileMenu.style.opacity = '0';
    }
});

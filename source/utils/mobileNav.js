export function mobileNav () {
    const bars = document.getElementById("bars");
    const closeBtn = document.getElementById("close-btn");
    const nav = document.getElementById("mobile-nav");

    bars.addEventListener('click', () => {
        nav.style.display = "flex"
    })

    closeBtn.addEventListener('click', () => {
        nav.style.display = "none"
    
    })
}

export function stickyNav() {
    const header = document.querySelector(".header");
    const headerTitle = document.querySelector(".header__title");
    const headerMenu = document.querySelector(".header__menu");
    const headerList = document.querySelector(".header__list");
    


    window.addEventListener('scroll', fixNav);

    function fixNav() {
        if(window.scrollY > header.offsetHeight + 150) {
            header.classList.add('active');
            headerTitle.classList.add('active');
            headerMenu.classList.add('active');
            headerList.classList.add('active');
        } else {
            header.classList.remove('active');
            headerTitle.classList.remove('active');
            headerMenu.classList.remove('active');
            headerList.classList.remove('active');
        }
    }
}


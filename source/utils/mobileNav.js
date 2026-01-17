function mobileNav () {
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

export default mobileNav;
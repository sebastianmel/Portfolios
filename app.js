const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        //Annimation de mes liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }else{
                link.style.animation = link.style.animation = `navLinkFades 0.5s ease forwards ${index / 7 + 0.5}s`;
            }

        });
        //burger animation
        burger.classList.toggle('toggle')
    });

}
navSlide();


//couleur section
//222226
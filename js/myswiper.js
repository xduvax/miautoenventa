
let mySwiper = new Swiper('.swiper-container',{
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
const swiper = new Swiper('.testimonial__swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.testimonial__swiper--pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: "testimonial__swiper--bullet-active",
        bulletClass: "testimonial__swiper--bullet"


    },
    centeredSlides: true,
    createElements: true,
});


window.addEventListener('load', () => {

});


$(function() {
    $('.hamburger-btn').on('click', function() {
    $('.hamburger-btn').toggleClass('hamburger-btn--active');
    $('.hamburger-menu').toggleClass('hamburger-menu--active');
});
    
    $('.slider-clients').slick({
    prevArrow: '<button class="slider-clients__btn slider-clients__btn--prev"><svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2L2 16.5L16.5 31" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slider-clients__btn slider-clients__btn--next"><svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 2L16 16.5L1.5 31" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
        {
            breakpoint: 930,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});
});

var swiper = new Swiper(".partners .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".partners .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: '.partners .swiper-button-next',
        prevEl: '.partners .swiper-button-prev',
    }
});

$(".header_lang_mob .header_lang>li>a").on("click", function(e) {
    e.preventDefault();
    $(this).siblings(".sub-menu").slideToggle(200);
});

$(".menu").on("click", function() {
    $("nav").addClass("nav_active");
    $("body,html").addClass("over");
});

$(".close").on("click", function() {
    $("nav").removeClass("nav_active");
    $("body,html").removeClass("over");
});
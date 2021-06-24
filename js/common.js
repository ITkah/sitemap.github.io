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

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});
$(document).ready(function () {

    // hamburger
    $('.hamburger').click(() => {
        $('.hamburger').toggleClass('hamburger-active');
        if ($('.hamburger').hasClass('hamburger-active')) {
            $('.header__wrapper').fadeIn().css({'display': 'flex'});
            $('body').css({'overflow': 'hidden'});
        }
    });

    // close hamburger
    $('.close').click(() => {
        $('.hamburger').removeClass('hamburger-active');
        $('.header__wrapper').fadeOut();
        $('body').css({'overflow': 'visible'});
    });

    // tabs
    $('.faq__tab').each((key, item) => {
        $(item).click(() => {
            $(item).children('.text').slideToggle();
        });
    });

    // footer logo
    if ($(window).width() > 577) {
        $('.footer .logo').html('<img src="img/logo/footer-logo.png" alt="logo">');
    } else {
        $('.footer .logo').html('<img src="img/logo/footer-logo-2.png" alt="logo">');
    }


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.up').fadeIn().css({'display': 'flex'});
        } else {
            $('.up').fadeOut();
        }
    });
    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});
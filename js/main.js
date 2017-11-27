/*global $, consol, jquery, alert, Typed*/
$(function () {
    "use strict";
    
    // MixItUp
    $('.container').mixItUp();
    
    // Add Active Class For Ul
    $('ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    
    // Typed Function
    var typed = new Typed('.grinta', {
        strings: ["Welcome You To My Respected Website"],
        typeSpeed: 30
    });
    var typed = new Typed('.grinta-p', {
        strings: ["Im Pleased By Your Visting", "I Wish that You Are Happy ^_^"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true
    });
    
    
    
    // Function For All big Screens [ Show Nav-bar ]
    $('.nav-button').on('click', function () {
        if ($(window).width() < 767) {
            return false;
        } else {
            $('#left').css({width: '25%'});
            $('#right').css({width: '75%'});
            $('.color-box').fadeIn();
            $('.nav-button').fadeOut(300);
            $('.navigation ul').fadeIn(300);
            $('.color-box').fadeIn(300);
        }
    });
    
    // Show Sections For All Screen
    $('.navigation ul.navi li').on('click', function () {
        $('#left').css({width: '0%'});
        $('#right').css({width: '100%'});
        $($(this).data('class')).fadeIn();
        $('#right').find(' > div').not($(this).data('class')).fadeOut();
        $('.nav-button').delay(400).fadeIn();
        $('.navigation ul').fadeOut(300);
        $('.color-box').fadeOut(200);
        $('.nav-button').fadeIn(300);
        
    });

    // For Mobile
    $('.nav-button').on('click', function () {
        if ($(window).width() < 767) {
            $('#right').css({width: '100%'});
            $('#left').css({position: 'absolute', width: '200px'});
            $('.navigation ul').delay(250).fadeIn(500);
            $('.color-box').delay(250).fadeIn(900);
            $(this).fadeOut(200);
        } else {
            return false;
        }
    });
    
    // Change Theme Color
    $('.color-box li').on('click', function () {
        $("link[href*='theme']").attr('href', $(this).attr('data-class'));
    });
    
    
    
    
    /*
    // Click Empty Place At Home To Colse Navigation
    $('.home').on('click', function () {
        $('.navigation').removeClass('open-nav');
        $('.navigation button').removeClass('button-toggle');
        $('.navigation ul.navi').hide();
        $('.color-box').hide();
    });
    // Click Empty Place At about To Colse Navigation
    $('.about').on('click', function () {
        $('.navigation').removeClass('open-nav');
        $('.navigation button').removeClass('button-toggle');
        $('.navigation ul.navi').hide();
        $('.color-box').hide();
    });
    // Click Empty Place At Portfolio To Colse Navigation
    $('.portfolio').on('click', function () {
        $('.navigation').removeClass('open-nav');
        $('.navigation button').removeClass('button-toggle');
        $('.navigation ul.navi').hide();
        $('.color-box').hide();
    });
    // Click Empty Place At Contact To Colse Navigation
    $('.contact').on('click', function () {
        $('.navigation').removeClass('open-nav');
        $('.navigation button').removeClass('button-toggle');
        $('.navigation ul.navi').hide();
        $('.color-box').hide();
    });
    
    
    $('.color-box li').on('click', function () {
        console.log($(this).data('class'));
        $("link[href*='theme']").attr('href', $(this).attr('data-class'));
    });
    */
});


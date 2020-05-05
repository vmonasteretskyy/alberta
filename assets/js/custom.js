$(document).ready(function () {
    if ($(window).width() > 76) {
        $('.header_filter_item ').mouseenter(function () {
            $(this).children('ul').slideDown(300);
        });
        $('.header_filter_item ').mouseleave(function () {
            $(this).children('ul').slideUp(300);
        });
    }
    $('.prod_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767.9,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.home_testimonials_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 991.9,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767.9,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    if ($(window).width() < 768) {
        $('.header_filter_item span').click(
            function () {
                $(this).next().slideToggle(300);
            }
        )
        $('.menu_mobile_btn').click(function () {
            $('.mobile_menu').slideDown(400);
        });
        $('.mobile_menu_close').click(function () {
            $('.mobile_menu').slideUp(400);
        })
        $('.mobile_icon_search img').click(function () {
            $('.mobile_icon_search form').slideDown(400);
        });
        $('.mobile_icon_search ').mouseleave(function () {
            $('.mobile_icon_search form').slideUp(400);
        });

        $('.mob_btn_catalog ').click(function () {
            $('.sidebar_block_categ').slideDown(300);
        });
        $('body').click(function (e) {
            console.log(e.target)

            if (

                e.target != $('.sidebar_block_title.sidebar_block_main_title.sidebar_block_title_active')[0]
            ) {
                console.log(e.target)
                $('.sidebar_block_categ').slideUp(300);
            }
        })

    }
    $('.about_home_btn').click(function () {
        $(this).toggleClass('about_home_btn_active')
        $(this).next().slideToggle(300);
    });
    $('.header_mobile_lang div').click(function () {
        $(this).next().slideToggle(300);
    });
    $('.sidebar_block_title:not(.sidebar_block_main_title) .more_or_less').click(function () {
        $(this).parent().next().slideToggle(300);
        $(this).parent().toggleClass('sidebar_block_title_active')
    });
    $('.sidebar_block_main_title ').click(function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('sidebar_block_title_active')
    });
    $('.showmore_filters ').click(function () {
        $(this).next().slideDown(300);
        $(this).css('display', 'none')
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100000,
    });
    $(' select').styler();

});
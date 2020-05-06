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

        $('.mob_btn_catalog').click(function () {
            $('.sidebar_block_categ').slideDown(300);
        });
        $('body').click(function (e) {
            if ($(e.target).closest(".header_mobile_lang").length === 0) {
                $('.header_mobile_lang ul').slideUp(300);
            }
            if ($(e.target).closest(".mob_btn_catalog").length === 0 && $(e.target).closest(".sidebar_block").length === 0) {
                $('.sidebar_block_categ').slideUp(300);
            }
            if ($(e.target).closest(".mob_btn_filter").length === 0 && $(e.target).closest(".catalog_sidebar form").length === 0) {
                $('.catalog_sidebar form').slideUp(300);
            }
            if ($(e.target).closest(".mob_btn_sort").length === 0 && $(e.target).closest(".catalog_sort").length === 0) {
                $('.catalog_sort').slideUp(300);
            }
        });
    }
    $('.about_home_btn').click(function () {
        $(this).toggleClass('about_home_btn_active')
        $(this).next().slideToggle(300);
    });
    $('.header_mobile_lang div').click(function () {
        $(this).next().slideDown(300);
    });
    $('.mob_btn_filter').click(function () {
        $('.catalog_sidebar form').slideDown(300);
    });
    $('.mob_btn_sort').click(function () {
        $('.catalog_sort').slideDown(300);
    });
    $('input[name="delivery"]').change(function (e) {
        console.log(e);
        if ($('input[name="delivery"]:checked').val() == 'newpost') {
            $('.order_address_1').css('display', 'none');
            $('.order_address_2').css('display', 'block');
        }
        else if ($('input[name="delivery"]:checked').val() == 'self') {
            $('.order_address_2').css('display', 'none');
            $('.order_address_1').css('display', 'none');
        }
        else {
            $('.order_address_2').css('display', 'none');
            $('.order_address_1').css('display', 'block');
        }
    })

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
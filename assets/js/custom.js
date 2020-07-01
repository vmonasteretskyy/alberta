$(document).ready(function () {
    if ($('main').hasClass('order')) {
        function Checkdel(e) {
            if ($('input[name="delivery"]:checked').val() == 'newpost') {
                $('.order_address_1').css('display', 'none');
                $('.order_address_2').css('display', 'block');
                $('.order_address_3').css('display', 'none');
                $('.payment_type1').css('display', 'none');
                $('.payment_type2').css('display', 'block');
                $('.payment_type3').css('display', 'none');
            }
            else if ($('input[name="delivery"]:checked').val() == 'self') {
                $('.order_address_2').css('display', 'none');
                $('.order_address_1').css('display', 'none');
                $('.order_address_3').css('display', 'none');
                $('.payment_type1').css('display', 'none');
                $('.payment_type2').css('display', 'none');
                $('.payment_type3').css('display', 'block');
            }
            else if ($('input[name="delivery"]:checked').val() == 'courier_newpost') {
                $('.order_address_1').css('display', 'none');
                $('.order_address_2').css('display', 'none');
                $('.order_address_3').css('display', 'block');
                $('.payment_type1').css('display', 'none');
                $('.payment_type2').css('display', 'block');
                $('.payment_type3').css('display', 'none');

            }
            else {
                $('.order_address_2').css('display', 'none');
                $('.order_address_1').css('display', 'block');
                $('.payment_type1').css('display', 'block');
                $('.payment_type2').css('display', 'none');
                $('.payment_type3').css('display', 'none');
            }
        }
        Checkdel();
    }
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
        slidesToShow: 4,
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
        Checkdel();
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
    $('.product_color_add').click(function () {
        $(this).toggleClass('product_color_marks_remove');
        $(this).nextAll('.product_color_marks').toggleClass('product_color_marks_showed')
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100000,
    });
    $('select').styler();

    if ($('main').hasClass('card')) {
        $('.card_slider_lg').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false

        });
        $('.card_slider_sm').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.card_slider_lg',
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1199.9,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        vertical: false,

                    }
                },
                {
                    breakpoint: 575.9,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        vertical: false,
                    }
                },
            ]
        });
    }
    // 
    if ($('main').hasClass('catalog')) {
        if ($(window).width() > 767.9) {
            (function () {
                var a = document.querySelector('.catalog_sidebar'), b = null, P = 220;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
                window.addEventListener('scroll', Ascroll, false);
                document.body.addEventListener('scroll', Ascroll, false);
                function Ascroll() {
                    if (b == null) {
                        var Sa = getComputedStyle(a, ''), s = '';
                        for (var i = 0; i < Sa.length; i++) {
                            if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                                s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                            }
                        }
                        b = document.createElement('div');
                        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                        a.insertBefore(b, a.firstChild);
                        var l = a.childNodes.length;
                        for (var i = 1; i < l; i++) {
                            b.appendChild(a.childNodes[1]);
                        }
                        a.style.height = b.getBoundingClientRect().height + 'px';
                        a.style.padding = '0';
                        a.style.border = '0';
                    }
                    var Ra = a.getBoundingClientRect(),
                        R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.some_new').getBoundingClientRect().top + 30);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                    if ((Ra.top - P) <= 0) {
                        if ((Ra.top - P) <= R) {
                            b.className = 'stop';
                            b.style.top = - R + 'px';
                        } else {
                            b.className = 'sticky';
                            b.style.top = P + 'px';
                        }
                    } else {
                        b.className = '';
                        b.style.top = '';
                    }
                    window.addEventListener('resize', function () {
                        a.children[0].style.width = getComputedStyle(a, '').width
                    }, false);
                }
            })()
        }
    }
    if ($('main').hasClass('blog')) {
        if ($(window).width() > 767.9) {
            (function () {
                var a = document.querySelector('.catalog_sidebar'), b = null, P = 220;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
                window.addEventListener('scroll', Ascroll, false);
                document.body.addEventListener('scroll', Ascroll, false);
                function Ascroll() {
                    if (b == null) {
                        var Sa = getComputedStyle(a, ''), s = '';
                        for (var i = 0; i < Sa.length; i++) {
                            if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                                s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                            }
                        }
                        b = document.createElement('div');
                        b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                        a.insertBefore(b, a.firstChild);
                        var l = a.childNodes.length;
                        for (var i = 1; i < l; i++) {
                            b.appendChild(a.childNodes[1]);
                        }
                        a.style.height = b.getBoundingClientRect().height + 'px';
                        a.style.padding = '0';
                        a.style.border = '0';
                    }
                    var Ra = a.getBoundingClientRect(),
                        R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('footer').getBoundingClientRect().top + 30);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
                    if ((Ra.top - P) <= 0) {
                        if ((Ra.top - P) <= R) {
                            b.className = 'stop';
                            b.style.top = - R + 'px';
                        } else {
                            b.className = 'sticky';
                            b.style.top = P + 'px';
                        }
                    } else {
                        b.className = '';
                        b.style.top = '';
                    }
                    window.addEventListener('resize', function () {
                        a.children[0].style.width = getComputedStyle(a, '').width
                    }, false);
                }
            })()
        }
    }
    $('.your_order_his_btn').click(function () {
        $(this).toggleClass('btn_change')
        $(this).parents('.your_order').find('.your_order_delivered').slideToggle(300).css("display", "flex");
        $(this).parents('.your_order').find('.your_order_delivery_details').slideToggle(300);
    });

    $('.more-text').click(function () {
        $(this).css('display', 'none');
        $(this).next('div').slideDown(400);
    });
});
$(document).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('header').addClass('header_op');
    }
    else {
        $('header').removeClass('header_op');
    }
    $('.card_item_rating div').hover(function () {
        $(this).prevAll('div').addClass('raiting_hover');
    });
    $('.card_item_rating div').mouseleave(function () {
        $(this).prevAll('div').removeClass('raiting_hover');
    });
    $('.card_item_rating div').click(function () {
        $(this).prevAll('div').removeClass('raiting_hover');
        $(this).prevAll('div').addClass('rated');
        $(this).nextAll('div').removeClass('rated');
        $(this).addClass('rated');
    });
    $('.card_slider_small_arrow').click(function () {
        $('.card_slider_sm_wrap').css('height', 'auto');
        $(this).css('display', 'none');
    })
    $('.card_sizes_btn').click(function () {
        $(this).css('display', 'none')
        $('.card_size_table').slideDown(400);
    })
});

$('.trust-partners').slick({
    infinite: true, //бесконечная прокрутка
    dots: false, //навигационные кнопки снизу
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="button-slider" type="button"><img src="/img/bx_bx.png" alt=""></button>',
    nextArrow: '<button class="button-slider btn-next" type="button"><img src="/img/arrow.svg" alt=""></button>',
    responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        }
     ]
});
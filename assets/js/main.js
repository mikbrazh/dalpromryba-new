function scrollProduct()
{
    let offsetTop = document.getElementById('product').offsetTop;
    $('body,html').animate({scrollTop: offsetTop}, 1000);
}

// $(document).ready(() =>
// {

// })

/* ======= stages-slider START ======= */
if (document.querySelector('.stages-slider')) {
/* ======= swiper START ======= */
const stagesSpratsSwiper = new Swiper('.stages-sprats-swiper', {
    // Default parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 1,
    navigation: {
    nextEl: '.stages-sprats-swiper-button-prev',
    prevEl: '.stages-sprats-swiper-button-next',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const stagesTunaSwiper = new Swiper('.stages-tuna-swiper', {
    // Default parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    slidesPerView: 1,
    navigation: {
    nextEl: '.stages-tuna-swiper-button-prev',
    prevEl: '.stages-tuna-swiper-button-next',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
/* ======= swiper END ======= */
}
/* ======= stages-slider END ======= */

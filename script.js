var mainview = document.querySelector('.contain.main-view');
var bgOverly = mainview.querySelector('.bg-overly');
mainview.style.minHeight = window.innerHeight + "px";

var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        765: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});
// swiper.slideTo(1);
swiper.on('slideChange', function() {
    let index_currentSlide = swiper.realIndex
    var currentSlide = swiper.slides[index_currentSlide]
    if (window.innerWidth < 900) {
        currentSlide = swiper.slides[index_currentSlide + 1]
    }

    var srcImage = currentSlide.querySelector('img').getAttribute('data-background');
    var srcGradient = currentSlide.querySelector('img').getAttribute('data-gradient');
    mainview.style.transition = ".3s all";
    console.log(currentSlide.querySelector('img'));
    mainview.style.backgroundImage = `url(${srcImage})`;
    bgOverly.style.backgroundImage = `url(${srcGradient})`;

});
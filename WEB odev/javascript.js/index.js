// Slick slider initialization

src = "https://code.jquery.com/jquery-3.6.0.min.js "
src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js "

$('.slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    draggable: false
});

$('.slider')
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-list').addClass('do-transition')
    })
    .on('afterChange', function() {
        $('.slick-list').removeClass('do-transition')
    });


const images = document.querySelector('.carousel-images');
const captions = document.querySelectorAll('.carousel-caption');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const totalImages = images.children.length;
let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;

    captions.forEach((caption, index) => {
        if (index === currentIndex) {
            caption.classList.remove('hidden');
        } else {
            caption.classList.add('hidden');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 3000);

const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})
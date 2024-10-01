document.querySelectorAll('.card__plan--input').forEach(input => {
    input.addEventListener('change', function() {
        const groups = document.querySelectorAll('.card__plan--group');
        groups.forEach(group => {
            if (group.querySelector('input').id !== this.id) {
                group.classList.add('hidden');
            } else {
                group.classList.remove('hidden');
            }
        });
    });
});
const swiper = document.querySelector('.mySwiper');

swiper.initialize();

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    swiper.swiper.slidePrev();
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
    swiper.swiper.slideNext();
});

function updateSwiper() {
    if (window.innerWidth <= 1100) {
        swiper.swiper.changeDirection('vertical');
        swiper.swiper.params.slidesPerView = 1; // Change to 1 for vertical
    } else {
        swiper.swiper.changeDirection('horizontal');
        swiper.swiper.params.slidesPerView = 3; // Change back to 3 for horizontal
    }
    swiper.swiper.update(); // Update Swiper to apply changes
}

// Initial update
updateSwiper();

// Add event listener for window resize
window.addEventListener('resize', updateSwiper);
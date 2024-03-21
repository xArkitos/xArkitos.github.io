document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.image-slider');
    const arrLeft = document.querySelector('.arrow-left');
    const arrRight = document.querySelector('.arrow-right');

    const images = [
        "img3.png", "img2.png", "img1.png"
    ];

    let id = 0;

    function slide(id) {
        slider.style.backgroundImage = `url(Bilder/${images[id]})`;

        slider.classList.add('image-fade');

        setTimeout(() => {
            slider.classList.remove('image-fade');
        }, 550);
    }

    arrLeft.addEventListener('click', () => {
        id--;

        if (id < 0) {
            id = images.length - 1;
        }

        slide(id);
    });

    arrRight.addEventListener('click', () => {
        id++;

        if (id > images.length - 1) {
            id = 0;
        }

        slide(id);
    });
});

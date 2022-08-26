const nextEl = document.querySelector('.next');

const prevEl = document.querySelector('.prev');

const imgContainerEl = document.querySelector('.img-container');

const imgEls = document.querySelectorAll('img');

let currentImg = 1;

let timeout;

prevEl.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
});

nextEl.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage(){
    if(currentImg > imgEls.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imgEls.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++;
        updateImage();
    },3000)};
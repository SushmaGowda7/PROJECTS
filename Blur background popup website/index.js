const containerEl = document.querySelector('.container');

const popupContainerEl = document.querySelector('.popup-container');

const buttonEl = document.querySelector('.btn');

const closeIconEl = document.querySelector('.close-icon');

buttonEl.addEventListener('click',() => {
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
});

closeIconEl.addEventListener('click', () => {
    containerEl.classList.remove('active');
    popupContainerEl.classList.add('active');
});
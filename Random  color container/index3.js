const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');

colorGenerator();

function colorGenerator(){
    colorContainerEls.forEach((colorContainerEls) =>{
        const newColorCode = randomColor();
        colorContainerEls.style.backgroundColor = '#'+newColorCode ;
        colorContainerEls.innerText = '#'+newColorCode ;
    }
    )};

function randomColor(){
    const chars = '0123456789abcdef';
    constcolorCodeLength = 6;
    let colorCode = '';
    for (let index = 0; index < constcolorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum+1);
    }
    return colorCode;
}
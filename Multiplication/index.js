const num1 = Math.ceil(Math.random() *10);
const num2 = Math.ceil(Math.random() *10);



const questionEl = document.getElementById('question');

const formEl = document.getElementById('form');

const inputEl = document.getElementById('input');

const scoreEl = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));
if(!score)
{
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

correctAns = num1 * num2 ;

formEl.addEventListener('submit', () =>{
    const userAns = +inputEl.value;
    if(userAns === correctAns)
    {
        score = score + 2 ;
        updateLocalStorage();
    }
    else
    {
        score = score - 1 ;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}
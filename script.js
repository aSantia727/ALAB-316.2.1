'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct secretNumber!';

// document.querySelector('.secretNumber').textContent =13;
// document.querySelector('.score').textCent = 10;

// document.querySelector('.guess').value =23;
// console.log(document.querySelector('.guess').value);

// const x = function(){
//     console.log(23)
// };

const secretNumber = Math.trunc((Math.random( ) * 100) + 1);

let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.massage').textContent =
        'No secretNumber!'
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent =
        'Winner!!!'

        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        
    } else if (guess > secretNumber){
        if(score > 0){
        document.querySelector('.message').textContent =
        'Too high!', console.log(secretNumber);
        score--;
        document.querySelector('.score').textContent =
        score;
        } else {
            document.querySelector('.message').textContent
            = 'You Lost!'
            document.querySelector('.score').textContent =
            0;
        }
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = 
        "Too Low!"
    }   score--
    document.querySelector('.score').textContent =
    score;
});
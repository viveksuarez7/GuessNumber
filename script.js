'use strict';
// console.log(document.querySelector('.message').textContent);   
// document.querySelector('.message').textContent = '🎉 Correct Number ! ';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

let score=20;
let highScore=0;
let secretNum = Math.trunc(Math.random()*20)+1;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}




document.querySelector('.check').addEventListener('click',function(){
    const guessDoc = Number(document.querySelector('.guess').value);
    console.log(guessDoc,typeof guessDoc);
    
    //When No Input..
    if(!guessDoc){
       displayMessage('No Number! ❌');
    }
    //When Player Wins
    else if(guessDoc===secretNum){
        displayMessage('🎉 Correct Number You win ! ');
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width ='30rem';
        document.querySelector('.number').textContent=secretNum;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }

    else if(guessDoc!=secretNum){
        if(score>1){
            displayMessage(guessDoc>secretNum ? 'Greater Bring it down ⬇' :  'Samller bring it up 👆☝');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You Have Lost the game ! ❌') ;
            document.querySelector('.score').textContent=0;
        }
    }


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNum = Math.trunc(Math.random()*20)+1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width ='15rem';

})

});
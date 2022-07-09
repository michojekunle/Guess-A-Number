const btn = document.getElementById('guess');
const output = document.getElementById('outputText');
const container = document.querySelector('.container');


const number = Math.ceil(Math.random()*20);

function tryAgain() {
    let button = document.createElement('div');
    button.innerHTML = '<button style="padding: 8px 18px; border:none; border-radius:8px; cursor:pointer;" onclick="window.location.reload()">Try Again</button>';
    container.appendChild(button);
} 

btn.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    
    if(input == number ){
        output.innerHTML = `Correct Guess, your guess was ${number}`; 
        btn.style.display = "none";
        tryAgain();
    } else if(input < number ){
        output.innerHTML = `Try Again, your guess is too low`; 
    } else if(input > number ){
        output.innerHTML = `Try Again, your guess is too high`; 
    } else{
        output.innerHTML = `Enter a valid number between 1 and 20`; 
    }    
})


const btn = document.getElementById('guess');
const output = document.getElementById('outputText');

const number = Math.ceil(Math.random()*20);

btn.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    
    if(input == number ){
        output.innerHTML = `Correct Guess, your guess was ${number}`; 
    } else if(input < number ){
        output.innerHTML = `Try Again, your guess is too low`; 
    } else if(input > number ){
        output.innerHTML = `Try Again, your guess is too high`; 
    } else if(input < 0 || input > 20 ){
        output.innerHTML = `Incorrect input, Enter a number between 1 and 20`; 
    } else{
        output.innerHTML = `Enter a valid number between 1 and 20`; 
    }    
})


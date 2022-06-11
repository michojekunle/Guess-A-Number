const btn = document.getElementById('guess');
const output = document.getElementById('outputText');

const number = Math.ceil(Math.random()*20);

btn.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    
    if(input == number ){
        output.innerHTML = `Correct Guess, your guess was ${number}`; 
        btn.style.display = "none";
    } else if(input < number ){
        output.innerHTML = `Try Again, your guess is too low`; 
    } else if(input > number ){
        output.innerHTML = `Try Again, your guess is too high`; 
    } else{
        output.innerHTML = `Enter a valid number between 1 and 20`; 
    }    
})


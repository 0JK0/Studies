const minNum = 1;
const maxNum = 100;

// Since math.random only gives a decimal number between 1 and 0 you need a bunch of math
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attempts = 0;
let guess;
let running = true;

while(running){

    // TO be able to put variables as text you need to use single quotes 
    guess = window.prompt(`Guess a number between ${minNum}, ${maxNum}`); 
    guess = Number(guess);

    if(isNaN(guess)){

        window.alert("Please enter a valid number");

    }else if ( guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");

    } else {

        attempts++;
        if (guess < answer){

            window.alert("Too low! Try again")

        } else if (guess > answer ){

            window.alert("Too high! Try again")

        } else{

            window.alert(`CORRECT! The anser was ${answer}. It took you ${attempts} attempts`)
            running = false;
        }

    }


}
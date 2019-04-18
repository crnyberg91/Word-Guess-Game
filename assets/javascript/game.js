const movieBank = ['jaws', 'alien', 'it'];
const letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const guessedLetters = [];
const solution = [];
let winCount = 0;
let LossCount = 0;
console.log(movieBank);
console.log(letterBank);

//button here
let guessesLeft = 10;
const movie =
movieBank[Math.floor(Math.random() * movieBank.length)];
function blankLine(){

}


//display guessed letters
document.onkeyup = function (event) {
    const userGuess = event.key;


    if (movie.includes(userGuess)===true) {
        
        console.log(`${userGuess} is in there`);
        console.log(solution)
        console.log(guessedLetters)
        return solution.push(userGuess) && guessedLetters.push(userGuess);
        
    } else if (solution === movie) {
        console.log('you win');
        console.log(winCount++);
    } else if (guessesLeft === 0) {
        console.log('you lose');
    }
    
    else {
        console.log(guessesLeft--);
        console.log(`${userGuess} is not`);
        return guessedLetters.push(userGuess);
    }

}



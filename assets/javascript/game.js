const movieBank = ['evil dead', 'alien', 'the thing'];
const letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const guessedLetters = [];
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
        console.log(winCount++);
        console.log(`${userGuess} is in there`)
        console.log(guessedLetters.push[userGuess]);
    } else {
        console.log(guessesLeft--);
        console.log(`${userGuess} is not`)
        console.log(guessedLetters.push[userGuess]);
    }
}


// Declare global variables

// List of words that will be guessed
var marioArray = [
    "mario",
    "peach",
    "lakitu",
    "bowser",
    "luigi",
    "toad",
    "shy guy",
    "dry bones",
    "rosalina",
    "wario",
    "goomba",
    "daisy",
    "waluigi",
    "donkey kong",
    "birdo",
    "king boo",
    "yoshi",
    "koopa troopa"
];

// Variable that will randomly determinie which word will be played
var currentWord = marioArray[Math.floor(Math.random() * marioArray.length)].toLowerCase();

// Variable that will hold the number of guesses remaining
var guessesLeft = 10;
document.getElementById("guesses-left").innerHTML = guessesLeft;

// Variable that will keep track of number of wins
var wins = 0;
document.getElementById("wins").innerHTML = wins;
var resetLettersGuessed = "";

// Empty array to push blanks to
var progressWord = [];

// Empty array to push letter from current word and compare guess
var mysteryWord = [];
var i;

// Create blank space for currently played word
for (i = 0; i < currentWord.length; i++) {
    progressWord.push("_");
}
document.getElementById("word-guess").innerHTML = progressWord.join(" ");

// Figure out position of guessed letter in Current Word, return empty array if wrong
function letterInWord(letter) {
    var positions = new Array();
    for (i = 0 ; i < currentWord.length; i++) {
        if (currentWord[i] === letter)
            positions.push(i);
    }
    return positions;
}

function lettersToGuess() {
    var i ;
    var toGuess = 0 ;
    for (i in progressWord) {
        if (progressWord[i] === "_")
            toGuess++;
    }
    return toGuess;
}

document.onkeyup = function (event) {
    var i;
    var lettersGuessed = event.key
    var positions = letterInWord(lettersGuessed);
    if (positions.length) {
        for (i = 0 ; i < positions.length; i++) {
            progressWord[positions[i]] = lettersGuessed;
        }
        document.getElementById("word-guess").innerHTML = progressWord.join(" ");
    } else {
        document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";
        guessesLeft--;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    }
    if (guessesLeft === 0) {
        alert("GAME OVER");
        location.reload();
    }
    if (lettersToGuess() == 0) {
        alert("LEVEL COMPLETE!");
        guessesLeft = 10;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;
        currentWord = marioArray[Math.floor(Math.random() * marioArray.length)].toLowerCase();
        progressWord = [];
        for (i = 0; i < currentWord.length; i++) {
            progressWord.push("_");
        }
            document.getElementById("word-guess").innerHTML = progressWord.join(" ");
            wins++;
            document.getElementById("wins").innerHTML = wins;
    }
}


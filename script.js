let word = "impiccato";
let wordGuess = document.getElementById("wordGuess");
let lifeCounter = 5;

let displayGuess = "#".repeat(word.length);
wordGuess.innerText = displayGuess;

let userInput = document.getElementById("userInput");
let btn = document.getElementById("btn");


//displayGuess = checkGuess (displayGuess, 'x');
console.log (checkGuess('imp----to', 'c'));
//Todo: aggiungere event listener al btn che fa partire una funzione che:
// 1. prima controlla che l'utente abbia inserito una sola lettera e che questa sia valida
// 2. e se appare me la mostra a schermo e la elimina dalle lettere indovinabili
// 3. secondo poi va a controllare che questa lettera appaia nella parola
//   3.a se la lettera è nella parola la mettiamo a schermo
//   3.b se la lettera non è nella parola decrementiamo il counter delle vite di uno
// 4. impediamo il nuovo inserimento della stessa lettera



function checkGuess (guess, letter) {
    // Supponiamo che l'input sia sanificato da un'altra function
    // l'idea è quella di controllare tutta la stringa lettera a lettera e dove trovo 
    // coincidenze vado a modificare display guess
        let lostLife = true ;
        guess = guess.split('');
        console.log(guess);
        for (let index in word){
            if (letter == word[index]){ 
                guess[index] = letter;
                lostLife = false;
            }
        }

        if (lostLife) {
            lifeCounter -= 1;
        }

        guess = guess.join('');
    return guess;
}
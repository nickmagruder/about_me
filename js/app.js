'use strict';
var correctGuesses = [0, + 0, + 0, + 0, + 0, + 0, + 0]

var userName = prompt('Welcome to the Nick Magruder Quiz! What\'s your name stranger?');
alert('Thanks for dropping by, ' + userName + '!!!');

var favoriteSport = prompt('Yes or No; Is Nick\'s favorite sport rock climbing?');

if (favoriteSport.toLowerCase() === 'yes' || favoriteSport.toLowerCase() === 'y'){
    alert('Sorry! Nick loves riding bikes, not rock climbing.')
} else if (favoriteSport.toLowerCase() === 'no' || favoriteSport.toLowerCase() === 'n') {
    alert('Correct! Nick actually loves riding bikes.')
    correctGuesses [0] = 1;
    console.log (correctGuesses)
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick loves riding bikes!')
}

var secondLanguage = prompt('Yes or No; Is Nick\'s second language Swahili?');

if (secondLanguage.toLowerCase() === 'yes' || secondLanguage.toLowerCase() === 'y'){
    alert('Bummer! Nick minored in Spanish, not Swahili.')
} else if (secondLanguage.toLowerCase() === 'no' || secondLanguage.toLowerCase() === 'n') {
    alert('You got it! Nick speaks English and Spanish.')
    correctGuesses [1] = 1;
    console.log (correctGuesses)
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick speaks English and Spanish.')
}

var likeSailboats = prompt('Yes or No; Does Nick like sailboats?');

if (likeSailboats.toLowerCase() === 'yes' || likeSailboats.toLowerCase() === 'y'){
    alert('Right on! Nick wants to buy one someday.')
    correctGuesses [2] = 1;
    console.log (correctGuesses)
} else if (likeSailboats.toLowerCase() === 'no' || likeSailboats.toLowerCase() === 'n') {
    alert('Whoops! Nick actually wants to buy a sailboat someday.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was Yes; Nick wants to buy a sailboat someday.')
}

var studyPainting = prompt('Yes or No; Did Nick study painting?');

if (studyPainting.toLowerCase() === 'yes' || studyPainting.toLowerCase() === 'y'){
    alert('Uh oh! Nick studied photography, design and International Studies.')
} else if (studyPainting.toLowerCase() === 'no' || studyPainting.toLowerCase() === 'n') {
    alert('Hooray! Nick did not study painting, but wouldnt mind to learn!')
    correctGuesses [3] = 1;
    console.log (correctGuesses)
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick did not study painting, but wouldnt mind to learn!')
}

var liveInFlorida = prompt('Yes or No; Did Nick live in Florida?');

if (liveInFlorida.toLowerCase() === 'yes' || liveInFlorida.toLowerCase() === 'y'){
    alert('Spot on! Nick lived in Florida for 3 years.')
    correctGuesses [4] = 1;
    console.log (correctGuesses)
} else if (liveInFlorida.toLowerCase() === 'no' || liveInFlorida.toLowerCase() === 'n') {
    alert('Dang! Nick lived in Florida for 3 years.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was Yes; Nick lived in Florida for 3 years.')
}

/*
Question 6 (Guess a #)
- Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
- Indicates through an alert if the guess is “too high” or “too low”.
- It should give the user exactly four opportunities to get the correct answer.
- After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
*/


for (var guesses = 0; guesses < 4; guesses++) {
    var guess = parseInt(prompt('Guess my favorite number! It is between 1-100 and you have 4 attempts!'));
if (guess === 12){
    alert('Wow, you got it! 12 is definitely the best Number.');
    correctGuesses [5] = 1;
    console.log (correctGuesses);
    break;
}else if (guess !== 12 && guesses === 3) {
    alert('Sorry, you\'re out of guesses. The correct number is 12.');
}else if (guess !== 12) {
    alert('Sorry, incorrect, please guess again!');
}
}

/* 
Question 7 (Guess Something Else)
- Add a 7th question that has multiple possible correct answers that are stored in an array.
- Give the user 6 attempts to guess the correct answer.
- The guesses will end once the user guesses a correct answer or they run out of attempts.
- Display all the possible correct answers to the user.
- Consider using a loop of some sort for this question.
*/

var birds = ['Flicker', 'Osprey', 'Blue Jay', 'Cardinal', 'Falcon', 'Chickadee'];

for (var i = 0; i < 6; i++) {
    var birdGuess = prompt('Guess one of my favorite birds! You have 6 attempts.');
if (birdGuess.toLowerCase() === 'flicker' || birdGuess.toLowerCase() === 'osprey'|| birdGuess.toLowerCase() === 'blue jay'|| birdGuess.toLowerCase() === 'cardinal' || birdGuess.toLowerCase() === 'Falcon'|| birdGuess.toLowerCase() === 'chickadee'){
    alert('Correct! The ' + birdGuess + ' is an awesome birb.');
    correctGuesses [6] = 1;
    console.log (correctGuesses);
    break;
}else if (birdGuess.toLowerCase() !== 'flicker' && i === 5) {
    alert('Sorry, you\'re out of guesses. My five favorite birds are ' + birds);
}else if ((birdGuess.toLowerCase() !== 'flicker' || birdGuess.toLowerCase() !== 'osprey'|| birdGuess.toLowerCase() !== 'blue jay'|| birdGuess.toLowerCase() !== 'cardinal' || birdGuess.toLowerCase() !== 'Falcon'|| birdGuess.toLowerCase() !== 'chickadee')) {
    alert('Sorry, incorrect, please guess again!');
}
}

var sum = correctGuesses.reduce(function(a, b){
    return a + b;
}, 0);

console.log(sum);
/* Array Hint adapted from this tutorial: https://www.tutorialrepublic.com/faq/how-to-find-the-sum-of-an-array-of-numbers-in-javascript.php */

alert ('Thanks for taking the quiz ' + userName + '! You got ' + sum + ' questions right! Click OK to see the correct answers.')
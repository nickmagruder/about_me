'use strict';
var correctGuesses = [0, + 0, + 0, + 0, + 0, + 0, + 0]

var userName = prompt('Welcome to the Nick Magruder Quiz! What\'s your name stranger?');
alert('Thanks for dropping by, ' + userName + '!!!');

function guessSport(){

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

}

guessSport();


function guessLanguage(){

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

}

guessLanguage();




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

/* 
1. Fork and clone repo

2. Extend and Refine

- You’ll be making some edits to each other’s sites. After each bit of work is completed (in other words, after each successful modification of a single question), be sure to do an add-commit-push cycle (a-c-p) to place the code on GitHub and preserve a versioned history of your work.

- Move the logic for all questions into functions: Today we learned about functions, and now we’ll move the logic for the individual questions into separate functions, and call those functions to run the game. 

- In its most basic sense, this is pretty simple and straightforward: ‘wrap’ the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning, and add a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); After completing this step the game should behave exactly as it did before. a-c-p

- Update the README file: In the README file, add in the names of the Driver and Navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p

3. Push to GitHub - Make Pull Request

- Once everything is finished, and the Driver has done the last edits and pushed them to GitHub, it’s time to send the edited code to the owner (who has been in the Navigator role the whole time, of course). We do this with a GitHub feature called a Pull Request, which we generally refer to as a PR.

- From the Driver’s repo that is a fork of the Navigator’s repo, hit the green button that says ‘Create pull request’.

-Follow the remaining steps as described onscreen and as shown here: https://help.GitHub.com/articles/using-pull-requests. (These instructions for doing a pull request from a forked repo to its source are deliberately vague, to give you practice in reading through instructions, trying things out, solving problems collaboratively, and getting guidance from documentation).

- The owner of the code (the Navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command ‘git pull origin master’ to retrieve the modified code from GitHub.

- When everything is finished for one person’s project, submit the links for the last pull request made from the Driver to the Navigator (in both cases) in the Canvas assignment.
*/
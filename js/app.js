'use strict';

var userName = prompt('Welcome to the Nick Magruder Quiz! Whats your name stranger?');
alert('Thanks for dropping by, ' + userName + '!!!');

var favoriteSport = prompt('Yes or No; Is Nicks favorite sport rock climbing?');

if (favoriteSport.toLowerCase() === 'yes'){
/*     console.log('Sorry! Nick loves riding bikes, not rock climbing.') */
    alert('Sorry! Nick loves riding bikes, not rock climbing.')
} else if (favoriteSport.toLowerCase() === 'y') {
    alert('Sorry! Nick loves riding bikes, not rock climbing.')
} else if (favoriteSport.toLowerCase() === 'no') {
/*     console.log('Correct! Nick loves riding bikes.') */
    alert('Correct! Nick loves riding bikes.')
} else if (favoriteSport.toLowerCase() === 'n') {
    alert('Correct! Nick loves riding bikes.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick loves riding bikes!')
}

var secondLanguage = prompt('Yes or No; Is Nicks second language Swahili?');

if (secondLanguage.toLowerCase() === 'yes'){
/*     console.log('Bummer! Nick minored in Spanish, not Swahili.') */
    alert('Bummer! Nick minored in Spanish, not Swahili.')
} else if (secondLanguage.toLowerCase() === 'y') {
    alert('Bummer! Nick minored in Spanish, not Swahili.')
} else if (secondLanguage.toLowerCase() === 'no') {
/*     console.log('You got it! Nick speaks English and Spanish.') */
    alert('You got it! Nick speaks English and Spanish.')
} else if (secondLanguage.toLowerCase() === 'n') {
    alert('You got it! Nick speaks English and Spanish.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick speaks English and Spanish.')
}

var likeSailboats = prompt('Yes or No; Does Nick like sailboats?');

if (likeSailboats.toLowerCase() === 'yes'){
/*     console.log('Right on! Nick wants to buy one someday.') */
    alert('Right on! Nick wants to buy one someday.')
} else if (likeSailboats.toLowerCase() === 'y') {
    alert('Right on! Nick wants to buy one someday.')
} else if (likeSailboats.toLowerCase() === 'no') {
/*     console.log('Whoops! Nick wants to buy a sailboat someday.') */
    alert('Whoops! Nick wants to buy a sailboat someday.')
} else if (likeSailboats.toLowerCase() === 'n') {
    alert('Whoops! Nick wants to buy a sailboat someday.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was Yes; Nick wants to buy a sailboat someday.')
}

var studyPainting = prompt('Yes or No; Did Nick study painting?');

if (studyPainting.toLowerCase() === 'yes'){
/*     console.log('Uh oh! Nick studied photography, design and International Studies.') */
    alert('Uh oh! Nick studied photography, design and International Studies.')
} else if (studyPainting.toLowerCase() === 'y') {
    alert('Uh oh! Nick studied photography, design and International Studies.')
} else if (studyPainting.toLowerCase() === 'no') {
/*     console.log('Hooray! Nick did not study painting, but wouldnt mind to learn!') */
    alert('Hooray! Nick did not study painting, but wouldnt mind to learn!')
} else if (studyPainting.toLowerCase() === 'n') {
    alert('Hooray! Nick did not study painting, but wouldnt mind to learn!')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was No; Nick did not study painting, but wouldnt mind to learn!')
}

var liveInFlorida = prompt('Yes or No; Did Nick live in Florida?');

if (liveInFlorida.toLowerCase() === 'yes'){
/*     console.log('Spot on! Nick lived in Florida for 3 years.') */
    alert('Spot on! Nick lived in Florida for 3 years.')
} else if (liveInFlorida.toLowerCase() === 'y') {
    alert('Spot on! Nick lived in Florida for 3 years.')
} else if (liveInFlorida.toLowerCase() === 'no') {
/*     console.log('Dang! Nick lived in Florida for 3 years.') */
    alert('Dang! Nick lived in Florida for 3 years.')
} else if (liveInFlorida.toLowerCase() === 'n') {
    alert('Dang! Nick lived in Florida for 3 years.')
} else {
    alert('Sorry, a Yes or No answer was needed. But since you seem like a nice person, the correct answer was Yes; Nick lived in Florida for 3 years.')
}

alert ('Thanks for taking the quiz ' + userName + '! Click OK to see the correct answers.')
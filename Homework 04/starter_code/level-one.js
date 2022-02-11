/*
 * DOTS: Level One
 *
 */

// Define elements, referring to HTML level-one classes
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

// Add event listener to ball element, On click, function adds 10 to score
ballEl.addEventListener('click', function() {
    score += 10;

    // If score is less than 100, continue adding to it, Else declareWinner funciton is called.
    if ( score < 100 ) {
        scoreEl.innerText = score;
    } else {
        declareWinner();
    }
});

// declareWinner function is defined. When called, add game-over CSS element.
function declareWinner() {
  document.body.classList.add('game-over');
}
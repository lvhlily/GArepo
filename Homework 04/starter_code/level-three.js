/*
 * DOTS: Level Three
 *
 */
// Define elements, referring to HTML level-three classes
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// Add event listener to arena element, On click, function adds increment/increase in value of 5, 10, or 20 points to score IF js-ball element is clicked within the js-arena
// parseInt() parses a value as a string and returns the first integer.
arenaEl.addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) {
        score += parseInt(e.target.dataset.increment);

        // If score is less than 100, continue adding to it, Else declareWinner funciton is called.
        if ( score < 100 ) {
            scoreEl.innerText = score;
        } else {
            declareWinner();
        }
    }
})

// declareWinner function is defined. When called, add game-over CSS element.
function declareWinner() {
    document.body.classList.add('game-over');
}
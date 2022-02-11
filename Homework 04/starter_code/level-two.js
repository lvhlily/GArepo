/*
 * DOTS: Level Two
 *
 */
// Define elements, referring to HTML level-two classes
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// Add event listener to arena element, On click, function adds 10 to score IF js-ball element is clicked within the js-arena
arenaEl.addEventListener('click', function(e) {
    if (e.target.classList.contains('js-ball') ) {
        score += 10;
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
    document.body.classList.add('game-over')
}



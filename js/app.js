/*
 * Create a list that holds all of your cards
 */
 let opened = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Display html to the page
const allCards = document.querySelectorAll('.deck li');

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Grab all <li> elements

// set up the event listener for a card. If a card is clicked:
allCards.addEventListener('click', function(event) {

    const clickedCard = event.target;

    // Add the card to a *list* of "open" cards
    opened.push(card);

    // Display the card's symbol.
    if(opened.length <= 2) {
        card.classList.add('open', 'show');
        // - if the list already has another card, check to see if the two cards match
        checkMatch();
    }
});

function checkMatch() {

    if(toggled.length == 2) {

        if (toggled[0] === toggled[1]) {

            alert('MATCH');
            console.log(clicked);
            clicked.classList.add('match');

            /*    + if the cards do match, lock the cards in the open position
                    (put this functionality in another function that you call from this one)
            */

            // TODO: lock the cards in 'open' 'show' class
            // TODO: Add 'match' class

        } else if (toggled[0] !== toggled[1]) {


            /*    + if the cards do not match, remove the cards from the list and hide the card's symbol
                    (put this functionality in another function that you call from this one)
            */

            alert('NOT MATCH');

            // Remove the cards from the list
            openCards = [];

            // TODO: classList.remove('open', 'show')
            // TODO: score = current score
        }
    }
}
//
// function moveCounter() {
//
//     /*    + increment the move counter and display it on the page
//     (put this functionality in another function that you call from this one)
//     */
//
//     // TODO: Store every clicks in a array
//     // TODO: Display it to html
//
// }
//
//  function finalScore() {
//
//      /*    + if all cards have matched, display a message with the final score
//      (put this functionality in another function that you call from this one)
//      */
//
//      // TODO: display final score to html
//
//  }
//
// function timeTrack() {
//
//     // TODO: check first click
//     // TODO: if .match is 16, stop tracking
//     // TODO: display it to html
//
// }
//
// function gameRating() {
//
//     // TODO: define rate depending on time spent
//     //       eg: if(1:00) => 3 stars, if(2:00) => 2 stars, else => 1 star
//     // TODO: document.querySelectorAll('.fa-star')
//     // TODO: display rate on html (inside <ul class="stars"> </ul>)
//
// }
//
// function gameReset() {
//
//     // TODO: Add eventlistener to <div class="reset"><i>

//     // TODO: Remove every items from openCards array
//     // TODO: Remove .match, .open, .show class from every card
//     // TODO: reset timeTracker and gameRating
//
// }

/*
 * Create a list that holds all of your cards
 */

var cardSymbol = ['anchor', 'anchor',
                'bolt', 'bolt'
                // 'bicycle', 'bicycle'
                // 'bomb', 'bomb',
                // 'cube', 'cube',
                // 'diamond', 'diamond',
                // 'leaf', 'leaf',
                // 'paper-plane-o', 'paper-plane-o'
                ];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 // Create container for array loop
 let cardList = [];

 // Shuffle cardSymbol array
 shuffle(cardSymbol);

// Create <li> by looping through class name in the array
 for (let i = 0; i < cardSymbol.length; i++) {
     cardList += `<li class="card"><i class="fa fa-${cardSymbol[i]}"></i></li>`;
 }

// Display html to the page
document.querySelector('.deck').innerHTML = cardList;

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
const allCard = document.querySelectorAll('.card');

// Create empty container of card list
let openCards = [];

// set up the event listener for a card. If a card is clicked:
allCard.forEach(function(card) {
    card.addEventListener('click', function(event) {

        const clicked = event.target;
        console.log(clicked);

        // Add the card to a *list* of "open" cards
        openCards.push(card);

        // Display the card's symbol.
        if(openCards.length <= 2) {
            card.classList.add('open', 'show');

        } else {
            //TODO: don't do openCards.push(card); openCards.length remains the same
            return;
        }

        // - if the list already has another card, check to see if the two cards match
        checkMatch();
    })
});

function checkMatch() {

    if(openCards.length == 2) {

        if (cardSymbol[0] === cardSymbol[1]) {

            alert('MATCH');
            console.log(clicked);
            clicked.classList.add('match');

            /*    + if the cards do match, lock the cards in the open position
                    (put this functionality in another function that you call from this one)
            */

            // TODO: lock the cards in 'open' 'show' class
            // TODO: Add 'match' class

        } else if (cardSymbol[0] !== cardSymbol[1]) {


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

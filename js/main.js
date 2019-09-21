// Alex Tetervak, Sheridan College, Ontario

"use strict"; // use the strict mode

$(function(){
    preloadCard(); // preload a first random card
    showCard(); // show the first card
    preloadCard(); // preload a next random card
    setupNextCardLink(); // make the "Next Card" link work correctly
});

// define the Card constructor function
function Card() {
    // these arrays are used to generate the random card names
    const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const FACES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    // the random number  0..51
    let rand = Math.floor(52 * Math.random());
    // the card number 1..52 is matching the image file name
    let cardNumber = rand + 1;
    // the name of the card determined via the math trick
    this.cardName = FACES[rand % 13] + " of " + SUITS[Math.floor(rand / 13)];
    // load the image from the server
    this.imgSrc = "images/cards/" + cardNumber + ".png";
    this.cardImg = new Image();
    this.cardImg.src = this.imgSrc;
}

// to store the pre-loaded card info
let card;

// generates the random card info and pre-loads the matching card image
function preloadCard(){
    card = new Card();
}

// shows the pre-loaded card name and image
function showCard(){
    // insert the card name
    $("span.cardName").text(card.cardName);
    // insert the image, set the src attribute of the image tag
    $("#card").attr("src", card.imgSrc);
}

// makes the "Next Card" link work correctly
function setupNextCardLink(){
    $("a:contains('Next Card')").click(function(event){
        event.preventDefault();
        showCard();
        preloadCard();
    });
}
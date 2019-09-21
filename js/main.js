// Alex Tetervak, Sheridan College, Ontario

"use strict"; // use the strict mode

$(function(){
    preloadCard(); // preload a first random card
    showCard(); // show the first card
    preloadCard(); // preload a next random card
    setupNextCardLink(); // make the "Next Card" link work correctly
});

// these arrays are used to generate the random card names
const SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
const FACES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

// to store the pre-loaded card info
let cardName, cardNumber, imgSrc, cardImg;

// generates the random card info and pre-loads the matching card image
function preloadCard(){
    // the random number  0..51
    let rand = Math.floor(52 * Math.random());
    // the card number 1..52 is matching the image file name
    cardNumber = rand + 1;
    // the name of the card determined via the math trick
    cardName = FACES[rand % 13] + " of " + SUITS[Math.floor(rand / 13)];
    // load the image from the server
    imgSrc = `images/cards/${cardNumber}.png`;
    cardImg = new Image();
    cardImg.src = imgSrc;
}

// shows the pre-loaded card name and image
function showCard(){
    // insert the card name
    $("span.cardName").text(cardName);
    // insert the image, set the src attribute of the image tag
    $("#card").attr("src", imgSrc);
}

// makes the "Next Card" link work correctly
function setupNextCardLink(){
    $("a:contains('Next Card')").click(function(event){
        event.preventDefault();
        showCard();
        preloadCard();
    });
}
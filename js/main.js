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
    let rand = Math.floor(52 * Math.random());
    cardName = FACES[rand % 13] + " of " + SUITS[Math.floor(rand / 13)];
    cardNumber = rand + 1;
    imgSrc = `images/cards/${cardNumber}.png`;
    cardImg = new Image();
    cardImg.src = imgSrc;
}

// shows the pre-loaded card name and image
function showCard(){
    $("span.cardName").text(cardName);
    $("img#card").attr("src", imgSrc);
}

// makes the "Next Card" link work correctly
function setupNextCardLink(){
    $("a:contains('Next Card')").click(function(event){
        event.preventDefault();
        showCard();
        preloadCard();
    });
}
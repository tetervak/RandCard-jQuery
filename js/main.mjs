// Alex Tetervak, Sheridan College, Ontario
import { RandomCard } from "./random-card.mjs";

// generate the first random card info
let card = new RandomCard();
// make the image object for image file preloading
let image = new Image();
// preload the first random card image file
preloadCardImage();

// preload the image file from the server
function preloadCardImage(){
    image.src = card.imgSrc;
}

// called when the document is ready
$(function (){
    showCard();
    setupNextCardLink();
});

// show the card name and the card image on the page
function showCard(){
    // insert the card name
    $("span.cardName").text(card.cardName);
    // insert the image, set the src attribute of the image tag
    $("#card").attr("src", card.imgSrc);
}

// makes "Next Card" link work correctly
function setupNextCardLink(){
    $("a:contains('Next Card')").click(function(event){
        event.preventDefault();
        card = new RandomCard();
        showCard();
        preloadCardImage();
    });
}





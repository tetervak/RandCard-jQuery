// Alex Tetervak, Sheridan College, Ontario
import { RandomCard } from "./modules/random-card.mjs";

// generate the first random card info
let card = new RandomCard();
// make the image object for image file preloading
let image = new Image();
// preload the first random card image file
preloadCardImage();

// preload the image file from the server
function preloadCardImage(){
    image.src = cardImageSrc(card.number);
}

function cardImageSrc(number){
    return `images/cards/${number}.png`;
}

// called when the document is ready
$(function (){
    showCard();
    card = new RandomCard();
    preloadCardImage();
    setupNextCardLink();
});

// show the card name and the card image on the page
function showCard(){
    // insert the card name
    $("span.cardName").text(card.name);
    // insert the image, set the src attribute of the image tag
    $("#card").attr("src", cardImageSrc(card.number));
}

// makes "Next Card" link work correctly
function setupNextCardLink(){
    $("a:contains('Next Card')").click(function(event){
        event.preventDefault();
        showCard();
        card = new RandomCard();
        preloadCardImage();
    });
}





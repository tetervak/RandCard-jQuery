// Alex Tetervak, Sheridan College, Ontario

"use strict"; // use the strict mode

class RandomCard{

    // these arrays are used to generate the random card names
    static SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
    static FACES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    // generate a random card info
    constructor(){
        // the random number  0..51
        let rand = Math.floor(52 * Math.random());
        // the card number 1..52 is matching the image file name
        let cardNumber = rand + 1;
        // the name of the card determined via the math trick
        this.cardName
            = RandomCard.FACES[rand % 13]
            + " of "
            + RandomCard.SUITS[Math.floor(rand / 13)];
        // generate the image path
        this.imgSrc = `images/cards/${cardNumber}.png`;
    }
}

class RandomCardApplication{

    constructor(){
        // generate the first random card info
        this.card = new RandomCard();
        // preload the first random card image file
        this.preloadCardImage();
    }

    // preload the image file from the server
    preloadCardImage(){
        this.image = new Image();
        this.image.src = this.card.imgSrc;
    }

    // called when the document is ready
    init(){
        this.showCard();
        this.setupNextCardLink();
    }

    // show the card name and the card image on the page
    showCard(){
        // insert the card name
        $("span.cardName").text(this.card.cardName);
        // insert the image, set the src attribute of the image tag
        $("#card").attr("src", this.card.imgSrc);
    }

    // makes "Next Card" link work correctly
    setupNextCardLink(){
        $("a:contains('Next Card')").click(event=>{
            event.preventDefault();
            this.card = new RandomCard();
            this.showCard();
            this.preloadCardImage();
        });
    }
}

const randomCardApplication = new RandomCardApplication();
$(()=>randomCardApplication.init());



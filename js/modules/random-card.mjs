class RandomCard {

    // these arrays are used to generate the random card names
    static SUITS = ["Spades", "Hearts", "Diamonds", "Clubs"];
    static FACES = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
        "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    // generate a random card info
    constructor(){
        // the random number  0..51
        let rand = Math.floor(52 * Math.random());
        // the card number 1..52 is matching the image file name
        this.number = rand + 1;
        // the name of the card determined via the math trick
        this.face = RandomCard.FACES[rand % 13];
        this.suit = RandomCard.SUITS[Math.floor(rand / 13)];
        this.name = `${this.face} of ${this.suit}`;
    }
}

export { RandomCard }

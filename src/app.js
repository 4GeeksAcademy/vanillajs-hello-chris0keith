import "bootstrap";
import "./style.css";

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});

window.onload = function() {
  function cardOrder() {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suits = ["hearts", "diamonds", "spades", "clubs"];
    const cards = [];

    for (let s = 0; s < suits.length; s++) {
      for (let n = 0; n < numbers.length; n++) {
        const suit = suits[s];
        const number = numbers[n];
        cards.push({ number, suit });
      }
    }
    return cards;
  }

  function randomCard(cards) {
    const random = Math.floor(Math.random() * cards.length);
    const cardNumber = cards[random].number;
    const cardSuit = cards[random].suit;

    let entity;
    switch (cardSuit) {
      case "diamonds":
        entity = "&diams;";
        break;
      case "hearts":
        entity = "&hearts;";
        break;
      case "spades":
        entity = "&spades;";
        break;
      case "clubs":
        entity = "&clubs;";
        break;
    }

    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML =
      '<span class="card-suit top">' +
      entity +
      "</span>" +
      '<span class="card-number">' +
      cardNumber +
      "</span>" +
      '<span class="card-suit bot">' +
      entity +
      "</span>";

    document.body.appendChild(card);
  }

  const cards = cardOrder();
  randomCard(cards);
};

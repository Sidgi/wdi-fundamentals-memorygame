console.log("Up and running!");

// console.log("User flipped "+ cardOne);
cards = ['queen','queen','king','king'];
cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];
// let cardThree = cards[2];
// let cardFour = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
// cardsInPlay.push(cardThree);
// cardsInPlay.push(cardFour);
console.log(cardsInPlay);
if(cardsInPlay.length===2){
  if(cardsInPlay[0] ===cardsInPlay[1]){
    alert("You found match!");
  }
  else{
    alert("Sorry,try again");
  }
}

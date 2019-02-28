console.log("Up and running!");

cards = ['queen','queen','king','king'];
cardsInPlay = [];
const checkForMatch = ()=>{
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

const flipCard =(cardId)=> {
  // if(cardsInPlay.length===2){
    checkForMatch();
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);
  // }
}
flipCard(1);

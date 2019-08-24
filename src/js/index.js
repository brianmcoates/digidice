import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

let numberOfRolls = 1;

const rollHowMany$ = fromEvent(document.getElementsByClassName('roll-input'), 'blur');

rollHowMany$.subscribe((event)=>{
  numberOfRolls = event.target.value;
});

const diceClick$ = fromEvent(document.getElementsByClassName('dice'), 'click');

const randomNumbers$ = diceClick$.pipe(
  map((event)=>{ return event.target.dataset.dice }),
  map((highestNumber)=> {
    let allTheRolls = [];
    let sum = 0;
    if (numberOfRolls > "1") {
      for (let i = 0; i < numberOfRolls; i++) {
        let rolling = roll(highestNumber)
        allTheRolls.push({roll: rolling, dice: highestNumber});
        sum += rolling;
      }
    } else {
      sum += roll(highestNumber);
    }
    allTheRolls.push({roll: sum, dice: highestNumber});
    return allTheRolls
  }

));

const logToScreen$ = randomNumbers$.pipe(
  map((rolls)=>{
    rolls.forEach((roll, index)=>{
      const isSum = rolls.length === index;
      logDiceRolls(roll.roll, roll.dice, isSum)
    })
  })
);

logToScreen$.subscribe();

function logDiceRolls(randomNumber, diceRolled){
  // create logic that loops over the numbers rolled and logs out the html.
  const mainLog = document.getElementById('logger');
  const htmlNode = document.createElement('P');
  const textNode = document.createTextNode(randomNumber + " ");
  const spanNode = document.createElement('SPAN');
  const spanTextNode = document.createTextNode("d"+diceRolled);

  spanNode.appendChild(spanTextNode);
  htmlNode.appendChild(textNode);
  htmlNode.appendChild(spanNode);
  mainLog.appendChild(htmlNode);
  mainLog.scrollTo(0,mainLog.scrollHeight)
}

function roll(highestNumber){
  return Math.ceil(Math.random() * highestNumber)
};

// })();
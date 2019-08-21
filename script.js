




// Old Code for reference right now.
// (function(){
//     // Function that takes 2 numbers and gets a random number between them.
//     function roll(highestNumber){
//         return Math.ceil(Math.random() * highestNumber)
//     }
//
//     function getRandomNumber(highestNumber, howManyRolls){
//         var allTheRolls = [];
//         var sum = 0;
//         if(howManyRolls > "1"){
//             for(var i = 0; i < howManyRolls; i++){
//                 var rolling = roll(highestNumber)
//                 allTheRolls.push(rolling);
//                 sum += rolling ;
//             }
//         } else {
//             sum += roll(highestNumber);
//         }
//
//         allTheRolls.push(sum);
//         return allTheRolls;
//     }
//
//     function logger(diceNumber, howManyRolls){
//         //need to get number of rolls into here
//         var randomNumber = getRandomNumber(parseInt(diceNumber), howManyRolls);
//         var log = document.getElementById('logger');
//
//         logDiceRoll(randomNumber, log, diceNumber);
//         scrollToBottom(log);
//     }
//
//     function logDiceRoll(randomNumbers, mainLog, diceRolled){
//         randomNumbers.forEach(function(randomNumber){
//             var htmlNode = document.createElement('P');
//             var textNode = document.createTextNode(randomNumber + " ");
//             var spanNode = document.createElement('SPAN');
//             var spanTextNode = document.createTextNode("d"+diceRolled);
//
//             spanNode.appendChild(spanTextNode);
//             htmlNode.appendChild(textNode);
//             htmlNode.appendChild(spanNode);
//             mainLog.appendChild(htmlNode);
//         });
//     }
//
//     function scrollToBottom(element){
//         element.scrollTo(0,element.scrollHeight)
//     }
//
//     var dice = document.getElementsByClassName('dice');
//
//     for (var i = 0; i < dice.length; i++) {
//
//         (function (n) {
//             //ripe for optimization
//             dice[n].addEventListener('click', function () {
//                 initLogger(dice[n].id)
//             })
//         }(i))
//     }
//
//     function initLogger(diceId){
//         //ripe for optimization
//        var theRolledDice = document.getElementById(diceId);
//         logger(theRolledDice.dataset.dice, theRolledDice.dataset.howManyRolls || 1)
//     }
//
//     var diceInputs =  document.getElementsByClassName('roll-input');
//
//     for (var i = 0; i < diceInputs.length; i++) {
//         // on blur when focus leaves field
//         (function (n) {
//             diceInputs[n].addEventListener('blur', function () {
//
//                 var filteredDice = Array.from(dice);
//                 filteredDice = filteredDice.filter(function(dice){
//                     return dice.id == diceInputs[n].name
//                 });
//                 filteredDice[0].setAttribute('data-how-many-rolls', diceInputs[n].value)
//             })
//         }(i))
//     }
//
// })();
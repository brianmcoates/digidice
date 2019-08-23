import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

const diceClick$ = fromEvent(document.getElementsByClassName('dice'), 'click');

diceClick$.subscribe(()=>{
  console.log(1)
});
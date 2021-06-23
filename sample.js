import { of, range } from "rxjs";


const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete!')
}

// const source$ = of([1], 2, 3, 4, 5);
const source$ = range(1, 5);
source$.subscribe(observer);


// const source$ = fromEvent(document, 'keyup');
// const subOne = source$.subscribe();
// const subTwo = source$.subscribe();

// setTimeout(() => {
//   console.log('unsubscribing');
//   subOne.unsubscribe();
// }, 3000);
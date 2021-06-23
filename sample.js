import { /*of, range, fromEvent,*/ from } from "rxjs";

function* hello() {
  yield 'Hello';
  yield 'World';
}

const iterator = hello();
console.log(iterator.next().value);
console.log(iterator.next().value);

const observer = {
  next: val => console.log('next', val),
  error: err => console.log('error', err),
  complete: () => console.log('complete!')
}


// const source$ = of(1, 2, 3, 4, 5); 
// const source$ = from([1, 2, 3, 4, 5]); // one char at a time
// const source$ = from('Hello!'); // uses index to emit one at a time
const source$ = from(fetch(
  'https://api.github.com/users/octocat'
));
// source$.subscribe(observer);


// of
// const source$ = of([1], 2, 3, 4, 5);
// const source$ = range(1, 5);
// source$.subscribe(observer);


// const source$ = fromEvent(document, 'keyup');
// const subOne = source$.subscribe();
// const subTwo = source$.subscribe();

// setTimeout(() => {
//   console.log('unsubscribing');
//   subOne.unsubscribe();
// }, 3000);
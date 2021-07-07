import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// helpers
function calculateScrollPercent(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// elems
const progressBar = document.querySelector(
  '.progress-bar'
)

// streams
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
  // percent progress
  map(({ target }) => calculateScrollPercent(
    target.scrollingElement
  ))
);

progress$.subscribe(percent => {
  console.log(percent)
  progressBar.style.width = `${percent}%`
});

// /* Ignore unneeded values with filter */
// import { of, fromEvent } from "rxjs";
// import { map, filter } from "rxjs/operators";

// // filter numbers
// of(1, 2, 3, 4, 5)
//   .pipe(filter((value) => value > 2))
//   .subscribe(console.log);

// const keyup$ = fromEvent(document, 'keyup');
// const keycode$ = keyup$.pipe(
//   map(event=> event.code)
// );
// // filter enter key
// const enter$ = keycode$.pipe(
//   filter(code => code === 'Enter')
// );
// enter$.subscribe(console.log);
// keycode$.subscribe(console.log);

/* Introduction to marble diagrams */

// first line is input observable (arrow is timeline)
// second line/box name of operator + config options passed
// third line is output observable
// "marbles": circles representing coresponding input output values
// on first and third line
// completion is notified via vertical line
// error is notified via "x" in corresponding circle

/* Transform streams using map, pluck, and mapTo */

// import { fromEvent, of } from "rxjs";
// import { map, mapTo, pluck } from "rxjs/operators";

// // of(1, 2, 3, 4, 5).pipe(
// //   map(value => value * 10)
// // ).subscribe(console.log);

// const keyup$ = fromEvent(document, "keyup");
// const keycode$ = keyup$.pipe(
//   map(event=> event.code)
// );
// const keycodeWithPluck$ = keyup$.pipe(
//   pluck('code')
// );
// const pressed$ = keyup$.pipe(
//   mapTo('Key Pressed!')
// )
// pressed$.subscribe(console.log); // try all different observable streams

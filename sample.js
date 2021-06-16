import { Observable } from "rxjs";

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete!')
}

const observable = new Observable(subscriber =>{
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
    subscriber.next('Hello'); // will not run
    subscriber.next('World');
});

// observable.subscribe(observer);
// works the same as above
observable.subscribe(
    value => console.log('next', value),
    error => console.log('error', error),
    () => console.log('complete!')
);
/* Emit items based on a duration with interval and timer */
import { interval , timer} from "rxjs";

const timer$ = timer(2000);

timer$.subscribe(console.log);


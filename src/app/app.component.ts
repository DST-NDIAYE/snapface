import { Component, OnInit } from '@angular/core';
import { interval, Observable, observable, of } from 'rxjs';
import { delay, map, mergeMap, take, tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



intervalle$!:  Observable<number> ;

  ngOnInit() {

    // const intervalle$ = interval(1000) ;
    // interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));


    // intervalle$.subscribe(valeur => console.log(valeur));
    

   this.intervalle$ =  interval(1000).pipe(
    map(value => 2 * (value + 1))
);

  }



// redTrainsCalled = 0;
// yellowTrainsCalled = 0;

// ngOnInit() {
//   interval(500).pipe(
//     take(10),
//     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
//     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
//     mergeMap(color => this.getTrainObservable$(color)),
//     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
//   ).subscribe();
// }

// getTrainObservable$(color: 'rouge' | 'jaune') {
//   const isRedTrain = color === 'rouge';
//   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
//   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
//   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
//   return of({ color, trainIndex }).pipe(
//     delay(isRedTrain ? 5000 : 6000)
//   );
// }

// translateColor(color: 'rouge' | 'jaune') {
//   return color === 'rouge' ? 'red' : 'yellow';
// }





}

import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  encapsulation: ViewEncapsulation.None//default value for the encapsulation
})
export class TwoComponent {
  mySubscription: Observable<string> | undefined;
  myPromise: Promise<String> | undefined;
  constructor() {

  }
  create() {
    //observable lines will not execute oneline also
    this.myPromise = new Promise((res, rej) => {
      console.log('promise before resolving ');
      res('data resolved ');
    });
    //promises line wiill execute the each line except the resolve data
    this.mySubscription = new Observable<string>(observer => {
      console.log('before emmtting the observer');
      observer.next('observer data created from ');
    })
    // promised are eagerly executing while observalbles area lazily loaded
  }
  execute() {
    this.myPromise?.then(data => console.log(data));
    this.mySubscription?.subscribe(data => {
      console.log(data);
    })
  }
}

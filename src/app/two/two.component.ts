import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  encapsulation: ViewEncapsulation.None//default value for the encapsulation
})
export class TwoComponent {
  myObservable: Observable<string> | undefined;
  myObservableNumber: Observable<number> | undefined;
  myPromise: Promise<String> | undefined;
  subsc: any;
  counter: number | undefined;
  constructor() {
    this.counter = 0;
  }
  create() {
    //observable lines will not execute oneline also
    this.myPromise = new Promise((resolve, rej) => {
      console.log('promise before resolving ');
      resolve('data resolved ');
    });
    //promises line wiill execute the each line except the resolve data
    this.myObservable = new Observable<string>(observer => {
      console.log('before emmtting the observer');
      setInterval(() => {
        observer.next('observer data created from ' + this.counter);
        this.counter = this.counter || 0 + 1;
      }, 1000);
    })
    // promised are eagerly executing while observalbles area lazily loaded
  }
  execute() {
    this.myPromise?.then(data => console.log(data));
    this.subsc = this.myObservable?.subscribe(data => {
      console.log(data);
    })
  }
  cancel() {
    if (this.subsc) {
      this.subsc.unsubscribe()
    }
  }
  createObservable() {
    //observable are multicasting
    this.myObservableNumber = new Observable<number>(observer => {
      observer.next(Math.random());
    })
    this.myObservableNumber.subscribe(resp => {
      console.log(resp);//different data
    })
    this.myObservableNumber.subscribe(resp => {
      console.log(resp);//different data
    })
  }
  createSubject() {
    //subjects are not multi casting
    let subject = new Subject();
    subject.next('Subject emitted Data!! by default subject never produced the data which was generated previously ');
    subject.subscribe(res => console.log(res));//same  data
    subject.subscribe(res => console.log(res));//same data
    subject.next(Math.random());
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterService } from './../counter.service';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter$!: Observable<number>;
  counterServiceSub?: Subscription;

  constructor(private store: Store<{ counter: number }>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }
}

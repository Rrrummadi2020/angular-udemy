import { Actions, createEffect, ofType } from '@ngrx/effects';
import { init, decrement, increment, set } from './counter.action';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
@Injectable()
export class CounterEffects {
  initialCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap((action) => {
        const counter = localStorage.getItem('counter');
        if (counter) {
          return of(set({ value: +counter }));
        } else {
          return of(set({ value: 0 }));
        }
      })
    )
  );
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select('counter')),
        tap(([action, counter]) => {
          console.log(action);
          console.log(counter);
          console.log(action.value);
          localStorage.setItem('counter', String(counter));
          //operations of store like reducer,selector & action should be simple and synchronous,
          //for sending action data to Http, log . or some other ,need to use Effects package
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}

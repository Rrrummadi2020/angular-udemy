import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.action';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select('counter')),
        tap(([action, counter]) => {
          console.log(action);
          console.log(counter);
          console.log(action.value);
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

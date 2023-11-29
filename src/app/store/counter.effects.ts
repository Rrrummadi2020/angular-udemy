import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          console.log(action.value);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}

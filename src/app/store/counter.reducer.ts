import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.action';
import { state } from '@angular/animations';

let initialState = 0;
// export const couterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value),
//   on(decrement, (state, action) => state - action.value)
// );

export function couterReducer(counterState = initialState, action: any) {
  if (action.type === '[Counter] Increment') {
    return counterState + 3;
  } else if (action.type === '[Counter] Decrement') {
    return counterState - 1;
  }
  return counterState;
}

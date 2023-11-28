import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.action';
import { state } from '@angular/animations';

let initialState = 0;
export const couterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value)
);
// export const function couterReducer(counterState=initialState) {
//     return counterState;
// }

import { createSelector } from '@ngrx/store';

export const counterSelector = (state: { counter: number }) => state.counter;
export const doubleCounterSelector = createSelector(
  counterSelector,
  (counter) => counter * 2
);

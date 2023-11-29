import { Action, createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);

export class CounterAction implements Action {
  readonly type = '[Counter] Increment';
  constructor(public payload: { value: number }) {}
}

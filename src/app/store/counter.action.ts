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

export class CouunterSet implements Action {
  readonly type = '[Counter] set';
  constructor(public value: number) {}
}
export const init = createAction('[Counter] init');
export const set = createAction('[Counter] set', props<{ value: number }>());

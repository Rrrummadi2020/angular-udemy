import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let user = 'ADMIN';
  // let user = 'USER';
  return user == 'ADMIN' ? true : false;
};

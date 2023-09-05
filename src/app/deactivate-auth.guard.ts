import { CanActivateFn } from '@angular/router';

export const deactivateAuthGuard: CanActivateFn = (route, state) => {
  let result = confirm('are you sure to leave this page without saving the data')
  if (result == true) {
    return true;
  } else {
    return false;

  }
};

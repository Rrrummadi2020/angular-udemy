import { CanActivateFn } from '@angular/router';

export const loadModuleGuard: CanActivateFn = (route, state) => {
  return true;
};

import { Route } from '@angular/router';

export const fallbackRoute : Route =
  { path: '**', redirectTo: '/login', pathMatch: 'full' };

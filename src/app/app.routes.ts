import { Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';

export const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  { path: '', pathMatch: 'full', redirectTo: 'test' },
  { path: '**', pathMatch: 'full', redirectTo: 'test' }
];

import { Routes } from '@angular/router';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/contact-list',
    pathMatch: 'full',
  },
  {
    path: 'contact-list',
    component: ContactListComponent,
  },
  {
    path: 'contact-form',
    component: ContactFormComponent,
  },
];

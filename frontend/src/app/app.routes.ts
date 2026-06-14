import { Routes } from '@angular/router';
import { EnquiryForm } from './pages/enquiry-form/enquiry-form';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  {
    path: '',
    component: EnquiryForm
  },
  {
    path: 'admin',
    component: Admin
  }
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './shared/component/layout/content/content.component';
import { dashData } from './shared/routes/routes';
import { LoginComponent } from './component/auth/login/login.component';
import { PatientSignUpComponent } from './component/auth/patient-sign-up/patient-sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pages/sample-page1',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'patient/signup',
    component: PatientSignUpComponent
  },
  {
    path: '',
    component: ContentComponent,
    children: dashData

  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

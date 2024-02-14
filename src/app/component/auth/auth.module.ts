import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component'; 
import { SignupPatientComponent } from './signup-patient/signup-patient.component';
 

@NgModule({
  declarations: [ 
    LoginComponent,
    SignupPatientComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedModule, 
    AuthRoutingModule, 
  ],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../enviroments/enviroment';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule
  ]
})
export class AuthModule { }

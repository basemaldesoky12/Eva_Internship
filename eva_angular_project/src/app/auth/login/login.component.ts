import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    errorMessage: string = '';

    constructor(private afAuth: AngularFireAuth,
       private fb: FormBuilder, 
      private route: Router,
      private authService : AuthService,
      public nav : NavbarService) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit(): void {
      this.nav.hide()
    }

    login() {
      console.log("dffddf")
        if (this.loginForm.valid) {
          console.log("cdccdcdc")
            const { email, password } = this.loginForm.value;
            this.afAuth
                .signInWithEmailAndPassword(email, password)
                .then(userCredential => {
                  this.authService.setLoggedIn(true);
                  console.log('Logged in:', userCredential);
                  this.route.navigate([''])
                })
                .catch(error => {
                  console.log(error)
                    this.errorMessage = 'Incorrect email or password. Please try again.';
                });
        }else{
          this.errorMessage="Invalid email or password. Please try again."
        }
    }
}

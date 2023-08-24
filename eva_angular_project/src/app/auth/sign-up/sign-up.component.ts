import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm! : FormGroup
 constructor(private afAuth : AngularFireAuth, 
  private fb :FormBuilder, 
  private route : Router,
  public nav : NavbarService){
  this.signupForm= this.fb.group({
    username: ['', Validators.required],
    email : ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
 }
ngOnInit(): void {
  this.nav.hide()
}
signUp(){
  if (this.signupForm.valid) {
    const { email, password } = this.signupForm.value;
    this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            this.route.navigate(['auth','login'])
            console.log(userCredential)
        })
        .catch(error => {
            // Handle registration error
        });
}
}
}
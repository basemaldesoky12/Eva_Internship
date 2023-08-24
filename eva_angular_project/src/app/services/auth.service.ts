import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedInSubject = new BehaviorSubject<boolean>(false);
    loggedIn$ = this.loggedInSubject.asObservable();

    constructor(private afAuth: AngularFireAuth) {
        this.loggedInSubject.next(this.isLoggedIn());
    }

     isLoggedIn(): boolean {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    setLoggedIn(value: boolean) {
        if (value) {
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            localStorage.removeItem('isLoggedIn');
        }
        this.loggedInSubject.next(value);
    }
    logout() {
      // Call the signOut() method from AngularFireAuth
      this.afAuth.signOut().then(() => {
          // After successfully logging out, update the logged-in status
          this.setLoggedIn(false);
      });
  }
}

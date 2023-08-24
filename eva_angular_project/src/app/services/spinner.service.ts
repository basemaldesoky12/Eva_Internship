import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinnerVisibility = new BehaviorSubject<boolean>(false);

  get spinnerVisibility$() {
    return this.spinnerVisibility.asObservable();
  }

  show() {
    this.spinnerVisibility.next(true);
  }

  hide() {
    this.spinnerVisibility.next(false);
  }
}

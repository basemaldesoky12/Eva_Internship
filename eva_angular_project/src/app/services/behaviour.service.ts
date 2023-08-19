import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  private messageSubject = new BehaviorSubject<string>('Initial Message');
  currentMessage = this.messageSubject.asObservable();

  changeMessage(newMessage: string) {
      this.messageSubject.next(newMessage);
  }}

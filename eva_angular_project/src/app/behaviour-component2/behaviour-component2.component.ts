import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviour-component2',
  templateUrl: './behaviour-component2.component.html',
  styleUrls: ['./behaviour-component2.component.css']
})
export class BehaviourComponent2Component {
newMessage!:string
constructor(private behaviourService : BehaviourService){}
sendMessage() {
  this.behaviourService.changeMessage(this.newMessage);
  this.newMessage = '';
}

}

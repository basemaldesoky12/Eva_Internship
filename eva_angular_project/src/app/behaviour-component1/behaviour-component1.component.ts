import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviour-component1',
  templateUrl: './behaviour-component1.component.html',
  styleUrls: ['./behaviour-component1.component.css']
})
export class BehaviourComponent1Component {
message !: string
constructor(private behaviourService : BehaviourService){
  this.behaviourService.currentMessage.subscribe(msg=>this.message=msg)
}
}

import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(public nav : NavbarService){
    this.nav.show()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

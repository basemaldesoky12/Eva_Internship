import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { IUsers } from 'src/app/shared-classes-types/IUsers';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  UsersList !: IUsers[]
  constructor(private userService : UserService, public nav : NavbarService){}
ngOnInit(): void {
  this.nav.show()
  this.userService.getAllUsers().subscribe(data=>{
    this.UsersList=data
  })
}

}

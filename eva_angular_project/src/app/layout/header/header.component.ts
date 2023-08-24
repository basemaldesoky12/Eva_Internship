import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNavbarCollapsed = true;
  isLoggedIn = false;
  constructor(private authService : AuthService, 
    public nav : NavbarService,
    private route : Router){}
  ngOnInit(): void {
    this.nav.show()
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
  });
  }

  toggleNavbar() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  logout() {
    // Call the logout function from AuthService
  
    this.authService.logout();
    this.route.navigate([''])
}
}

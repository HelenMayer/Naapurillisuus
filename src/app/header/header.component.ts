import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgUrl ='./assets/Logo_naapuri.png';
  access = true;

  constructor(private router :Router, private LoginService : LoginService){}

  ngOnInit(){
    console.log(this.LoginService.access)
    this.access = this.LoginService.access
  }

  Logout(){
    this.router.navigate(['/sign-in']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgUrl ='./assets/Logo_naapuri.png';

  constructor(private router :Router){}


  Logout(){
    this.router.navigate(['/sign-in']);
  }

}

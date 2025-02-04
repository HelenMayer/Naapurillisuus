import { Component } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  clients: Client [] = []

  constructor(private ClientService : ClientService, private router: Router, private LoginService : LoginService){}

  ngOnInit(): void{
    this.ClientService.getClients().subscribe((result : Client[]) => (this.clients = result));
  }

  LoginAccess(){
    
    let email = document.getElementsByTagName("input")[0].value;
    let password = document.getElementsByTagName("input")[1].value;

    if (email == "" || password == ""){
      alert("Please enter login and password")
    }
    else if(this.clients.find(searchClient => searchClient.email == email) == undefined || this.clients.find(searchClient => searchClient.password == password) == undefined){
      let modal = document.getElementById("modalWindowWarning");
      modal.style.display = "block"; 
      document.getElementsByTagName("form")[0].style.opacity = "0.5";
    }
    else if (this.clients.find(searchClient => searchClient.email == email).id !== null ) {
      let id_user = this.clients.find(searchClient => searchClient.email == email).id
      if (this.clients.find(searchClient => searchClient.id == id_user).password == password) {
        let role = this.clients.find(searchClient => searchClient.email == email).role
        let id = this.clients.find(searchClient => searchClient.email == email).id
        this.LoginService.access = true;
        console.log("new ", this.LoginService.access)

      if (role == "helper"){
        this.router.navigate(['/helper-dashboard/:'+id]);
      }
      if (role == "client"){
        this.router.navigate(['/client-tasks/:'+id]);
      }
    }
  }  
    else{
    let modal = document.getElementById("modalWindowWarning");
    modal.style.display = "block"; 
    document.getElementsByTagName("form")[0].style.opacity = "0.5";
  }
}

  onCloseModalWindow(){
  let modal = document.getElementById("modalWindowWarning");
  modal.style.display = "none"; 
  document.getElementsByTagName("form")[0].style.opacity = "1";
}

}


import { Component } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  clients: Client [] = []

  constructor(private ClientService : ClientService){}

  ngOnInit(): void{
    this.ClientService.getClients().subscribe((result : Client[]) => (this.clients = result));
  }

  LoginAccess(){
    let email = document.getElementsByTagName("input")[0].value;
    let password = document.getElementsByTagName("input")[1].value;
    console.log(this.clients)
    console.log(this.clients.find(searchClient => searchClient.email == email).lastName)
    console.log(this.clients.find(searchClient => searchClient.password == password).lastName)

    if (this.clients.find(searchClient => searchClient.email == email).lastName == this.clients.find(searchClient => searchClient.password == password).lastName ) {
      let role = this.clients.find(searchClient => searchClient.email == email).role
    console.log(role)
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


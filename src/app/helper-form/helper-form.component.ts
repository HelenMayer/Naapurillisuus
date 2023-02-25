import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css'],
  providers : []
})
export class HelperFormComponent {

  @Input() client? : Client;
  @Output() clientsUpdate = new EventEmitter<Client[]>();
  clients: Client [] = []

  constructor(private ClientService : ClientService){}

  ngOnInit(): void{
    this.ClientService.getClients().subscribe((result : Client[]) => (this.clients = result));
  }

  public createClient(){
    console.log("work a little");
    let helper = new Client;

    helper.role = "helper";
    helper.firstName = document.getElementsByTagName("input")[0].value;
    helper.lastName = document.getElementsByTagName("input")[1].value;
    helper.email = document.getElementsByTagName("input")[2].value;
    helper.password = document.getElementsByTagName("input")[3].value;
    helper.address = document.getElementsByTagName("input")[4].value;
    helper.city = document.getElementsByTagName("select")[0].value;
    helper.zip = document.getElementsByTagName("input")[5].value;
    helper.helpOptions = "help for people";

    if (this.clients.find(searchClient => searchClient.email == helper.email) == null || this.clients.find(searchClient => searchClient.password == helper.password) == null ) {
      this.ClientService.createClient(helper).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
      let modal = document.getElementById("modalWindowSuccess");
      modal.style.display = "block"; 
      document.getElementsByTagName("form")[0].style.opacity = "0.5";
    }
    else{
      let modal = document.getElementById("modalWindowWarning");
      modal.style.display = "block"; 
      document.getElementsByTagName("form")[0].style.opacity = "0.5";
    }
  };

  updateClient(client : Client){
    this.ClientService.updateClient(client).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
  };
  deleteClient(client : Client){
    this.ClientService.deleteClient(client).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
  };

  onCloseModalWindow(){
    let modal = document.getElementById("modalWindowWarning");
    modal.style.display = "none"; 
    document.getElementsByTagName("form")[0].style.opacity = "1";
  }
}

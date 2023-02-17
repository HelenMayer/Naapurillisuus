import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../Models/Client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  providers : [ClientService]
})
export class ClientFormComponent implements OnInit {

  @Input() client? : Client;
  @Output() clientsUpdate = new EventEmitter<Client[]>();
  clients: Client [] = []

  constructor(private ClientService : ClientService){}

  ngOnInit(): void {
    this.ClientService.getClients().subscribe((result : Client[]) => (this.clients = result));
  }

  public createClient(){
    let client = new Client;

    client.firstName = document.getElementsByTagName("input")[0].value;
    client.lastName = document.getElementsByTagName("input")[1].value;
    client.emailAddress = document.getElementsByTagName("input")[2].value;
    client.password = document.getElementsByTagName("input")[3].value;
    client.phoneNumber = document.getElementsByTagName("input")[4].value;
    client.address = document.getElementsByTagName("input")[5].value;
    client.city = document.getElementsByTagName("select")[0].value;
    client.zip = document.getElementsByTagName("input")[6].value;

    this.ClientService.createClient(client).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
  };

  updateClient(client : Client){
    this.ClientService.updateClient(client).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
  };
  deleteClient(client : Client){
    this.ClientService.deleteClient(client).subscribe((clients : Client[]) => this.clientsUpdate.emit(clients))
  };
}

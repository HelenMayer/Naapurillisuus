import { Component } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Observable, of } from 'rxjs';
import { Client } from '../Models/Client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-my-account',
  templateUrl: './client-my-account.component.html',
  styleUrls: ['./client-my-account.component.css']
})
export class ClientMyAccountComponent {
  myQrCode: boolean = false;
  imgUrl = "https://source.unsplash.com/random/?user,face/300x202"
  public id = "";
  clients : Client[] = [];
  firstname : string;
  lastname : string;
  address : string;
  email : string;
  phonenumber : string;

  constructor(private ClientService : ClientService, private route : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.id.replace(":", "")

    this.ClientService.getClients().subscribe((result : Client[]) => {
      this.clients = result; 
      this.firstname = this.clients.find(searchClient => searchClient.id == Number(this.id)).firstName;
      this.lastname = this.clients.find(searchClient => searchClient.id == Number(this.id)).lastName; 
      this.address = this.clients.find(searchClient => searchClient.id == Number(this.id)).address + ', ' +this.clients.find(searchClient => searchClient.id == Number(this.id)).city + ', ' + this.clients.find(searchClient => searchClient.id == Number(this.id)).zip;
      this.email = this.clients.find(searchClient => searchClient.id == Number(this.id)).email;
      this.phonenumber = this.clients.find(searchClient => searchClient.id == Number(this.id)).phoneNumber;
    });
  }
  askHelp() {
  
  }

    BackClientTask(){
    this.router.navigate(['/client-tasks/:'+this.id])
  }

}

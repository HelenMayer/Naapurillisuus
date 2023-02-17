import { Component } from '@angular/core';
import { Client } from './Models/Client';
import { ClientService } from './services/client.service';
import { HelperFormService } from './services/helper-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Naapurillisuus';
  clients : Client[] = [];

  // constructor(
  //   public helperformService: HelperFormService,
  //   ){}

  constructor (private ClientService : ClientService){}

  ngOnInit() : void {
    // this.ClientService.getClients().subscribe((result : Client[]) => {this.clients = result});
  }
}

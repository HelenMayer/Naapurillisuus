import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "Client";

  constructor(private http : HttpClient) { }

  public getClients() : Client[]
   {
    let person = new Client();
    person.Id = 1;
    person.firstName = "Bekki";
    person.lastName = "Järvi";
    person.emailAddress = "12345@gmail.com";
    person.password = "1234564243";
    console.log(person);
    return [person]
  }
}

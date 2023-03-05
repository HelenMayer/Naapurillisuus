import { Component } from '@angular/core';
import { Client } from './Models/Client';
import { Task } from './Models/task';
import { ClientService } from './services/client.service';
import { HelperFormService } from './services/helper-form.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Naapurillisuus';
  clients : Client[] = [];
  tasks : Task[] = [];


  constructor (private ClientService : ClientService, private TaskService : TaskService, helperformService : HelperFormService){}

  ngOnInit() : void {

  }
}

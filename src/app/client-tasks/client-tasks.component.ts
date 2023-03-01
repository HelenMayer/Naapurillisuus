import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../Models/Client';
import { Task } from '../Models/task';
import { TaskService } from '../services/task.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css']
})
export class ClientTasksComponent {

  @Input() task? : Task;
  @Output() tasksUpdate = new EventEmitter<Task[]>();
  tasks: Task [] = []
  name = "UserName";
  id = "";
  clients : Client[] = []

  constructor(private TaskService : TaskService, private route: ActivatedRoute, private ClientService : ClientService){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.id.replace(":", "")

    this.ClientService.getClients().subscribe((result : Client[]) => {this.clients = result; this.name = this.clients.find(searchClient => searchClient.id == Number(this.id)).firstName + " " + this.clients.find(searchClient => searchClient.id == Number(this.id)).lastName});
    this.TaskService.getTasks().subscribe((result : Task[]) => (this.tasks = result));
  }

  public createTask(){
    let task = new Task;

    task.headerTask = document.getElementsByTagName("select")[0].value;
    task.descriptionTask = document.getElementsByTagName("textarea")[0].value;
  
    if (task.headerTask == "" || task.descriptionTask == "" ) {
      alert("Fill in all data!")
    }
    else {
      this.TaskService.createTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
      let modal = document.getElementById("modalWindowSuccess");
      modal.style.display = "block"; 
      document.getElementsByTagName("form")[0].style.opacity = "0.5";
    }
  };

  updateClient(task : Task){
    this.TaskService.updateTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  };
  deleteClient(task : Task){
    this.TaskService.deleteTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  };

  onCloseModalWindow(){
    let modal = document.getElementById("modalWindowSuccess");
    modal.style.display = "none"; 
    document.getElementsByTagName("form")[0].style.opacity = "1";
  }
}
export class NgbdAccordionStatic {}


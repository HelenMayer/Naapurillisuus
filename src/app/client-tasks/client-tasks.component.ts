import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../Models/Client';
import { Task } from '../Models/task';
import { ClientService } from '../services/client.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css']
})
export class ClientTasksComponent {

  constructor(private TaskService : TaskService, private ClientService : ClientService, private route :ActivatedRoute, private router : Router){}

  public name = "UserName";
  public id = "";
  clients : Client[] = [];
  tasks : Task[] = [];

  @Input() task? : Task;
  @Output() tasksUpdate = new EventEmitter<Task[]>();

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.id.replace(":", "")

    this.ClientService.getClients().subscribe((result : Client[]) => {this.clients = result; this.name = this.clients.find(searchClient => searchClient.id == Number(this.id)).firstName + " " + this.clients.find(searchClient => searchClient.id == Number(this.id)).lastName; });
    this.TaskService.getTasks().subscribe((result : Task[]) => (this.tasks = result));
  }
  public createTask(){
    // получаем дату и время
    var today = new Date();
    var now = today.toLocaleString();

    let task = new Task;

    task.headerTask = document.getElementsByTagName("select")[0].value;
    task.descriptionTask = document.getElementsByTagName("textarea")[0].value;
    task.timeCreate = now;
    task.deadline = document.getElementsByTagName("select")[1].value;
    task.idClient = this.id;
    task.done = "false";

    if (task.headerTask == "" || task.descriptionTask == "") {
      alert("Fill in all data!")
    }
    else{
      this.TaskService.createTask(task).subscribe((tasks : Task[]) => this.tasksUpdate.emit(tasks));
      let modal = document.getElementById("modalWindowSuccess");
      modal.style.display = "block"; 
      document.getElementsByTagName("form")[0].style.opacity = "0.5";
    }  
  }

  updateTask(task : Task){
    this.TaskService.updateTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  };
  deleteTask(task : Task){
    this.TaskService.deleteTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  };

  onCloseModalWindow(){
    let modal = document.getElementById("modalWindowSuccess");
    modal.style.display = "none"; 
    document.getElementsByTagName("form")[0].style.opacity = "1";
  }

  doneTask(task : Task){
    task.done = "true";
    this.updateTask(task)
  }
}
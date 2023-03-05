import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../Models/Client';
import { Task } from '../Models/task';
import { TaskService } from '../services/task.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-helper-dashboard',
  templateUrl: './helper-dashboard.component.html',
  styleUrls: ['./helper-dashboard.component.css'],
})
export class HelperDashboardComponent {
  disabled = false;

  @Input() task? : Task;
  @Output() tasksUpdate = new EventEmitter<Task[]>();
  tasks: Task [] = []
  name = "UserName";
  id = "";
  clients : Client[] = []
  inProcessTasks : Task[] = []
  doneTasks : Task[] = []

  constructor(private TaskService : TaskService, private route: ActivatedRoute, private ClientService : ClientService){}

  ngOnInit(): void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.id = this.id.replace(":", "")

    this.ClientService.getClients().subscribe((result : Client[]) => {this.clients = result; this.name = this.clients.find(searchClient => searchClient.id == Number(this.id)).firstName + " " + this.clients.find(searchClient => searchClient.id == Number(this.id)).lastName});
    this.TaskService.getTasks().subscribe((result : Task[]) => {this.tasks = result; console.log(this.tasks)});
  }

  updateTask(task : Task){
    this.TaskService.updateTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  };

  takeTask(task : Task){
    console.log("I'm takeTask");
    task.idHelper = this.id;
    this.updateTask(task);
  }

  deleteTask(task : Task){
    this.TaskService.deleteTask(task).subscribe((Tasks : Task[]) => this.tasksUpdate.emit(Tasks))
  }
  
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../Models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css']
})
export class ClientTasksComponent {

  @Input() task? : Task;
  @Output() tasksUpdate = new EventEmitter<Task[]>();
  Tasks: Task [] = []

  constructor(private TaskService : TaskService){}

  ngOnInit(): void{
    this.TaskService.getTasks().subscribe((result : Task[]) => (this.Tasks = result));
  }

  public createTask(){
    let task = new Task;

    task.headerTask = document.getElementsByTagName("select")[0].value;
    task.descriptionTask = document.getElementsByTagName("textarea")[0].value;

    if (task.headerTask=="" || task.descriptionTask=="" ) {
      alert("Fill in all data!")
    }
    else if (this.Tasks.find(searchTask => searchTask.headerTask == task.headerTask) == null || this.Tasks.find(searchTask => searchTask.descriptionTask == task.descriptionTask) == null ) 
    {
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

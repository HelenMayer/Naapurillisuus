import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = "Tasks";

  constructor(private http : HttpClient) { }

// возвращает список задач
  public getTasks() : Observable<Task[]> 
   {
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`);
  }

  public createTask(task : Task) : Observable<Task[]> 
  {
  console.log(task)
   return this.http.post<Task[]>(`${environment.apiUrl}/${this.url}`, task);
  }

  public updateTask(task : Task) : Observable<Task[]> 
   {
    return this.http.put<Task[]>(`${environment.apiUrl}/${this.url}`, task);
  }

  public deleteTask(task : Task) : Observable<Task[]> 
   {
    return this.http.delete<Task[]>(`${environment.apiUrl}/${this.url}/${task.id}`);
  }
 }


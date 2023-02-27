import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css']
})
export class ClientTasksComponent {
date: any;

onInit(){
  document.getElementById("logout").style.display="block"
  document.getElementById("login").style.display="none"
}



}

export class NgbdAccordionStatic {}

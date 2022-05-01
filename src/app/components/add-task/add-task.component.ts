import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string="";
  day:Date=new Date();
  reminder:boolean=false;
  showAddTask: boolean=false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value =>this.showAddTask=value)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){
      alert("please add a task");
    } else{
    const {text,day,reminder} = this
    const newTask ={text,day,reminder}
    this.onAddTask.emit(newTask);
    this.limpiarForm();
    /* const newTask={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    } */
    }
  }

  limpiarForm(){
    this.text="";
    this.day=new Date();
    this.reminder=false;
  }

 

}

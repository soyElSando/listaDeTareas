import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string="";
  day:string="";
  reminder:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length===0){
      alert("please add a task");
    }
    const {text,day,reminder} = this
    const newTask ={text,day,reminder}
    this.onAddTask.emit(newTask);
    /* const newTask={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    } */
  }

 

}

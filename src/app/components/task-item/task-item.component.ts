import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CATEGORY, COLORS, COLORTASK, Task} from '../../Task';
import { TASK } from 'src/app/mock-tasks';
import { faPencil, faTimes, faBell, faBriefcaseClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task= TASK[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes=faTimes;
  faPencil=faPencil;
  faBell=faBell;
  color:string= COLORTASK.Pending;
  d = new Date();

  borderColor:string="green";

  constructor () {
    
   }

  ngOnInit(): void {
    let fechaActual = new Date(this.d);
    let fechaComponente = new Date(this.task.day);
    const unDia=86400000;
    if (fechaComponente.getTime()-fechaActual.getTime() <0){
      this.color=COLORTASK.Overdue;
    }else if (fechaComponente.getTime()-fechaActual.getTime() <unDia){
      this.color=COLORTASK.Alert;
    }

    switch (Number(this.task.category)){
      case CATEGORY.Home:
        this.borderColor=COLORS.Home;
        break;
      case CATEGORY.Study:
        this.borderColor=COLORS.Study;
        break;
      case CATEGORY.Work:
        this.borderColor=COLORS.Work;
        break;
    }
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}

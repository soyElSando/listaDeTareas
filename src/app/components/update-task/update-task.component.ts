import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { TaskService } from 'src/app/service/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string="";
  day:Date=new Date();
  reminder:boolean=false;

  id:number=0;
  tasks: Task[]=[];

  constructor(private route:ActivatedRoute, private taskService: TaskService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks= tasks.filter(t=>t.id==this.id)
      this.text=this.tasks[0].text
      this.day=this.tasks[0].day
      this.reminder=this.tasks[0].reminder
    });
    
    
  }
  
  onSubmit(){
    if(this.text.length===0){
      alert("please add a task");
    } else{
    const {text,day,reminder, id} = this
    const updatedTask ={text,day,reminder, id}
    console.log(updatedTask)
    this.taskService.updateTask(updatedTask).subscribe();
    this.router.navigate(["/"])
    }
  }

}

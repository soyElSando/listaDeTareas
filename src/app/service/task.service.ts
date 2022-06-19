import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {Observable, of} from 'rxjs'
import {Task} from "../Task"

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://tasklist-420f9-default-rtdb.firebaseio.com/tasks'

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    const url = `${this.apiUrl}.json`
    return this.http.get<Task[]>(url)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}.json`
    return this.http.delete<Task>(url)
  }
  updateTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}.json`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}.json`
    return this.http.post<Task>(url, task, httpOptions)
  }
}

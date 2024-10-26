import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSubject = new BehaviorSubject<string[]>([]);
  tasks$ : Observable<string[]> = this.taskSubject;

  getTasks() : string[] {
   return this.taskSubject.getValue();
  }

  addTask(task : string)
  {
    const currentTask = this.getTasks();
    this.taskSubject.next([...currentTask, task]);
  }

  removeTask(index : number){
    const currentTask = this.getTasks();
    currentTask.splice(index, 1);
    this.taskSubject.next([...currentTask]);
  }
}

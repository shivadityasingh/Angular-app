import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  constructor(private taskService : TaskService){}

  tasks : string[] = [];
  newTask : string = '';

  ngOnInit()
  {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  AddTask(newTask : string)
  {
    if(this.newTask.trim()){
    this.taskService.addTask(newTask);
    this.newTask = '';
    }
  }

  removeTask(index : number)
  {
    this.taskService.removeTask(index);
  }




}

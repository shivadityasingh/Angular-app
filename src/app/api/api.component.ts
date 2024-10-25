import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrl: './api.component.css',
  providers: [ApiService]
})
export class ApiComponent {

  posts : any[] = [];
  constructor(private apiService : ApiService){}

  ngOnInit(){
    this.apiService.getPosts().subscribe((data) => 
      {this.posts = data;}
    )
  }
}

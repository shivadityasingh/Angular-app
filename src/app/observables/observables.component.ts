import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

  message : string = '';
  ngOnInit(){
  const observable : Observable<string> = new Observable<string>((observer) => {
    observer.next("First Message");
    setTimeout(() => {
      observer.next("Second Message");
    }, 3000);
    setTimeout(() => {
      observer.next("Third Message");
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 9000);
  });

  observable.subscribe({
    next : ((msg) => this.message = msg),
    complete : (() => this.message = "Observation Complete")
  })
}

}

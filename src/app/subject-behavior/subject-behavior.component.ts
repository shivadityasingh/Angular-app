import { Component } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject-behavior',
  templateUrl: './subject-behavior.component.html',
  styleUrl: './subject-behavior.component.css'
})
export class SubjectBehaviorComponent {

  ngOnInit(){
  const subject : Subject<number> = new Subject<number>();
  const behaviorSubject : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  const replaySubject : ReplaySubject<number> = new ReplaySubject<number>(2);
  //subject.next(0);
  replaySubject.next(1);
  replaySubject.next(2);
  //subject.subscribe((value) => console.log(`Subscribed to Subject ${value}`));
  //behaviorSubject.subscribe((value) => console.log(`Subscribed to Behavior Subject ${value}`));
  replaySubject.subscribe((value) => console.log(`Subscribed to Subject ${value}`));
  replaySubject.next(3);
  //subject.next(1);
  //subject.next(2);
  //behaviorSubject.next(1);
  //behaviorSubject.next(2);
  //behaviorSubject.next(5);
  //subject.subscribe((value)=> console.log(`Subscribed to Subject ${value}`));
  replaySubject.subscribe((value) => console.log(`Subscribed to Subject ${value}`));
  //subject.next(3);
  //subject.next(4);
  //behaviorSubject.subscribe((value) => console.log(`Subscribed to Behavior Subject ${value}`));
  //behaviorSubject.next(3);
  //behaviorSubject.next(4);

  }


}

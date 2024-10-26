import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { increment, decrement, reset } from './counters.action';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.css'
})
export class CountersComponent {
  //count$ = this.store?.select('count');
  constructor(private store : Store<{count : number}>){}

  increment()
  {
    this.store.dispatch(increment());
  }

  decrement()
  {
    this.store.dispatch(decrement());
  }
  
  reset()
  {
    this.store.dispatch(reset());
  }
}

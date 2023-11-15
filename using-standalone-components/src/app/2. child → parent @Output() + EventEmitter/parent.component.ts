// 2. child → parent @Output() + EventEmitter

import { Component } from '@angular/core';
import { Child2Component } from './child.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [Child2Component],
  template: `
    <section>
      <app-child2 (messageEvent)="onMessageEvent($event)"></app-child2>
      <br>{{ my_message }}
    </section>
  `,
  styles: ['']
})
export class Parent2Component {
  my_message!: string;
  
  onMessageEvent(msg: string) {
    this.my_message = msg;
  }
}

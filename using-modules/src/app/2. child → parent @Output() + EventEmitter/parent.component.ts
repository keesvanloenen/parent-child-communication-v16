// 2. child → parent @Output() + EventEmitter

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
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

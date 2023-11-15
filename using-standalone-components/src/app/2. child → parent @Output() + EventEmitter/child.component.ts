// 2. child → parent @Output() + EventEmitter

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  template: `
    <article>
      <p><button (click)="onClick()">Click me</button></p>
    </article>
  `,
  styles: ['']
})
export class Child2Component {
  childMessage = 'Hello from Child!';

  @Output() messageEvent = new EventEmitter<string>();

  onClick() {
    this.messageEvent.emit(this.childMessage);
  }
}

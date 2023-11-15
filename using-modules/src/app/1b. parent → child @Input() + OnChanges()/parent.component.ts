// 1b. parent → child @Input() + OnChanges()

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-parent1b',
  template: `
    <section>
      <app-child1b [childMessage]="parentMessage"></app-child1b>
      
      <button (click)="onClick()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent1bComponent {
  parentMessage = 'Hello from Parent';

  onClick() {
    this.parentMessage = 'Hello again from Parent';
  }
}

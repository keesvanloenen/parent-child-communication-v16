// 1a. parent → child @Input()

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-parent1a',
  template: `
    <section>
      <app-child1a [childMessage]="parentMessage"></app-child1a>
    </section>
  `,
  styles: ['']
})
export class Parent1aComponent {
  parentMessage = 'Hello from Parent';
}

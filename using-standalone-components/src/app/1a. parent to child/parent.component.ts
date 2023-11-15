// 1a. parent → child @Input()

import { Component } from '@angular/core';
import { Child1aComponent } from './child.component';
 
@Component({
  selector: 'app-parent1a',
  standalone: true,
  imports: [Child1aComponent],
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

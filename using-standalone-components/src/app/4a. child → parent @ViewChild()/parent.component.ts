// 4a. Child → Parent @ViewChild()

import { Component, ViewChild } from '@angular/core';
import { Child4aComponent } from './child.component';

@Component({
  selector: 'app-parent4a',
  standalone: true,
  imports: [Child4aComponent],
  template: `
    <section>
      <app-child4a></app-child4a>
      <button (click)="onClick()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent4aComponent {
  @ViewChild(Child4aComponent) child!: Child4aComponent;

  onClick() {
    this.child.doSomething();
  }
}

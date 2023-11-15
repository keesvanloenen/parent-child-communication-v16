// 0. no communication

import { Component } from '@angular/core';
import { Child0Component } from './child.component';

@Component({
  selector: 'app-parent0',
  standalone: true,
  imports: [Child0Component],
  template: `
    <section>
      <app-child0></app-child0>
      <p>Hello</p>
    </section>
  `,
  styles: ['']
})
export class Parent0Component { }

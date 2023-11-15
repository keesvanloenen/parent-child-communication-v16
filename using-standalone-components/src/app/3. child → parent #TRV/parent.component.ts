// 3. child → parent #TRV

import { Component } from '@angular/core';
import { Child3Component } from './child.component';

@Component({
  selector: 'app-parent3',
  standalone: true,
  imports: [Child3Component],
  template: `
    <section>
      <app-child3 #the_child></app-child3>

      <p>{{ the_child.childMessage }}</p>
      <button (click)="the_child.doSomething()">Click me</button>
    </section>
  `,
  styles: ['']
})
export class Parent3Component {}

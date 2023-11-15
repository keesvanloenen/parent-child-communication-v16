// 3. child → parent #TRV

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
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

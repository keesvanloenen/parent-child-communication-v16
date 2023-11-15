// 5a. parent → child ng-content

import { Component } from '@angular/core';
import { Child5aComponent } from './child.component';

@Component({
  selector: 'app-parent5a',
  standalone: true,
  imports: [Child5aComponent],
  template: `
    <section>
      <app-child5a><h3>Urk</h3></app-child5a>
    </section>
  `,
  styles: ['']
})
export class Parent5aComponent { }

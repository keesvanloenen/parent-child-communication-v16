// 5b. parent → child ng-content select

import { Component } from '@angular/core';

@Component({
  selector: 'app-child5b',
  standalone: true,
  template: `
    <article>
      <p>projected values:</p>
      <ng-content select=".city"></ng-content>
      <ng-content select=".name"></ng-content>
    </article>
  `,
  styles: ['']
})
export class Child5bComponent { }
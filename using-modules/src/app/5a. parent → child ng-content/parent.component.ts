// 5a. parent → child ng-content

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent5a',
  template: `
    <section>
      <app-child5a>
        <h3>Urk</h3>
      </app-child5a>
    </section>
  `,
  styles: ['']
})
export class Parent5aComponent { }

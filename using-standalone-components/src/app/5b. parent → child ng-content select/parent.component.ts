// 5b. parent → child ng-content select

import { Component } from '@angular/core';
import { Child5bComponent } from './child.component';

@Component({
  selector: 'app-parent5b',
  standalone: true,
  imports: [Child5bComponent],
  template: `
    <section>
      <app-child5b>
        <h3 class="city" #the_city>Urk</h3>
        <p class="name">Joop</p>
      </app-child5b>
    </section>
  `,
  styles: [`
    p {
      display: inline-block;
      color: black;
      width: 100px;
      border: 2px dashed black;
      margin: 0;
    }
  `]
})
export class Parent5bComponent { }

// 1a. parent → child @Input()

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1a',
  standalone: true,
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>
  `,
  styles: ['']
})
export class Child1aComponent {
  @Input() childMessage = '';
}

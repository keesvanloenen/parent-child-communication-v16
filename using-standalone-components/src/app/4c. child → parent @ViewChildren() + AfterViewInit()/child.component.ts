// 4c. child → parent @ViewChildren() + AfterViewInit()

import { Component } from '@angular/core';

@Component({
  selector: 'app-child4c',
  standalone: true,
  template: `
    <article>
      <p>{{ message1 }}</p>
    </article>`,
  styles: ['']
})
export class Child4cComponent {
  message1 = 'Hello';
  message2 = 'Goodbye';
}

// 4b. child → parent @ViewChild() + AfterViewInit()

import { Component } from '@angular/core';

@Component({
  selector: 'app-child4b',
  standalone: true,
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>`,
  styles: ['']
})
export class Child4bComponent {
  childMessage = 'Hello from child';

  doSomething() {
    console.log('Child: done something...')
  }
}

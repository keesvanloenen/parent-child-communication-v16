// 3. child → parent #TRV

import { Component } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: true,
  template: `
    <article>
      <p>{{ childMessage }}</p>
    </article>`,
  styles: ['']
})
export class Child3Component {
  childMessage = 'Hello from child';

  doSomething() {
    console.log('Child: done something...')
  }
}

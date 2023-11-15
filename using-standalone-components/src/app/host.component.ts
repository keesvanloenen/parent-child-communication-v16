import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Parent0Component } from './0. no communication/parent.component';
import { Parent1aComponent } from './1a. parent to child/parent.component';
import { Parent1bComponent } from './1b. parent → child @Input() + OnChanges()/parent.component';
import { Parent2Component } from './2. child → parent @Output() + EventEmitter/parent.component';
import { Parent3Component } from './3. child → parent #TRV/parent.component';
import { Parent4aComponent } from './4a. child → parent @ViewChild()/parent.component';
import { Parent4bComponent } from './4b. child → parent @ViewChild() + AfterViewInit()/parent.component';
import { Parent4cComponent } from './4c. child → parent @ViewChildren() + AfterViewInit()/parent.component';
import { Parent5aComponent } from './5a. parent → child ng-content/parent.component';
import { Parent5bComponent } from './5b. parent → child ng-content select/parent.component';
import { Parent5cComponent } from './5c. parent → child ng-content select @ContentChild() AfterContentInit()/parent.component';

export interface Scenario {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [
    CommonModule,
    Parent0Component,
    Parent1aComponent, Parent1bComponent,
    Parent2Component,
    Parent3Component,
    Parent4aComponent, Parent4bComponent, Parent4cComponent,
    Parent5aComponent, Parent5bComponent, Parent5cComponent,
  ],
  template: `
    <div style="display: flex;">
      <div style="width: 2.5em;">
        <h4>{{ activeScenario.id }}.</h4>
      </div>
      <div>
        <h4>{{ activeScenario.title }}</h4>
        {{ activeScenario.description }}
      </div>
    </div>
  
    <div [ngSwitch]="activeScenario.id">
      <app-parent0 *ngSwitchCase="'0'"></app-parent0>
      <app-parent1a *ngSwitchCase="'1a'"></app-parent1a>
      <app-parent1b *ngSwitchCase="'1b'"></app-parent1b>
      <app-parent2 *ngSwitchCase="'2'"></app-parent2>
      <app-parent3 *ngSwitchCase="'3'"></app-parent3>
      <app-parent4a *ngSwitchCase="'4a'"></app-parent4a>
      <app-parent4b *ngSwitchCase="'4b'"></app-parent4b>
      <app-parent4c *ngSwitchCase="'4c'"></app-parent4c>
      <app-parent5a *ngSwitchCase="'5a'"></app-parent5a>
      <app-parent5b *ngSwitchCase="'5b'"></app-parent5b>
      <app-parent5c *ngSwitchCase="'5c'"></app-parent5c>
    </div>
  `,
  styles: ['']
})
export class HostComponent implements OnInit { 
  activeScenario!: Scenario;

  scenarios: Scenario[] = [
    { id: '0', title: '🧔 👦 no communication', description: '', },
    { id: '1a', title: '🧔 ⟶ 👦 pass data to Child', description: 'in Child use @Input()', },
    { id: '1b', title: '🧔 ⟶ 👦 pass data to Child', description: 'in Child use @Input() + ngOnChanges()', },
    { id: '2', title: '🧔 ⟵ 👦 pass data to Parent', description: 'in Child use @Output() + EventEmitter', },
    { id: '3', title: '🧔 ⚟ 👦 get access to Child in template', description: 'define TRV like #example (very limited, all wiring is done within parent template)', },
    { id: '4a', title: '🧔 ⚟ 👦 get reference to Child', description: 'in Parent use @ViewChild()', },
    { id: '4b', title: '🧔 ⚟ 👦 get reference to Child', description: 'in Parent use @ViewChild() + AfterViewInit()', },
    { id: '4c', title: '🧔 ⚟ 👦👦 get reference to more Childs', description: 'in Parent use @ViewChildren() + AfterViewInit()', },
    { id: '5a', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content>', },
    { id: '5b', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content select="...">', },
    { id: '5c', title: '🧔 ⟶ 👦 project content into Child', description: 'in Child use <ng-content select="..."> + @ContentChild + AfterContentInit()', },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.activeScenario = this.scenarios.find((s) => s.id === id) || this.scenarios[0];
    });
  }
}
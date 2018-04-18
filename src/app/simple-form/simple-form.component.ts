import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input type="text" #myInput [(ngModel)]="message" />
      <button (click)="update.emit({text:message})">点击更新</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();

  constructor() { }

  onClick(value) {
    console.log(value);
  }

  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }

  onEventClick($event, value) {
    console.log($event);
    console.log(value);
  }

  ngOnInit() {
  }

}

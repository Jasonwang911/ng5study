import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      {{message}}
      <input 
      type="text" 
      #myInput 
      [(ngModel)]="message"
      [ngClass]="{mousedown:isMousedown}" 
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedoen = false"
      (mouseleave)="isMousedown = false"
      />
      <button (click)="update.emit({text:message})">点击更新</button>
    </div>
  `,
  styles: [`
    :host{
      margin: 10px;
    }
    .mousedown{
      border: 2px solid green;
    }
    input:focus{
      font-weight:blod;
      outline: none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();

  isMousedown:boolean;

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

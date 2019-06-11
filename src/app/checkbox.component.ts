import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `{{item.next}} Date: {{item.dt | date}}<input type="checkbox" (change)="check()">
             <span *ngIf="checkedOrNo">Done</span>
  <button class="btn" type="button" id="{{item.count}}" (click)="removed(item)" >DEL</button>`
})
export class CheckboxComponent {
  checkedOrNo = false;
  @Input() item: object;
  @Output() remove = new EventEmitter();
  removed(item: object) {
    this.remove.emit(item);
  }
  check() {
    this.checkedOrNo = !this.checkedOrNo;
  }
}

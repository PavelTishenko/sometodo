import {Component} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  template: `<input type="checkbox" (change)="check()">
             <span *ngIf="checkedOrNo">Done</span>`
})
export class CheckboxComponent {
  checkedOrNo = false;

  check() {
    this.checkedOrNo = !this.checkedOrNo;
  }
}

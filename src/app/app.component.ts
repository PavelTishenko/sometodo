import { Component } from '@angular/core';

import {CheckboxComponent} from './checkbox.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apptodo';
  text: object[] = [];
  valInput: string;
  dat = new Date();
  day = this.dat.getDay();
  month = this.dat.getMonth();
  year = this.dat.getFullYear();
  count = 0;

  addTxt(event) {
    this.valInput = event.target.value;
  }
  addToList(event) {
    event.preventDefault();
    this.text.push({next: this.valInput, dt: `${this.day}.${this.month}.${this.year}`, count: `${this.count}`});
    this.count = ++this.count;
  }
  some(event) {
    if (this.text.length) {
      const li = document.getElementById(`${event.target.id}`);
      li.classList.add('noViability');
    }
  }
}

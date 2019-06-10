import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CheckboxComponent} from './checkbox.component';
import {log} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apptodo';
  text: object[] = [];
  valInput: string = null;
  count = 0;
  addToList() {
    const today =  Date.now();
    this.text.push({next: this.valInput, dt: today, count: `${this.count}`});
    this.count = ++this.count;
    this.valInput = ' ';
  }
  remove(tex) {
    if (this.text.length ) {
      const ind = this.text.indexOf(tex);
      this.text.splice(ind, 1);
    }
  }
}

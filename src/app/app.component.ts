import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment-start';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];


  onGameEvent(eventNumber: number) {
    if (eventNumber % 2 === 0) {
      this.evenNumbers.push(eventNumber);
    } else {
      this.oddNumbers.push(eventNumber);
    }
  }
}

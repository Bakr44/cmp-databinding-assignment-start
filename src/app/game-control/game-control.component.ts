import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();
  interval: number = 0;
  lastNumber = 0;
  constructor() { }
  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameEvent.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}

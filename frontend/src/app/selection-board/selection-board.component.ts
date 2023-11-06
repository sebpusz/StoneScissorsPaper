import { Component, EventEmitter, Output } from '@angular/core';
import { GameClass } from 'src/domain/gameClass';

@Component({
  selector: 'app-selection-board',
  templateUrl: './selection-board.component.html',
  styleUrls: ['./selection-board.component.css']
})
export class SelectionBoardComponent {
  GameClass = GameClass;
  @Output() playersActionEvent = new EventEmitter<GameClass>();

  onPlayersActionsEvent(value: GameClass) {
    this.playersActionEvent.emit(value);
  }
}

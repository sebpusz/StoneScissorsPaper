import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameClass } from 'src/domain/gameClass';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  @Input() gameClass: GameClass | undefined;
  @Input() actionText: string = "";
  @Input() svgIcon: string = "";

  @Output() playersActionEvent = new EventEmitter<GameClass>();

  onActionButtonClick(gameClass: GameClass | undefined) {
    if (gameClass) {
      this.playersActionEvent.emit(gameClass);
    }
  }
}

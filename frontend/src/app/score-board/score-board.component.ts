import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameClass } from 'src/domain/gameClass';
import { GameResult } from 'src/domain/gameResult';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css'],
})
export class ScoreBoardComponent{
  GameClass = GameClass;
  GameResult = GameResult;

  @Output() restartEvent = new EventEmitter<string>();

  @Input() playerWins: number | undefined;
  @Input() botWins: number | undefined;
  @Input() playerSelected: GameClass | undefined;
  @Input() botSelected: GameClass | undefined;
  @Input() gameResult: GameResult | undefined;

  onRestartClick() {
    this.restartEvent.emit();
  }

  convertResultToMessage(gameResult: GameResult | undefined): string {
    let resultText;
    if (gameResult == GameResult.PLAYERS_WIN) {
      resultText = "You win"
    } else if (gameResult == GameResult.BOT_WIN) {
      resultText = "You loose"
    } else if (gameResult == GameResult.DRAW) {
      resultText = "Draw"
    } else {
      resultText = ""
    }
    return resultText
  }
}

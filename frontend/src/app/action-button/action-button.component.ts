import { Component } from '@angular/core';
import { Gameservice } from 'src/service/gameService';
import { GameClass } from 'src/domain/gameClass';
import { GameResult } from 'src/domain/gameResult';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  constructor(private gameService: Gameservice) { }
  GameClass = GameClass;
  playerWins = 0;
  botWins = 0;
  playerSelected: GameClass | undefined;
  botSelected: GameClass | undefined;

  async onButtonClick(userInput: GameClass) {
    console.log(`${GameClass[userInput]} - Button clicked!`);
    let result = await this.gameService.postUserInput(userInput);
    this.botSelected = result.botChoice
    this.playerSelected = result.playersChoice
    if (result.result == GameResult.PLAYERS_WIN) {
      this.playerWins++;
    } else if (result.result == GameResult.BOT_WIN) {
      this.botWins++;
    }
  }
}

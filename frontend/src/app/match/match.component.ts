import { Component, ViewChild } from '@angular/core';
import { Gameservice } from './gameService';
import { GameClass } from 'src/domain/gameClass';
import { GameResult } from 'src/domain/gameResult';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  constructor(private gameService: Gameservice) { }
  playerSelected: GameClass | undefined;
  botSelected: GameClass | undefined;
  gameResult: GameResult | undefined;
  playerWins: number = 0;
  botWins: number = 0;

  async onPlayersChoice(userInput: GameClass) {
    let result = await this.gameService.postUserInput(userInput);
    this.botSelected = result.botChoice
    this.playerSelected = result.playersChoice
    this.gameResult = result.result
    if (result.result == GameResult.PLAYERS_WIN) {
      this.playerWins++;
    } else if (result.result == GameResult.BOT_WIN) {
      this.botWins++;
    }
  }

  onRestartEvent() {
    this.gameResult = undefined
    this.botWins = 0
    this.playerWins = 0
    this.botSelected = undefined
    this.playerSelected = undefined
  }
}

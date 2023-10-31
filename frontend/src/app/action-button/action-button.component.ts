import { Component } from '@angular/core';
import { Gameservice } from 'src/service/gameService';
import { GameClass } from 'src/domain/gameClass';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  constructor(private gameService: Gameservice) { }
  GameClass = GameClass;

  onButtonClick(userInput: GameClass) {
    console.log(`${GameClass[userInput]} - Button clicked!`);
    let result = this.gameService.postUserInput(userInput)
  }
}

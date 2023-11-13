import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from "@angular/platform-browser";

import { ScoreBoardComponent } from './score-board.component';
import { GameResult } from 'src/domain/gameResult';

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreBoardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide game board with actions of player and bot and game stats', () => {
    const scoreBoard = document.querySelector('div[class="score-board"]')
    const botChoice = document.querySelector('div[id="bot-label"]');
    const playersChoice = document.querySelector('div[id="player-label"]');
    const gameStat = document.querySelector('span[id="gameStat"]');
    expect(scoreBoard).toBeTruthy();
    expect(botChoice).toBeTruthy();
    expect(playersChoice).toBeTruthy();
    expect(gameStat).toBeTruthy();
  })

  it('Restart should emmit playersAction-event', async () => {
    spyOn(component.restartEvent, 'emit');
    component.onRestartClick();
    expect(component.restartEvent.emit).toHaveBeenCalledTimes(1);
  });

  it('should style loose when game result bot win', () => {
    component.gameResult = GameResult.BOT_WIN;
    fixture.detectChanges();

    expect(document.querySelectorAll('.loose')).toHaveSize(1);
    expect(document.querySelectorAll('.win')).toHaveSize(0);
    expect(document.querySelectorAll('.draw')).toHaveSize(0);
  });
  it('should style loose when game result players win', () => {
    component.gameResult = GameResult.PLAYERS_WIN;
    fixture.detectChanges();

    expect(document.querySelectorAll('.loose')).toHaveSize(0);
    expect(document.querySelectorAll('.win')).toHaveSize(1);
    expect(document.querySelectorAll('.draw')).toHaveSize(0);
  });
  it('should style draw when game result draw', () => {
    component.gameResult = GameResult.DRAW;
    fixture.detectChanges();

    expect(document.querySelectorAll('.loose')).toHaveSize(0);
    expect(document.querySelectorAll('.win')).toHaveSize(0);
    expect(document.querySelectorAll('.draw')).toHaveSize(1);
  });
});

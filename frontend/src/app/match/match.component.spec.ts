import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Gameservice } from './gameService';

import { MatchComponent } from './match.component';
import { ScoreBoardComponent } from '../score-board/score-board.component';
import { SelectionBoardComponent } from '../selection-board/selection-board.component';
import { GameResult } from 'src/domain/gameResult';
import { GameClass } from 'src/domain/gameClass';

describe('MatchComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchComponent, ScoreBoardComponent, SelectionBoardComponent],
      imports: [HttpClientTestingModule],
      providers: [Gameservice],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(MatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide score board', () => {
    const scoreBoard = document.querySelector('div[class="score-board"]')
    expect(scoreBoard).toBeTruthy();
  })

  it('should provide selection board', () => {
    const buttonBoard = document.querySelector('div[class="selection-board"]')
    expect(buttonBoard).toBeTruthy();
  })

  it('should reset game stats on restart', () => {
    component.gameResult = GameResult.PLAYERS_WIN;
    component.botSelected = GameClass.PAPER;
    component.playerSelected = GameClass.SCISSORS;
    component.playerWins = 3;
    component.botWins = 1;
    component.onRestartEvent();
    
    expect(component.gameResult).toBeUndefined();
    expect(component.botSelected).toBeUndefined();
    expect(component.playerSelected).toBeUndefined();
    expect(component.botWins).toBe(0);
    expect(component.playerWins).toBe(0);
  })

  it('should increase players wins on game result players win', () => {
    component.botWins = 1;
    component.playerWins = 3;
    component.updateGameResult(GameResult.PLAYERS_WIN);

    expect(component.botWins).toBe(1);
    expect(component.playerWins).toBe(4);
  })

  it('should increase bot wins on game result bot win', () => {
    component.botWins = 1;
    component.playerWins = 3;
    component.updateGameResult(GameResult.BOT_WIN);
    
    expect(component.botWins).toBe(2);
    expect(component.playerWins).toBe(3);
  })

  it('should not update wins on game result draw', () => {
    component.botWins = 1;
    component.playerWins = 3;
    component.updateGameResult(GameResult.DRAW);
    
    expect(component.botWins).toBe(1);
    expect(component.playerWins).toBe(3);
  })
});

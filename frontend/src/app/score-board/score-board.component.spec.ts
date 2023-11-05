import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScoreBoardComponent } from './score-board.component';

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
});

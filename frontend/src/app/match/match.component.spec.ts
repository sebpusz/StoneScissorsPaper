import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Gameservice } from 'src/service/gameService';

import { MatchComponent } from './match.component';

describe('MatchComponent', () => {
  let component: MatchComponent;
  let fixture: ComponentFixture<MatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchComponent],
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

  it('should provide button board with action buttons', () => {
    const buttonBoard = document.querySelector('div[class="button-board"]')
    const stone = document.querySelector('mat-icon[svgIcon="stone"]');
    const scissors = document.querySelector('mat-icon[svgIcon="scissors"]');
    const paper = document.querySelector('mat-icon[svgIcon="paper"]');
    expect(buttonBoard).toBeTruthy();
    expect(stone).toBeTruthy();
    expect(scissors).toBeTruthy();
    expect(paper).toBeTruthy();
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Gameservice } from './gameService';

import { MatchComponent } from './match.component';
import { ScoreBoardComponent } from '../score-board/score-board.component';
import { SelectionBoardComponent } from '../selection-board/selection-board.component';

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
});

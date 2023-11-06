import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GameClass } from 'src/domain/gameClass';

import { SelectionBoardComponent } from './selection-board.component';
import { ActionButtonComponent } from '../action-button/action-button.component';

describe('SelectionBoardComponent', () => {
  let component: SelectionBoardComponent;
  let fixture: ComponentFixture<SelectionBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionBoardComponent, ActionButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SelectionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide selection board', () => {
    const buttonBoard = document.querySelector('div[class="selection-board"]')
    expect(buttonBoard).toBeTruthy();
  })

  it('OnPlayersAction should emmit playersAction-event', async () => {
    spyOn(component.playersActionEvent, 'emit');
    component.onPlayersActionsEvent(GameClass.PAPER);
    expect(component.playersActionEvent.emit).toHaveBeenCalledTimes(1);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { ActionButtonComponent } from './action-button.component';
import { GameClass } from 'src/domain/gameClass';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionButtonComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit playersAction-event on click', async () => {
    spyOn(component.playersActionEvent, 'emit');
    component.onActionButtonClick(GameClass.PAPER);
    expect(component.playersActionEvent.emit).toHaveBeenCalledTimes(1);
  });
});

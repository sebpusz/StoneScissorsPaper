import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectionBoardComponent } from './selection-board.component';

describe('SelectionBoardComponent', () => {
  let component: SelectionBoardComponent;
  let fixture: ComponentFixture<SelectionBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionBoardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    fixture = TestBed.createComponent(SelectionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide selection board with 3 types of buttons', () => {
    const buttonBoard = document.querySelector('div[class="selection-board"]')
    const stone = document.querySelector('mat-icon[svgIcon="stone"]');
    const scissors = document.querySelector('mat-icon[svgIcon="scissors"]');
    const paper = document.querySelector('mat-icon[svgIcon="paper"]');
    expect(buttonBoard).toBeTruthy();
    expect(stone).toBeTruthy();
    expect(scissors).toBeTruthy();
    expect(paper).toBeTruthy();
  })
});

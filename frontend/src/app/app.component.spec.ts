import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { Gameservice } from './match/gameService';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from "@angular/platform-browser";


describe('AppComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      MatchComponent
    ],
    imports: [HttpClientTestingModule],
    providers: [Gameservice],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'StoneSissorsPaper'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('StoneSissorsPaper');
  });
  it(`should show icon - image`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const imageElement = fixture.debugElement.query(By.css('img'));
    expect(imageElement).toBeTruthy;
    expect(imageElement.attributes["src"]).toBe("assets/img/logo.png");
  });

  it(`should render match component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const matchComponent = fixture.debugElement.query(By.css('app-match'));
    expect(matchComponent).toBeTruthy;
  });
});

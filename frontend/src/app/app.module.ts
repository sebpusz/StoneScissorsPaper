import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { SelectionBoardComponent } from './selection-board/selection-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    ScoreBoardComponent,
    SelectionBoardComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

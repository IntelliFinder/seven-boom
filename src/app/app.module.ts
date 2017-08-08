import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';

const appRoute: Routes = [
  {path: 'game/:num', component: GameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoute
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

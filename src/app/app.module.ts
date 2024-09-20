import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HighscorePageComponent } from './components/highscore-page/highscore-page.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { KoznaznaPageComponent } from './components/koznazna-page/koznazna-page.component';
import { AsocijacijePageComponent } from './components/asocijacije-page/asocijacije-page.component';
import { HighscoreComponent } from './components/highscore/highscore.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HighscorePageComponent,
    GamesPageComponent,
    KoznaznaPageComponent,
    AsocijacijePageComponent,
    HighscoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

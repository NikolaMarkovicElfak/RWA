import { NgModule, isDevMode } from '@angular/core';
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
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionHolderComponent } from './components/question-holder/question-holder.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { QuizEffects } from './store/quiz.effects';
import { questionsReducer } from './store/quiz.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HighscorePageComponent,
    GamesPageComponent,
    KoznaznaPageComponent,
    AsocijacijePageComponent,
    HighscoreComponent,
    QuestionComponent,
    AnswerComponent,
    QuestionHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({question: questionsReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    EffectsModule.forRoot([QuizEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

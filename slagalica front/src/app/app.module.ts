import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { QuizEffects } from './store/quiz-store/quiz.effects';
import { questionsReducer } from './store/quiz-store/quiz.reducer';
import { TermComponent } from './components/term/term.component';
import { SolutionComponent } from './components/solution/solution.component';
import { AsocijacijeHolderComponent } from './components/asocijacije-holder/asocijacije-holder.component';
import { asocijacijeReducer } from './store/asocijacije-store/asocijacije.reducer';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authReducer } from './store/auth-store/auth.reducer';
import { AuthEffects } from './store/auth-store/auth.effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HighscoreListComponent } from './components/highscore-list/highscore-list.component';
import { HighscoreItemComponent } from './components/highscore-item/highscore-item.component';
import { AsocijacijeEffects } from './store/asocijacije-store/asocijacije.effects';
import { TimerEffects } from './store/timer-store/timer.effects';
import { timerReducer } from './store/timer-store/timer.reducer';
//import { asocijacijeReducer } from './store/asocijacije-store/asocijacije.reducer';

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
    QuestionHolderComponent,
    TermComponent,
    SolutionComponent,
    AsocijacijeHolderComponent,
    LoginComponent,
    RegisterComponent,
    HighscoreListComponent,
    HighscoreItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    StoreModule.forRoot({question: questionsReducer, asocijacije: asocijacijeReducer, auth: authReducer, timer: timerReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    EffectsModule.forRoot([QuizEffects, AuthEffects, AsocijacijeEffects, TimerEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input, OnInit } from '@angular/core';
import { Answer, Question } from '../../models/question';
import { Observable, of, Subject, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadQuestions, nextQuestion, selectAnswer, skipQuestion } from '../../store/quiz-store/quiz.actions';
import { selectCurrentQuestion, selectScore, selectSelectedAnswer, selectShowResult, selectToggle } from '../../store/quiz-store/quiz.selector';
import { startTimer, stopTimer, timerExpired } from '../../store/timer-store/timer.actions';
import { selectTimeLeft } from '../../store/timer-store/timer.selector';

@Component({
  selector: 'app-question-holder',
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent implements OnInit {
  currentQuestion$: Observable<Question | null | undefined> = of();
  score$: Observable<number> = of();
  showResult$: Observable<boolean | null> = of();
  selectedAnswer$ : Observable<Answer | null> = of();
  toggle$ : Observable<Boolean> = of();
  timeLeft$: Observable<number> = of();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadQuestions());
    this.currentQuestion$ = this.store.select(selectCurrentQuestion);
    this.score$ = this.store.select(selectScore);
    this.showResult$ = this.store.select(selectShowResult);
    this.selectedAnswer$ = this.store.select(selectSelectedAnswer);
    this.toggle$ = this.store.select(selectToggle); 
    this.score$.subscribe(score => console.log('Score:', score));
    this.timeLeft$ = this.store.select(selectTimeLeft);
    this.store.dispatch(startTimer());

    this.timeLeft$.subscribe(timeLeft => {
      if (timeLeft <= 0) {
        this.onSkip();
      }
    })
  }

  onAnswerSelected(answer: Answer): void {
    this.store.dispatch(stopTimer());
    this.toggle$.pipe(take(1)).subscribe(toggle => { // Koristimo take(1) da ograničimo na jednu pretplatu
      if (toggle) {
        this.store.dispatch(selectAnswer({ answer }));

        // Pomeramo na sledeće pitanje sa vremenskim kašnjenjem
        setTimeout(() => {
          this.store.dispatch(nextQuestion());
          this.store.dispatch(stopTimer());
          this.store.dispatch(startTimer());
        }, 1500);
      }
    });
  }

  onSkip() {
    this.store.dispatch(timerExpired());
    this.store.dispatch(stopTimer());
    this.toggle$.pipe(take(1)).subscribe(toggle => { // Koristimo take(1) da ograničimo na jednu pretplatu
      if (toggle) {
        this.store.dispatch(skipQuestion());

        // Pomeramo na sledeće pitanje sa vremenskim kašnjenjem
        setTimeout(() => {
          this.store.dispatch(nextQuestion());
          this.store.dispatch(startTimer());
        }, 1500);
      }
    });
  }
}
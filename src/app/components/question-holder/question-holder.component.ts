import { Component, Input, OnInit } from '@angular/core';
import { Answer, Question } from '../../models/question';
import { Observable, of, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadQuestions, nextQuestion, selectAnswer } from '../../store/quiz-store/quiz.actions';
import { selectCurrentQuestion, selectScore, selectSelectedAnswer, selectShowResult, selectToggle } from '../../store/quiz-store/quiz.selector';

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
  }

  onAnswerSelected(answer: Answer): void {
    this.toggle$.pipe(take(1)).subscribe(toggle => { // Koristimo take(1) da ograničimo na jednu pretplatu
      if (toggle) {
        this.store.dispatch(selectAnswer({ answer }));

        // Pomeramo na sledeće pitanje sa vremenskim kašnjenjem
        setTimeout(() => {
          this.store.dispatch(nextQuestion());
        }, 1500);
      }
    });
  }
}
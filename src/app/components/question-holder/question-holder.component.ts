import { Component, Input, OnInit } from '@angular/core';
import { Answer, Question } from '../../models/question';
import { QuizService } from '../../services/quiz-service/quiz.service';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { loadQuestions } from '../../store/quiz-store/quiz.actions';
import { selectQuestions } from '../../store/quiz-store/quiz.selector';

@Component({
  selector: 'app-question-holder',
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent implements OnInit {
  questions: Question[] = [];
  questions$: Observable<Question[]> = of([]);
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | null = null; // Track the selected answer
  currentQuestion: Question | null = null;
  showResult: boolean = false;
  score: number = 0;
  toggle: boolean = true;

  constructor(private store : Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadQuestions())
    this.questions$ = this.store.select(selectQuestions);
    this.loadQuestions2();
  }

  loadQuestions2(): void {
    this.questions$.subscribe((questions) => {
      this.questions = questions;
      this.selectRandomQuestion();
    });
  }

  selectRandomQuestion(): void {
    if (this.questions.length > 0) {
      this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = null;
      this.toggle = true;
    }
  }

  onAnswerSelected(answer: Answer): void {
    if(!this.toggle) return;
    this.selectedAnswer = answer; // Track the selected answer
    console.log(answer.isCorrect ? 'Correct answer selected!' : 'Incorrect answer selected.');
    this.score += (this.selectedAnswer.isCorrect)? 10: -5;
    // Move to the next question after a 1.5-second delay
    setTimeout(() => {
      this.questions.splice(this.currentQuestionIndex, 1);
      if (this.questions.length > 0) {
        this.selectRandomQuestion();
      } else {
        this.currentQuestion = null;
        this.showResult = true;
      }
    }, 1500); // 1.5 seconds delay
    this.toggle = false;
  }
}
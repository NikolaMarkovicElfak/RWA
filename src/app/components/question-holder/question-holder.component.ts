import { Component, Input } from '@angular/core';
import { Answer, Question } from '../../models/question';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question-holder',
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css'
})
export class QuestionHolderComponent {
  @Input() question:Question = {text: '', answers: []};

  selectedAnswer : Answer | null = null;

  onAnswerSelected (answer: Answer) {
    if(this.selectedAnswer === null)
    {
      this.selectedAnswer = answer;
      console.log(this.selectedAnswer.isCorrect)
    }
    else return;
  }
}

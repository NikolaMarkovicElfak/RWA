import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../models/question';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css'
})
export class AnswerComponent {
  @Input() answer: Answer | null = null;
  @Output() answerClicked: EventEmitter<Answer> = new EventEmitter<Answer>();

  onClick() {
    if(this.answer)
      return this.answerClicked.emit(this.answer);
  }
}

import { Component, Input } from '@angular/core';
import { Answer, Question } from '../../models/question';

@Component({
  selector: 'app-koznazna-page',
  templateUrl: './koznazna-page.component.html',
  styleUrl: './koznazna-page.component.css'
})
export class KoznaznaPageComponent {
  quizItem : Question = {
    text: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false }
    ]
  };

}

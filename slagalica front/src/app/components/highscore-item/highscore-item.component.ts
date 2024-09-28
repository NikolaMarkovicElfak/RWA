import { Component, Input } from '@angular/core';
import { Highscore } from '../../models/highscores';

@Component({
  selector: 'app-highscore-item',
  templateUrl: './highscore-item.component.html',
  styleUrl: './highscore-item.component.css'
})
export class HighscoreItemComponent {
  @Input() item: Highscore | null = null;
}

import { Component } from '@angular/core';
import { Highscore } from '../../models/highscores';

@Component({
  selector: 'app-highscore-list',
  templateUrl: './highscore-list.component.html',
  styleUrl: './highscore-list.component.css'
})
export class HighscoreListComponent {
  highscoreItems: Highscore[] = [
    {id:0, username: 'Player1', score: 250, gameType: 'koznazna'},
    {id:0, username: 'Player2', score: 200, gameType: 'koznazna'},
    {id:0, username: 'Player3', score: 150, gameType: 'koznazna'},
    {id:0, username: 'Player4', score: 100, gameType: 'koznazna'},
  ];
}

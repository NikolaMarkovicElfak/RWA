import { Component, Output } from '@angular/core';
import { AsocijacijaGame } from '../../models/asocijacije';

@Component({
  selector: 'app-asocijacije-page',
  templateUrl: './asocijacije-page.component.html',
  styleUrl: './asocijacije-page.component.css'
})
export class AsocijacijePageComponent {
  @Output() mockGameData: AsocijacijaGame = {
    id: 1,
    columns: [
      {
        id: 'A',
        terms: [
          { text: 'Term A1', isRevealed: false },
          { text: 'Term A2', isRevealed: false },
          { text: 'Term A3', isRevealed: false },
          { text: 'Term A4', isRevealed: false },
        ],
        solution: 'Solution A',
        isRevealed: false,
        enableInput: false,
        revealAllTerms: false,
      },
      {
        id: 'B',
        terms: [
          { text: 'Term B1', isRevealed: false },
          { text: 'Term B2', isRevealed: false },
          { text: 'Term B3', isRevealed: false },
          { text: 'Term B4', isRevealed: false }
        ],
        solution: 'Solution B',
        isRevealed: false,
        enableInput: false,
        revealAllTerms: false,
      },
      {
        id: 'C',
        terms: [
          { text: 'Term C1', isRevealed: false },
          { text: 'Term C2', isRevealed: false },
          { text: 'Term C3', isRevealed: false },
          { text: 'Term C4', isRevealed: false }
        ],
        solution: 'Solution C',
        isRevealed: false,
        enableInput: false,
        revealAllTerms: false,
      },
      {
        id: 'D',
        terms: [
          { text: 'Term D1', isRevealed: false },
          { text: 'Term D2', isRevealed: false },
          { text: 'Term D3', isRevealed: false },
          { text: 'Term D4', isRevealed: false }
        ],
        solution: 'Solution D',
        isRevealed: false,
        enableInput: false,
        revealAllTerms: false,
      }
    ],
    finalSolution: 'Final Solution',
    enableInput: false
  };
}

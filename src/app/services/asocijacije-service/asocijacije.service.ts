import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsocijacijaGame } from '../../models/asocijacije';

@Injectable({
  providedIn: 'root'
})
export class AsocijacijeService {
  getGameData(): Observable<AsocijacijaGame> {
    const mockGameData: AsocijacijaGame = {
      id: 1,
      columns: [
        {
          id: 'A',
          terms: [
            { text: 'Term A1', isRevealed: false },
            { text: 'Term A2', isRevealed: false },
            { text: 'Term A3', isRevealed: false },
            { text: 'Term A4', isRevealed: false }
          ],
          solution: 'Solution A',
          isRevealed: false,
          enableInput: false,
          revealAllTerms: false,
          userInput: '',
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
          userInput: ''
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
          userInput: ''
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
          userInput: ''
        }
      ],
      finalSolution: 'Final Solution',
      enableInput: false
    };
    return of(mockGameData);
  }
}
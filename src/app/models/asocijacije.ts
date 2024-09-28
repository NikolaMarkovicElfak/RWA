export interface AsocijacijaTerm {
    text: string;    // The term to display
    isRevealed: boolean; // Indicates if the term is revealed
  }
  
  export interface AsocijacijaColumn {
    id: string;      // 'A', 'B', 'C', 'D'
    terms: AsocijacijaTerm[]; // List of terms
    solution: string; // Solution for this column
    isRevealed: boolean; // Indicates if the column solution is revealed
    userInput: string;
    revealAllTerms: boolean;
    enableInput: boolean;
  }
  
  export interface AsocijacijaGame {
    id: number;
    columns: AsocijacijaColumn[]; // List of columns (A, B, C, D)
    finalSolution: string; // Final solution for the whole game
    enableInput: boolean;
    isRevealed: boolean;
  }
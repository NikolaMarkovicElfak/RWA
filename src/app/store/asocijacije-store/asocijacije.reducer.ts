import { createReducer, on } from "@ngrx/store";
import { AsocijacijaGame } from "../../models/asocijacije";
import * as AsocijacijeActions from "./asocijacije.actions"
import { booleanAttribute } from "@angular/core";


export interface AsocijacijeState{
    asocijacija: AsocijacijaGame,
    enableInput: boolean,
    enableReveal: boolean,
    revealAll: boolean
    userInput: {
        columnId: string | null,
        input: string
    }
}

export const initialState: AsocijacijeState = {
    asocijacija: {
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
      },
      enableInput: false,
      enableReveal: false,
      revealAll: false,
      userInput:{
        columnId: '',
        input: '',
      }
};

export const asocijacijeReducer = createReducer(
    initialState,
    on(AsocijacijeActions.revealTerm, (state, { columnId, termIndex }) => {
        const updatedColumns = state.asocijacija.columns.map((column) => {
          if (column.id === columnId) {
            const updatedTerms = column.terms.map((term, index) =>
              index === termIndex ? { ...term, isRevealed: true } : term
            );
            return { ...column, terms: updatedTerms, enableInput: true};
          }
          return column;
        });
      
        return {
          ...state,
          enableInput: true,
          asocijacija: {
            ...state.asocijacija,
            columns: updatedColumns
          },
        };
      }),
      on(AsocijacijeActions.updateUserInput, (state, { columnId, userInput }) => ({
        ...state,
        userInput: {
          columnId,
          input: userInput
        }
      })),
    
      // Provera unosa korisnika na osnovu tačnog rešenja
      on(AsocijacijeActions.checkUserInput, (state) => {
        const { columnId, input } = state.userInput;
        if (columnId) {
          const updatedColumns = state.asocijacija.columns.map((column) => {
            if (column.id === columnId && column.solution.toLowerCase() === input.toLowerCase()) {
                const isMatching = true;
                const revealedTerms = column.terms.map(term => ({
                    ...term,
                    isRevealed: true
                  }));
              return {
                ...column,
                isRevealed: true,
                enableInput: false,
                terms: revealedTerms
              };
            }
            return column;
          });
          return {
            ...state,
            asocijacija: {
              ...state.asocijacija,
              columns: updatedColumns
            },
            userInput: {
              columnId: null,
              input: ''
            }
          };
        }
        return state;
      })
);
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
    asocijacija: {} as AsocijacijaGame,
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
    on(AsocijacijeActions.loadAsocijacijuSuccess, (state, { asocijacija }) => ({
        ...state,
        asocijacija,
      })),
    
    on(AsocijacijeActions.loadAsocijacijuFailure, (state, { error }) => ({
    ...state,
    })),

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
            if(columnId == 'asocijacija'){
                const isCorrect = state.asocijacija.finalSolution.toLowerCase() == input.toLowerCase();
                const updatedColumns = state.asocijacija.columns.map((column) => {
                    const revealedTerms = column.terms.map(term => ({
                            ...term,
                            isRevealed: true
                          }));
                      return {
                        ...column,
                        isRevealed: true,
                        enableInput: false,
                        terms: revealedTerms
                    }
                  });
                return {
                    ...state,
                    asocijacija:{
                        ...state.asocijacija,
                        columns: isCorrect? updatedColumns : state.asocijacija.columns,
                        isRevealed: isCorrect
                    },
                    revealAll : isCorrect
                }
            }
          const updatedColumns = state.asocijacija.columns.map((column) => {
            if (column.id === columnId && column.solution.toLowerCase() === input.toLowerCase()) {
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
          const isMatching = updatedColumns.some(column => column.id === columnId && column.isRevealed)
          const isFinalMatching = state.asocijacija.enableInput || isMatching
          return {
            ...state,
            asocijacija: {
              ...state.asocijacija,
              columns: updatedColumns,
              enableInput: isFinalMatching
            },
            userInput: {
              columnId: null,
              input: '',
            },
            enableInput: isMatching
          };
        }
        return state;
      })
);
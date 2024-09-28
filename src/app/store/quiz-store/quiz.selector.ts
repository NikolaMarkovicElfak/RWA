import { createFeatureSelector, createSelector } from "@ngrx/store";
import { QuestionState } from "./quiz.reducer";


export const selectQuestionState = createFeatureSelector<QuestionState>('question');

export const selectQuestions = createSelector(
    selectQuestionState,
    (state) => state.ids
    .map(ids => state.entities[ids])
    .filter(state => !!state)
)


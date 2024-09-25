import { createReducer, on } from "@ngrx/store";
import { Question } from "../../models/question";
import {createEntityAdapter, EntityState} from "@ngrx/entity"
import * as Actions from "./quiz.actions"


export interface QuestionState extends EntityState<Question> {
    displayedQuestion : number;
}

const adapter = createEntityAdapter<Question>();

export const initialState : QuestionState = adapter.getInitialState({
    displayedQuestion: 0
});

export const questionsReducer = createReducer(
    initialState,
    on(Actions.loadQuestionsSuccess, (state,{questions}) => 
        adapter.setAll(questions, state)
    )
)
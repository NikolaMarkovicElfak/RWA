import { createAction, props } from "@ngrx/store";
import { Question } from "../../models/question";

export const loadQuestions = createAction('[Quiz] Load Questions');
export const loadQuestionsSuccess = createAction('[Quiz] Load Questions Success', props<{ questions: Question[] }>());
export const loadQuestionsFailure = createAction('[Quiz] Load Questions Failure', props<{ error: any }>());
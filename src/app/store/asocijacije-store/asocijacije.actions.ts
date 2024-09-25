import { createAction, props } from "@ngrx/store";
import { AsocijacijaColumn, AsocijacijaGame } from "../../models/asocijacije";

export const loadAsocijaciju = createAction('[Asocijacjije] Load Asocijaciju');
export const loadAsocijacijuSuccess = createAction('[Asocijacije] Load Asicijaciju Success', props<{asocijacije: AsocijacijaGame, enableReveal: boolean}>());
export const loadAsocijacijuFailure = createAction('[Asocijacije] Load Asocijaciju Failure');

export const revealTerm = createAction('[Asocijacije] Reveal Term', props<{columnId: string, termIndex: number}>());
export const updateUserInput = createAction('[Asocijacije] Update User Input',props<{ columnId: string; userInput: string }>());
  
  // Akcija za proveru unosa korisnika
export const checkUserInput = createAction('[Asocijacije] Check User Input');
//export const checkAnswer = createAction('[Asocijacije] Check Answer', props<{}>())

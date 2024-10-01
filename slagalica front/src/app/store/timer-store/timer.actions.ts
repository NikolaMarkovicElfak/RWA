// timer.actions.ts
import { createAction, props } from '@ngrx/store';

export const startTimer = createAction('[Timer] Start Timer');
export const tick = createAction('[Timer] Tick');
export const stopTimer = createAction('[Timer] Stop Timer');
export const timerExpired = createAction('[Timer] Timer Expired');

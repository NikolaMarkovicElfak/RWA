import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TimerState } from './timer.reducer';

// Selektor za izdvajanje celog stanja tajmera
export const selectTimerState = createFeatureSelector<TimerState>('timer');

// Selektor za izdvajanje vremena koje je preostalo
export const selectTimeLeft = createSelector(
  selectTimerState,
  (state: TimerState) => state.timeLeft
);

// Selektor za izdvajanje statusa da li tajmer radi
export const selectIsRunning = createSelector(
  selectTimerState,
  (state: TimerState) => state.isRunning
);

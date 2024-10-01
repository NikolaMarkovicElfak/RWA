import { createReducer, on } from '@ngrx/store';
import * as TimerActions from './timer.actions';

export interface TimerState {
  timeLeft: number;
  isRunning: boolean;
}

export const initialState: TimerState = {
  timeLeft: 10,
  isRunning: false,
};

export const timerReducer = createReducer(
  initialState,
  on(TimerActions.startTimer, (state) => ({
    ...state,
    isRunning: true,
    timeLeft: 10, // Resetujte na 10 sekundi pri pokretanju
  })),
  on(TimerActions.tick, (state) => ({
    ...state,
    timeLeft: state.timeLeft - 1,
  })),
  on(TimerActions.stopTimer, (state) => ({
    ...state,
    isRunning: false,
  })),
  on(TimerActions.timerExpired, (state) => ({
    ...state,
    isRunning: false,
    timeLeft: 0,
  }))
);

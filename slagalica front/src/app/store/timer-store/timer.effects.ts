import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, interval } from 'rxjs';
import { switchMap, takeUntil, map } from 'rxjs/operators';
import * as TimerActions from './timer.actions';

@Injectable()
export class TimerEffects {
    actions$ = inject(Actions)
  startTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimerActions.startTimer),
      switchMap(() =>
        interval(1000).pipe(
          map(() => TimerActions.tick()),
          takeUntil(this.actions$.pipe(ofType(TimerActions.stopTimer, TimerActions.timerExpired)))
        )
      )
    )
  );

  timerExpired$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TimerActions.tick),
      switchMap((_, index) => (index >= 9 ? of(TimerActions.timerExpired()) : of()))
    )
  );

}

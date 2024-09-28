import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { of, catchError, map, mergeMap, tap} from 'rxjs';

@Injectable()
export class AuthEffects {
    private actions$: Actions = inject(Actions);
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(action =>
        this.authService.login(action.email, action.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error: 'Invalid email or password' })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      mergeMap(action =>
        this.authService.register(action.email, action.password).pipe(
          map(user => AuthActions.registerSuccess({ user })),
          catchError(error => of(AuthActions.registerFailure({ error: 'Registration failed' })))
        )
      )
    )
  );

  redirectAfterLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
      tap(() => this.router.navigate(['/home']))
    ), { dispatch: false }
  );

  registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerSuccess, AuthActions.loginSuccess),
        tap(action => {
          sessionStorage.setItem('user', JSON.stringify(action.user)); // Store user in sessionStorage
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          sessionStorage.removeItem('user'); // Remove user from sessionStorage on logout
        })
      ),
    { dispatch: false }
  );

  constructor(private authService: AuthService, private router: Router) {}
}
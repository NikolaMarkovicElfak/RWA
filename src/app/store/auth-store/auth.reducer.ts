import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: any;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.registerSuccess, (state, { user }) => ({ ...state, user, error: null })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.logout, () => initialState)
);

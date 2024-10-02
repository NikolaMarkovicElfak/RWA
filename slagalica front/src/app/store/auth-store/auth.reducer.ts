import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  successMessage: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.register, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.registerSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    successMessage: message,
    error: null,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(AuthActions.loginSuccess, (state, { user, message }) => ({
    ...state,
    loading: false,
    user,
    error: null,
    successMessage: message
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    successMessage: null,
    error: null,
  })),
);

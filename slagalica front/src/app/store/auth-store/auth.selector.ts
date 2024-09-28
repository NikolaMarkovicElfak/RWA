import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Select the feature state
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selector to get the user
export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

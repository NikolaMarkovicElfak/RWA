import { Component } from '@angular/core';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { login } from '../../store/auth-store/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }
}

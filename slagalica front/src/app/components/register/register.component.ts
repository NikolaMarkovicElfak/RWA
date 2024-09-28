import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { register } from '../../store/auth-store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    this.store.dispatch(register({ email: this.email, password: this.password }));
  }
}

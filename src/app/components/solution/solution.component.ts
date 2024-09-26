import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AsocijacijaColumn, AsocijacijaTerm } from '../../models/asocijacije';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { revealTerm, updateUserInput } from '../../store/asocijacije-store/asocijacije.actions';
import { map, Observable, of, Subscription } from 'rxjs';
import { selectUserInput } from '../../store/asocijacije-store/asocijacije.selector';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'
})
export class SolutionComponent implements OnInit, OnDestroy{
  @Input() column: AsocijacijaColumn | null = null;
  @Input() enableInput: boolean | null = null;

  private subscription: Subscription = new Subscription();
  userSolution: string = '';

  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    // Pretplata na promene userInput iz store-a
    this.subscription = this.store.select(selectUserInput).subscribe(userInput => {
      if (userInput.columnId === this.column?.id || userInput.columnId === null) {
        this.userSolution = userInput.input;

        // Proverite da li se userSolution menja
        console.log('Ažurirana vrednost userSolution:', this.userSolution);
      }
    });
    if(this.column)
    this.userSolution = this.column.userInput
  }

  reveal(term: AsocijacijaTerm) {
    if(this.column){
      const id = this.column.terms.findIndex((oldTerm) => term === oldTerm);
      this.store.dispatch(revealTerm({columnId: this.column.id, termIndex: id}))
    }   
  }

  onSolutionInputChange(value: string) {
    const userInput = value;
    if (this.column) {
      this.store.dispatch(updateUserInput({ columnId: this.column.id, userInput: userInput }));
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userSolution = value;
    if(this.column)
    this.store.dispatch(updateUserInput({ columnId: this.column.id, userInput: value }));
  }

  isDisabled() {
    if(this.column)
      return !(this.column.enableInput && this.enableInput);
    return true;
  }
}

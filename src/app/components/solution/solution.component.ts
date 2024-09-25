import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsocijacijaColumn, AsocijacijaTerm } from '../../models/asocijacije';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { revealTerm, updateUserInput } from '../../store/asocijacije-store/asocijacije.actions';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.css'
})
export class SolutionComponent implements OnInit{
  @Input() column: AsocijacijaColumn | null = null;
  @Input() userSolution: string = '';
  @Input() enableInput: boolean | null = null;
  @Output() userSolutionChange = new EventEmitter<string>();
  @Output() input: HTMLElement | null = null;


  userInput: string = '';

  constructor(private store : Store<AppState>) { }
  ngOnInit(): void {
    if(this.column)
    this.input = document.getElementById(this.column.id) 
  }

  reveal(term: AsocijacijaTerm) {
    if(this.column){
      const id = this.column.terms.findIndex((oldTerm) => term === oldTerm);
      this.store.dispatch(revealTerm({columnId: this.column.id, termIndex: id}))
    }   
  }

  onSolutionInputChange(value: string) {
    this.userInput = value;
    if (this.column) {
      this.store.dispatch(updateUserInput({ columnId: this.column.id, userInput: this.userInput }));
    }
  }
}

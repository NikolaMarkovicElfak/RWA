import { Component, Input, OnInit, Output } from '@angular/core';
import { AsocijacijaColumn, AsocijacijaGame } from '../../models/asocijacije';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectColumns, selectEnableInput } from '../../store/asocijacije-store/asocijacije.selector';
import { map, Observable, of } from 'rxjs';
import { checkUserInput, updateUserInput } from '../../store/asocijacije-store/asocijacije.actions';

@Component({
  selector: 'app-asocijacije-holder',
  templateUrl: './asocijacije-holder.component.html',
  styleUrl: './asocijacije-holder.component.css'
})
export class AsocijacijeHolderComponent implements OnInit{
  @Input() mockGame : AsocijacijaGame | null = null;

  enableInput$: Observable<boolean> = of(false);
  columns$: Observable<AsocijacijaColumn[]> = of([]);
  userInput : string = '';
  selectedColumnId: string | null = null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.columns$ = this.store.select(selectColumns);
    this.enableInput$ = this.store.select(selectEnableInput);
  }

  onColumnInput(columnId: string, inputValue: string) {
    this.selectedColumnId = columnId;
    this.userInput = inputValue;
    this.store.dispatch(updateUserInput({ columnId, userInput: inputValue }));
  }

  submitSolution() {
    this.store.dispatch(checkUserInput());
  }
}

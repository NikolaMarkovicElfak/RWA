import { Component, Input, OnInit, Output } from '@angular/core';
import { AsocijacijaColumn, AsocijacijaGame } from '../../models/asocijacije';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectAsocijacijaGame, selectColumns, selectEnableInput, selectScore, selectUserInput } from '../../store/asocijacije-store/asocijacije.selector';
import { filter, map, Observable, of } from 'rxjs';
import { checkUserInput, loadAsocijaciju, updateUserInput } from '../../store/asocijacije-store/asocijacije.actions';

@Component({
  selector: 'app-asocijacije-holder',
  templateUrl: './asocijacije-holder.component.html',
  styleUrl: './asocijacije-holder.component.css'
})
export class AsocijacijeHolderComponent implements OnInit{

  enableInput$: Observable<boolean> = of(false);
  columns$: Observable<AsocijacijaColumn[]> = of([]);
  userFinalInput : string = '';
  asocijacija$ : Observable<AsocijacijaGame> = of();
  enableFinalInput: boolean = false;
  score$: Observable<number> = of();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadAsocijaciju());
    this.enableInput$ = this.store.select(selectEnableInput);
    this.asocijacija$ = this.store.select(selectAsocijacijaGame);
    this.score$ = this.store.select(selectScore);
    this.store.select(selectUserInput)
    .pipe(
      filter(userInput => !!userInput.columnId || userInput.columnId === null),
      map(userInput => userInput.columnId === 'asocijacija' ? userInput.input : ''),
    )
    .subscribe(userInputValue => {
      this.userFinalInput = userInputValue;
    });
  }

  submitSolution() {
    this.store.dispatch(checkUserInput());
    this.asocijacija$.subscribe((asocijacija) => this.enableFinalInput = asocijacija.enableInput)
  }

  onInputChange(value: string) {
    this.store.dispatch(updateUserInput({ columnId: 'asocijacija', userInput: value }));
  }
}

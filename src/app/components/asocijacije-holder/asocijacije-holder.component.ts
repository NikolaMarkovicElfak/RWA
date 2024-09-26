import { Component, Input, OnInit, Output } from '@angular/core';
import { AsocijacijaColumn, AsocijacijaGame } from '../../models/asocijacije';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { selectAsocijacijaGame, selectColumns, selectEnableInput } from '../../store/asocijacije-store/asocijacije.selector';
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
  userFinalInput : string = '';
  asocijacija$ : Observable<AsocijacijaGame> = of();
  enableFinalInput: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.columns$ = this.store.select(selectColumns);
    this.enableInput$ = this.store.select(selectEnableInput);
    this.asocijacija$ = this.store.select(selectAsocijacijaGame);
  }

  async submitSolution() {
    this.store.dispatch(checkUserInput());
    console.log(this.userFinalInput);
    this.asocijacija$.subscribe((asocijacija) => this.enableFinalInput = asocijacija.enableInput)
  }
}

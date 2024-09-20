import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { KoznaznaPageComponent } from './components/koznazna-page/koznazna-page.component';
import { AsocijacijePageComponent } from './components/asocijacije-page/asocijacije-page.component';
import { HighscorePageComponent } from './components/highscore-page/highscore-page.component';

const routes: Routes = [
  { path:'games', component: GamesPageComponent, pathMatch: 'full'},
  { path:'login', component: LoginPageComponent},
  { path:'register', component: RegisterPageComponent},
  { path:'games/koznazna', component: KoznaznaPageComponent},
  { path:'games/asocijacije', component: AsocijacijePageComponent},
  { path:'highscore', component: HighscorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

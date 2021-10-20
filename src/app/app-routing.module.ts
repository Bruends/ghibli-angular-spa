import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'film/:id', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

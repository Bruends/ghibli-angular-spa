import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../interfaces/Film';
import { ApiService } from '../services/api.service';
import { filmsMock } from 'films-mock';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film = filmsMock[0]; 
  id: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService    
    ) { }

  ngOnInit(): void {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    const filmId = routeParam.get('id');
    this.id = filmId;

    this.api.getFilms()      
      .subscribe(films => {
        this.film = films.filter(film => film.id === this.id)[0];
      })      

  }

}

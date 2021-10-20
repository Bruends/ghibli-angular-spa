import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/Film';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[];

  constructor(private filmsService: FilmsService) { 
    
  }

  ngOnInit(): void {
    this.fetchFilms();
  }

  fetchFilms(): void {     
    this.filmsService.filmsSubject()
     .subscribe(films => {
        this.films = films
      })  
  }

}

import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/Film';
import { filmsMock } from 'films-mock';
import {FilmsService} from '../../services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = filmsMock;

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.filmsService.filmsSubject()
      .subscribe(films => {
      this.films = films
    })
  }
}

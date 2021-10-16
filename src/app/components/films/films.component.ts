import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/Film';
import { filmsMock } from 'films-mock';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: Film[] = filmsMock;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getFilms().subscribe(films => {
      this.films = films
    })
  }

}

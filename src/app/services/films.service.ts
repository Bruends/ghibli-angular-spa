import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Film } from '../interfaces/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  films: Film[];
  subject = new Subject<any>();

  constructor(private apiService: ApiService) { 
    this.getFilms();
  }

  getFilms(): void {
    this.apiService.getFilms()
      .subscribe(apiFilms => {
        this.films = apiFilms;
        this.subject.next(this.films);
      })
  }

  filmsSubject(): Observable<any>{
    return this.subject.asObservable();
  }
  

  searchFilm(search: string): void {
    if(search) {
      const searchResult: Film[] = this.films.filter(film => {
        const titleLower = film.title.toLowerCase();
        const searchLower = search.toLowerCase();

        return titleLower.includes(searchLower);
      })
      
      this.subject.next(searchResult);
    } else {
      this.subject.next(this.films);
    }
  }

}

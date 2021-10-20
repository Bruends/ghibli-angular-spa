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
    apiService.getFilms()
      .subscribe(apiFilms => {
        this.films = apiFilms
        this.subject.next(this.films)
      })
  }

  filmsSubject(): Observable<any>{
    return this.subject.asObservable();
  }
  

  searchFilm(search: string): void {
    if(search) {
      const searchResult: Film[] = this.films.filter(film => {
        return film.title.includes(search)
      })
      
      this.subject.next(searchResult)
    } else {
      this.subject.next(this.films)
    }
  }

}

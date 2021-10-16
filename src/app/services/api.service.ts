import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

import { Film } from '../interfaces/Film'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://ghibliapi.herokuapp.com/films/';

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.url)
  }

}

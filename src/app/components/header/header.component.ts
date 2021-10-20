import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  constructor(private filmsService: FilmsService, private router: Router ) {     
    
    
  }

  ngOnInit(): void {
  }

  searchFilms(event: any): void {
    this.filmsService.searchFilm(event.target.value);
  } 

  isRoute(route: string): boolean {
    return this.router.url === route;
  }
  
}

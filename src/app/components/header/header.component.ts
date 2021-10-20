import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
  constructor(private filmsService: FilmsService) {     
    
      
  }

  ngOnInit(): void {
  }

  searchFilms(event: any): void {
    this.filmsService.searchFilm(event.target.value);
  } 

  
}

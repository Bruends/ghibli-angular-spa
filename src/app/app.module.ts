import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FilmDetailsComponent } from './film-details/film-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmItemComponent,
    HeaderComponent,
    BannerComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

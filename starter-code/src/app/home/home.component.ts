import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    id: number;
    title: string;
    poster: string;
    synopsis: string;
    genres: Array<string>;
    year: number;
    director: string;
    actors: Array<string>;
    hours: Array<string>;
    room: number;

    movies = [];

    
  constructor(private route: ActivatedRoute,
  public movieService: MovieService) { }
  ngOnInit() {

    this.movies = this.movieService.getMovies();
  }

}

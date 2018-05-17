import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // THIS SHOULD WORK BUT DOESNT
  // allTheMovies: Array<any> = [];

  movies:Array<any> = [];


  constructor(private movieService: MovieService, 
    private myRouter: Router) { }


  goToMoviePage(theIdArgument) {
    this.myRouter.navigate(['/movie', theIdArgument]);
  }


  ngOnInit() {

    this.movies = this.movieService.getMovies();
    
    // THIS SHOULD WORK BUT DOESNT
    // this.allTheMovies = this.movieService.getMovies();
  }

}

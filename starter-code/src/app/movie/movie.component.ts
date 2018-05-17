import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  theMovie:any = {
    id: 0,
    title: "",
    poster: "",
    synopsis: "",
    genres: [],
    year: 0,
    director: "",
    actors: [],
    hours: [],
    room: 0
  };

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {

    this.route.params
      .subscribe((params) => {
        const theID = (params['id'])
        this.theMovie.id = theID;
        this.theMovie = this.movieList.getMovie(this.movieId);
        });
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  theMovie:any = {};

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }


  ngOnInit() {

    // THIS WORKS!
    // this.route.params
    //   .subscribe((params) => {
    //     const theID = (params['id'])
    //     this.theMovie = this.movieService.movieArray.find((oneMovie) => {
    //       return oneMovie.id === Number(theID);
    //     });
    //   });

    // THIS ALSO WORKS!
    this.route.params
    .subscribe((theParams) => {
      const theID = Number(theParams['id']);
      this.theMovie = this.movieService.getMovie(theID);
    });

  } //closes ngOnInit

}

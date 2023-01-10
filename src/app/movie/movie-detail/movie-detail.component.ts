import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  Observable, switchMap
} from 'rxjs';
import { MoviesService } from '../../service/movies/movies.service';
import { MovieDetail } from '../../shared/model/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  movieDetils$!: Observable<MovieDetail>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MoviesService
  ) {}

  ngOnInit() {
    this.movieDetils$ = this.route.queryParams.pipe(
      map((queryParams) => queryParams['movieId']),
      switchMap((imdbId) => this.movieService.getMovieDetails(imdbId))
    );
  }
}

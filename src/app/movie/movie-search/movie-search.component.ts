import { Component } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { MoviesService } from '../../service/movies/movies.service';
import { Movie } from '../../shared/model/movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent {

  public query!: string;
  public movies$!: Observable<Array<Movie>>;
  public movies: any;
  public loading!: boolean;

  constructor(private readonly movieService: MoviesService) {}

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

  // which will show the loader
  getSearchResult(): void {
    this.loading = true;
    this.movieService
      .searchMovie(this.query)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => (this.movies = data));
  }
}

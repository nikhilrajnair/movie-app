import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Movie, MovieDetail } from '../../shared/model/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly API_KEY = `8ea39b15`;

  constructor(private http: HttpClient) {}

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http
      .get(`https://omdbapi.com/?apikey=${this.API_KEY}&s=${searchQuery}`)
      .pipe(map((response: any) => response.Search));
  }

  getMovieDetails(imdbId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`
    );
  }
}

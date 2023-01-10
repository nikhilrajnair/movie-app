import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';

import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieComponent } from './movie.component';
import { MaterialModule } from '../shared/module/material.module';
import { UtilsModule } from '../shared/utils/utils.module';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    MovieRoutingModule,
    UtilsModule,
  ],
})
export class MovieModule {}

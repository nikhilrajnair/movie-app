import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

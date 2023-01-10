import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/module/material.module';
import { UtilsModule } from './shared/utils/utils.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

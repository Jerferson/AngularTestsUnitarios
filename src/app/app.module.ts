import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';
import { ContadorComponent } from './contador/contador.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    ContadorComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

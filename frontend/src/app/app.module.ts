import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutorListComponent } from './components/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor/autor-form/autor-form.component';
import { CancionListComponent } from './components/cancion/cancion-list/cancion-list.component';
import { CancionFormComponent } from './components/cancion/cancion-form/cancion-form.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { AlbumFormComponent } from './components/album/album-form/album-form.component';
import { ReseniaComponent } from './components/resenia/resenia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutorListComponent,
    AutorFormComponent,
    CancionListComponent,
    CancionFormComponent,
    HomeComponent,
    AlbumListComponent,
    AlbumFormComponent,
    ReseniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

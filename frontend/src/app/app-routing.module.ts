import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { AutorListComponent } from './components/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor/autor-form/autor-form.component';

import { CancionListComponent } from './components/cancion/cancion-list/cancion-list.component';
import { CancionFormComponent } from './components/cancion/cancion-form/cancion-form.component';

import { AlbumListComponent } from './components/album/album-list/album-list.component';
import { AlbumFormComponent } from './components/album/album-form/album-form.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'autor',
    component:AutorListComponent
  },
  {
    path:'autor/create',
    component:AutorFormComponent
  },
  {
    path:'autor/update/:id',
    component:AutorFormComponent
  },
  {
    path:'cancion',
    component:CancionListComponent
  },
  {
    path:'cancion/create',
    component:CancionFormComponent
  },
  {
    path:'cancion/update/:id',
    component:CancionFormComponent
  },
  {
    path:'album',
    component:AlbumListComponent
  },
  {
    path:'album/create',
    component:AlbumFormComponent
  },
  {
    path:'album/update/:id',
    component:AlbumFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

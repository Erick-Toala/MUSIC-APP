import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, audit } from 'rxjs';

import { Album } from '../../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL:string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(`${this.BASE_URL}/album`);
  }
  getAlbum(id: string):Observable<Album>{ 
    return this.http.get<Album>(`${this.BASE_URL}/album/${id}`);
  }
  createAlbum(album:Album):Observable<Album>{
    return this.http.post<Album>(`${this.BASE_URL}/album/create`, album);

  }
  deleteAlbum(id: string):Observable<Album>{ 
    return this.http.delete<Album>(`${this.BASE_URL}/album/delete/${id}`);
  } 
  updateAlbumid(id: string, album:Album):Observable<Album>{
    return this.http.put<Album>(`${this.BASE_URL}/album/update/${id}`, album);
  }
}
